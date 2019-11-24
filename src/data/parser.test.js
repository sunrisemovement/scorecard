const parser = require('./parser.js');
const fs = require('fs');

it('parses a CSV into the correct format', async () => {
  // TODO: this doesn't pass right now because
  // createFsStream is async, so it returns this test
  // returns null
  
  const csvText = fs.readFileSync('src/data/fakeData.csv').toString();
  const parsed = await parser(csvText);
  expect(parsed).toEqual(
    { tables: [
      { title: 'How They Talk About It',
          subtitle: '',
          description: 'Description of how they talk about it',
          rows: [] },
        { title: 'How Much They Talk About It',
          subtitle: '',
          description: 'Description of how they talk about it',
          rows: [] },
        { title: 'Green New Deal Vision',
          subtitle: '',
          description: 'Description of Green New Deal Vision',
          rows: [] },
        { title: '',
          subtitle: 'Emissions Reduction Ambition',
          description: 'Description of Emissions Reduction Ambition',
          rows: [] },
        { title: '',
          subtitle: 'Jobs and Economic Security',
          description: 'Description of Jobs and Economic Security',
          rows: [] }
    ]}
  );
});
