const csv = require('neat-csv')
const fs = require('fs')

async function parse(csvData) {
  const tables = [];
  const parsed = await csv(csvData);

  parsed.forEach((row) => {
    const maybeTableTitle = row['Section'];
    const maybeCategoryName = row['Category'];
    if (maybeTableTitle !== '') {
      if (maybeTableTitle === 'Green New Deal Vision') {
        // TODO: remove this weird special case later
      } else {
        tables.push(parseTableOrSubtable(row));
      }
    } else if (maybeCategoryName === 'Subtotal') {
      const subtotals = getSubtotals(row);
      const currentTable = tables.pop();
      const updatedTable = Object.assign(currentTable, subtotals);
      tables.push(updatedTable);
    } else if (maybeCategoryName !== '') {
      // Ignore empty rows and Subtotal rows
      let currentTable = tables[tables.length - 1];
      currentTable.rows.push(parseCategory(row));
    }
  })

  tables.map((table, index) => {
    return Object.assign(table, { 
      id: 'table-' + (index + 1) 
    });
  });

  return {
    tables: tables
  };
}

function parseTableOrSubtable(data) {
  // If we have a number in front of the title,
  // we are dealing with a subtitle.
  const subtableRegex = /^\d+.\s+/

  const tableTitle = data['Section']
  const description = data['Description']

  let tableAttributes;
  if (subtableRegex.test(tableTitle)) {
    // Remove parenthesized score, e.g. (20)
    const scoreRegex = /\s+\(\d+\)\s*/
    const subtableTitle = tableTitle.
      split(subtableRegex)[1].
      split(scoreRegex)[0];

    tableAttributes = {
      title: "",
      subtitle: subtableTitle,
    };

    // TODO: remove this special case later - the GND
    // section is a one-off
    if(subtableTitle === 'Emissions Reduction Ambition') {
      tableAttributes = Object.assign(tableAttributes, {
        categoryTitle: 'Green New Deal Vision',
        categoryPoints: '100',
      });
    }
  } else {
    tableAttributes = {
      title: tableTitle,
      subtitle: "",
    };
  }

  return Object.assign(tableAttributes, {
    rows: [],
    subtotals: getSubtotals(data),
    description: description
  });
}

function parseCategory(data) {
  const perCandidateData = parseCategoryCandidateData(data);
  return Object.assign({
    title: data['Category'],
    description: data['Category Description'],
    total: data['Possible Score']
  }, perCandidateData);
}

function parseCategoryCandidateData(data) {
  const candidateNames = getCandidateNames(data);

  return candidateNames.reduce((obj, name) => {
    return Object.assign(obj, {
      [name.toLowerCase()]: {
        score: data[name + ' Score'],
        analysis: data[name + ' Analysis'],
      }
    });
  }, {});
}

function getCandidateNames(data) {
  const keys = Object.keys(data);
  const scoreColumnRegex = /\s*Analysis\s*/;
  return keys.filter((key) => {
    return scoreColumnRegex.test(key);
  }).map((key) => {
    return key.split(scoreColumnRegex)[0];
  });
}

function getSubtotals(data) {
  const candidateNames = getCandidateNames(data);

  const candidateSubtotals = candidateNames.reduce((obj, name) => {
    const score = data[name + ' Score'] === '' ? '0' : data[name + ' Score'];

    return Object.assign(obj, {
      [name.toLowerCase()]: score
    });
  }, {});

  return {
    subtotals: candidateSubtotals,
    points: data['Possible Score']
  };
}

// This doesn't run through babel, es5!
module.exports = parse;
