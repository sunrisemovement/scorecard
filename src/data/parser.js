const csv = require('csv-parser')
const fs = require('fs')

async function parse(fileName) {
  const tables = [];

  fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (data) => {
      const maybeTableTitle = data['Section'];
      if(maybeTableTitle !== '') {
        tables.push(parseTableOrSubtable(data));
      } else {
      }
    }).on('end', () => {
      const finalData = {
        tables: tables
      };
      console.log(finalData)
    });

  return tables;
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

// This doesn't run through babel, es5!
module.exports = parse;
