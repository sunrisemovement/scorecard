const parser = require('./parser.js');
const fs = require('fs');
const Ajv = require('ajv');
const schema = require('./schema.json');

it('parses a CSV into the correct data', async () => {
  const csvText = fs.readFileSync('src/data/fakeData.csv').toString();
  const parsed = await parser(csvText);
  expect(parsed).toEqual(expectedData);
});

it('parses into a format that matches the schema', () => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(expectedData);
  expect(validate.errors).toBeNull();
  expect(valid).toBeTruthy();
});

const expectedData = {
  "tables": [
    {
      "title": "How They Talk About It",
      "subtitle": "",
      "rows": [
        {
          "title": "A national, comprehensive mobilization",
          "description": "A national call-to-arms description",
          "total": "4",
          "biden": {
            "score": "3",
            "analysis": "Vice President Fred’s plan",
            "source": "biden source"
          },
          "warren": {
            "score": "4",
            "analysis": "Senator Zana’ plan analysis",
            "source": "warren source"
          },
          "sanders": {
            "score": "4",
            "analysis": "Cardamom’ plan commits",
            "source": "sanders source"
          }
        },
        {
          "title": "Plans include policies focused on creating jobs",
          "description": "Candidates’ plans description",
          "total": "4",
          "biden": {
            "score": "4",
            "analysis": "Vice President Fred’s plan 2",
            "source": ""
          },
          "warren": {
            "score": "4",
            "analysis": "Sen. Zana’ plan commits",
            "source": ""
          },
          "sanders": {
            "score": "4",
            "analysis": "Cardamom!",
            "source": ""
          }
        }
      ],
      "subtotals": {
        "biden": "7",
        "warren": "8",
        "sanders": "8"
      },
      "description": "Description of how they talk about it",
      "points": "8",
      "id": "table-1"
    },
    {
      "title": "How Much They Talk About It",
      "subtitle": "",
      "rows": [],
      "subtotals": {
        "biden": "8",
        "warren": "23",
        "sanders": "23"
      },
      "description": "Description of how they talk about it",
      "points": "25",
      "id": "table-2"
    },
    {
      "title": "",
      "subtitle": "Emissions Reduction Ambition",
      "categorytitle": "Green New Deal Vision",
      "categorypoints": "100",
      "rows": [
        {
          "title": "Mobilizing Resources",
          "description": "Includes a 10-year description",
          "total": "4",
          "biden": {
            "score": "1",
            "analysis": "",
            "source": ""
          },
          "warren": {
            "score": "4",
            "analysis": "",
            "source": ""
          },
          "sanders": {
            "score": "4",
            "analysis": "",
            "source": ""
          }
        },
        {
          "title": "Emissions Timeline",
          "description": "Includes interim targets description",
          "total": "4",
          "biden": {
            "score": "1",
            "analysis": "",
            "source": ""
          },
          "warren": {
            "score": "4",
            "analysis": "",
            "source": ""
          },
          "sanders": {
            "score": "4",
            "analysis": "",
            "source": ""
          }
        }
      ],
      "subtotals": {
        "biden": "2",
        "warren": "8",
        "sanders": "8"
      },
      "description": "Description of Emissions Reduction Ambition",
      "points": "8",
      "id": "table-3"
    },
    {
      "title": "",
      "subtitle": "Jobs and Economic Security",
      "rows": [
        {
          "title": "Job Training",
          "description": "Includes plans for training description",
          "total": "2",
          "biden": {
            "score": "1",
            "analysis": "",
            "source": ""
          },
          "warren": {
            "score": "2",
            "analysis": "",
            "source": ""
          },
          "sanders": {
            "score": "2",
            "analysis": "",
            "source": ""
          }
        }
      ],
      "subtotals": {
        "biden": "1",
        "warren": "2",
        "sanders": "2"
      },
      "description": "Description of Jobs and Economic Security",
      "points": "2",
      "id": "table-4"
    }
  ]
};
