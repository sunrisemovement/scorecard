import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Scorecard from 'src/Scorecard'

describe('Scorecard component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays the page title', () => {
    render(<Scorecard/>, node, () => {
      expect(node.textContent).toContain('The Sunrise Presidential Scorecard')
    })
  })
})
