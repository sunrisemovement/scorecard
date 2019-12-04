import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
import ReactTestUtils from 'react-dom/test-utils';

let container;

beforeEach(() => {
  jest.resetModules();
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('the table renders the subtotals when there are no rows', () => {
  const data = {
    "title": "Table 1",
    "subtitle": "",
    "rows": [],
    "subtotals": {
      "biden": 1,
      "warren": 2,
      "sanders": 3
    },
    "description": "fake table",
    "points": "8",
    "id": "table-1"
  };

  ReactDOM.render(<Table 
    table = {data}
    id = {1}
    key = {1}
    onClickCell = {() => {}}
    onClickIcon = {() => {}}
  />, container);

  const tableName = container.querySelector('.table-title');
  expect(tableName.textContent).toBe('Table 1');
  const subtotalTitle = container.querySelector('.subtotal-title');
  expect(subtotalTitle.textContent).toBe('Subtotal (out of 8)');
});
