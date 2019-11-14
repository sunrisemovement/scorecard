import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Scorecard from 'src/Scorecard'

const testData = {
  categories: [
    { 
      id: 1,
      name: "Fake Category 1",
      outOf: 5
    }
  ],
  candidates: [
    {
      id: 1,
      name: "Mrs. Candidate 1"
    }
  ]
}

describe('Scorecard component', () => {
  let node
  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays the page title', () => {
    render(<Scorecard tableData={testData}/>, node, () => {
      expect(node.textContent).toContain('The Sunrise Presidential Scorecard')
    })
  })

  it('displays the categories', () => {
    render(<Scorecard tableData={testData}/>, node, () => {
      expect(node.textContent).toContain('Fake Category 1')
    })
  })

  it('displays the candidates', () => {
    render(<Scorecard tableData={testData}/>, node, () => {
      expect(node.textContent).toContain('Mrs. Candidate 1')
    })
  })
})
