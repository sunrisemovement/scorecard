const csv = require('neat-csv')
const fs = require('fs')

async function parse(csvData) {
  const tables = [];
  const parsed = await csv(csvData);

  parsed.forEach((row) => {
    const maybeTableTitle = row['Section'];
    const maybeCategoryName = row['Category'];
    if(maybeTableTitle !== '') {
      tables.push(parseTableOrSubtable(row));
    } else if (maybeCategoryName !== '' && maybeCategoryName != 'Subtotal') {
      // Ignore empty rows and Subtotal rows
      let currentTable = tables[tables.length - 1];
      currentTable.rows.push(parseCategory(row));
    }
  })

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

  if(subtableRegex.test(tableTitle)) {
    // Remove parenthesized score, e.g. (20)
    const scoreRegex = /\s+\(\d+\)\s*/
    const subtableTitle = tableTitle.
      split(subtableRegex)[1].
      split(scoreRegex)[0];
    return {
      title: "",
      subtitle: subtableTitle,
      description: description,
      rows: []
    };
  } else {
    return {
      title: tableTitle,
      subtitle: "",
      description: description,
      rows: []
    };
  }
}

function parseCategory(data) {
  return {
    title: data['Category'],
    description: data['Category Description'],
    total: data['Possible Score']
  }
}

// This doesn't run through babel, es5!
module.exports = parse;
