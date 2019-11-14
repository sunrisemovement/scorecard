import './App.css'

import HowTheyTalkAboutItData from './ScorecardData.js'
import React, {Component} from 'react'

function ScorecardTable(props) {
  const rows = props.data.categories.map(category =>
    <tr><td>{category.name}</td></tr>
  )

  return <table>{rows}</table>
}

function HowTheyTalkAboutIt(props) {
  return <section>
    <h2>How they talk about it</h2>
    <span>(out of 35)</span>
    <p>This section scores the candidate's framing and messaging when it comes to the Green New Deal. The criteria below were chosen as a representation of points Sunrise finds crucial to the scope of a Green New Deal. The scoring is based on the candidate's Green New Deal climate plan.</p>
    <ScorecardTable data={props.tableData}/>
  </section>
}

class Scorecard extends Component {
  render() {
    return <div>
      <h1>The Sunrise Presidential Scorecard</h1>
      <p>Click on a candidate's score for more details on their plan.</p>

      <HowTheyTalkAboutIt tableData={HowTheyTalkAboutItData}/>
    </div>
  }
}

export default Scorecard
