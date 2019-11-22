import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';
import InfoModal from './infoModal.js'
// Import dummy data to fill scorecard
import scorecardData from './data.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      candidate: null,
      table: 0,
      row: 0,
      lastClicked: null
    };
  }

  onClickCell = (row, table, candidate) => {
    let lastClicked = {candidate: candidate, row: row };

    this.setState({
      candidate: candidate,
      table: parseInt(table),
      row: parseInt(row)
    });

    var modal = document.getElementById("info-modal");
    var span = document.getElementsByClassName("sc-modal-close")[0];
    modal.style.display = "block";
    modal.scrollTop = 0;


    span.onclick = (event) => {
      modal.style.display = "none";
      this.setState({
        candidate: null,
        row: 0,
        table: 0,
        lastClicked: lastClicked
      });
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        this.setState({
          candidate: null,
          row: 0,
          table: 0,
          lastClicked: lastClicked
        });
      }
    }
  }

  onClickIcon = (row, table) => {
    let lastClicked = {candidate: null, row: row };

    this.setState({
      table: parseInt(table),
      row: parseInt(row)
    });

    var modal = document.getElementById("info-modal");
    var span = document.getElementsByClassName("sc-modal-close")[0];
    modal.style.display = "block";
    modal.scrollTop = 0;

    span.onclick = (event) => {
      modal.style.display = "none";
      this.setState({
        candidate: null,
        row: 0,
        table: 0,
        lastClicked: lastClicked
      });
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        this.setState({
          candidate: null,
          row: 0,
          table: 0,
          lastClicked: lastClicked
        });
      }
    }
  }

  onClickNav = (id) => {
    var tableId = "#table-" + id
    var table = document.querySelector(tableId);
    window.scrollTo(0, (table.offsetTop - 260))
    }

  onClickModalNav = (e) => {
    let newCandidate = e.target.dataset.name

    this.setState({
      candidate: newCandidate
    })
    }

  render () {
    return (
      <div className="App scorecard-app">
        <ScorecardApp onClickCell={this.onClickCell} 
                      onClickNav={this.onClickNav}
                      scorecardData={scorecardData}
                      onClickIcon={this.onClickIcon}
                      />
        <InfoModal scorecardData={scorecardData} 
                   candidate={this.state.candidate}
                   row={this.state.row}
                   table={this.state.table}
                   onClickModalNav={this.onClickModalNav}/>
      </div>
    );
  }
}

export default App;
