const parser = require('./parser.js');
const fs = require('fs');

it('parses a CSV into the correct format', async () => {
  const csvText = fs.readFileSync('src/data/fakeData.csv').toString();
  const parsed = await parser(csvText);
  expect(parsed).toEqual(
    { tables: [
      { title: 'How They Talk About It',
          subtitle: '',
          description: 'Description of how they talk about it',
        rows: [
          {
            title: 'A national, comprehensive mobilization',
            description: 'A national call-to-arms description'
          },
          {
            title: 'Plans include policies focused on creating jobs',
            description: 'Candidates’ plans description'
          }
        ] 
      },
      { title: 'How Much They Talk About It',
        subtitle: '',
        description: 'Description of how they talk about it',
        rows: [] 
      },
      { title: 'Green New Deal Vision',
        subtitle: '',
        description: 'Description of Green New Deal Vision',
        rows: [] },
      { title: '',
        subtitle: 'Emissions Reduction Ambition',
        description: 'Description of Emissions Reduction Ambition',
        rows: [
          {
            title: 'Mobilizing Resources',
            description: 'Includes a 10-year description'
          },
          {
            title: 'Emissions Timeline',
            description: 'Includes interim targets description'
          }
        ] 
      },
      { title: '',
        subtitle: 'Jobs and Economic Security',
        description: 'Description of Jobs and Economic Security',
        rows: [
          {
            title: 'Job Training',
            description: 'Includes plans for training description'
          }
        ] 
      }
    ]}
  );
});
