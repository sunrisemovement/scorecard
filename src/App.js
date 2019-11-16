import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';
import scorecardData from './data.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      candidate: null,
      row: null,
      lastClicked: null
    };
  }

  onClickCell = (e, candidate) => {
    console.log(e, candidate);
    }

  onClickNav = (e) => {
    var tableId = "#table-" + e
    var table = document.querySelector(tableId);
    window.scrollTo(0, (table.offsetTop - 290))
    }

  render () {
    return (
      <div className="App">
        <ScorecardApp onClickCell={this.onClickCell} onClickNav={this.onClickNav}
                      scorecardData={scorecardData}/>
      </div>
    );
  }
}

export default App;
