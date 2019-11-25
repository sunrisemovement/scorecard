const parser = require('./parser.js');
const fs = require('fs');

it('parses a CSV into the correct format', async () => {
  const csvText = fs.readFileSync('src/data/fakeData.csv').toString();
  const parsed = await parser(csvText);
  expect(parsed).toEqual(
    { tables: [
      { title: 'How They Talk About It',
        id: 'table-1',
        subtitle: '',
        description: 'Description of how they talk about it',
        points: '8',
        subtotals: {
          fred: '7',
          zana: '8'
        },
        rows: [
          {
            title: 'A national, comprehensive mobilization',
            description: 'A national call-to-arms description',
            total: '4',
            fred: {
              score: '3',
              analysis: 'Vice President Fred’s plan'
            },
            zana: {
              score: '4',
              analysis: 'Senator Zana’ plan analysis'
            }
          },
          {
            title: 'Plans include policies focused on creating jobs',
            description: 'Candidates’ plans description',
            total: '4',
            fred: {
              score: '4',
              analysis: 'Vice President Fred’s plan 2'
            },
            zana: {
              score: '4',
              analysis: 'Sen. Zana’ plan commits'
            }
          }
        ] 
      },
      { title: 'How Much They Talk About It',
        id: 'table-2',
        subtitle: '',
        description: 'Description of how they talk about it',
        points: '25',
        subtotals: {
          fred: '8',
          zana: '23'
        },
        rows: [] 
      },
      { title: '',
        categoryTitle: 'Green New Deal Vision',
        categoryPoints: '100',
        id: 'table-3',
        subtitle: 'Emissions Reduction Ambition',
        description: 'Description of Emissions Reduction Ambition',
        points: '8',
        subtotals: {
          fred: '2',
          zana: '8'
        },
        rows: [
          {
            title: 'Mobilizing Resources',
            description: 'Includes a 10-year description',
            total: '4',
            fred: {
              score: '1',
              analysis: ''
            },
            zana: {
              score: '4',
              analysis: ''
            }
          },
          {
            title: 'Emissions Timeline',
            description: 'Includes interim targets description',
            total: '4',
            fred: {
              score: '1',
              analysis: ''
            },
            zana: {
              score: '4',
              analysis: ''
            }
          }
        ] 
      },
      { title: '',
        subtitle: 'Jobs and Economic Security',
        description: 'Description of Jobs and Economic Security',
        id: 'table-4',
        points: '2',
        subtotals: {
          fred: '1',
          zana: '2'
        },
        rows: [
          {
            title: 'Job Training',
            description: 'Includes plans for training description',
            total: '2',
            fred: {
              score: '1',
              analysis: ''
            },
            zana: {
              score: '2',
              analysis: ''
            }
          }
        ] 
      }
    ]}
  );
});
