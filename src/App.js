import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';
import InfoModal from './infoModal.js'
import scorecardData from './data.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      candidate: null,
      table: null,
      row: null,
      lastClicked: null
    };
  }

  onClickCell = (row, table, candidate) => {
    let lastClicked = {candidate: candidate, row: row };
    console.log(table)

    this.setState({
      candidate: candidate,
      table: table,
      row: row
    });

    var modal = document.getElementById("info-modal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    span.onclick = (event) => {
      modal.style.display = "none";
      this.setState({
        candidate: null,
        row: null,
        table: null,
        lastClicked: lastClicked
      });
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        this.setState({
          candidate: null,
          row: null,
          table: null,
          lastClicked: lastClicked
        });
      }
    }
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
        <InfoModal />
      </div>
    );
  }
}

export default App;
