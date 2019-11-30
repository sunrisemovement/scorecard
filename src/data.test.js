import Ajv from 'ajv';
import schema from'./data/schema.json';
import scorecardData from './data.js';

it('the format matches the schema', () => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(scorecardData);
  expect(validate.errors).toBeNull();
  expect(valid).toBeTruthy();
});

