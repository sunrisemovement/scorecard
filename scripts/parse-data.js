const parser = require('../src/data/parser.js');
var fs = require('fs');


async function parsed() {
  const textByLine = fs.readFileSync('Data.csv').toString()
  const parsed = await parser(textByLine);
  const json = JSON.stringify(parsed, undefined, 2);
  fs.writeFile('ParsedData.json', json, 'utf8', () => {
    console.log("Wrote to ParsedData.json");
    console.log(json);
  });
}

parsed();
