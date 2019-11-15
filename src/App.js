import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';


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
    // console.log(e);

    // var tableId = "#table-" + e
    // var table = document.querySelector(tableId);
    // table.scrollIntoView();
    }

  render () {
    return (
      <div className="App">
        <ScorecardApp onClickCell={this.onClickCell} onClickNav={this.onClickNav}/>
      </div>
    );
  }
}

export default App;
