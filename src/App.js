import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';
import InfoModal from './infoModal.js'
import SunriseNav from './common/sunriseNav.js'
import MobileNav from './common/mobileNav.js'
import SunriseFooter from './common/sunriseFooter.js'
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

    this.openModal(lastClicked);
  }

  onClickIcon = (row, table) => {
    let lastClicked = {candidate: null, row: row };

    this.setState({
      table: parseInt(table),
      row: parseInt(row)
    });

    this.openModal(lastClicked);
  }

  onClickNav = (id) => {
    var tableId = "#table-" + id
    var table = document.querySelector(tableId);
    window.scrollTo(0, (table.offsetTop - 70))
    }

  onClickModalNav = (e) => {
    let newCandidate = e.target.dataset.name

    this.setState({
      candidate: newCandidate
    })
    }

  openModal(lastClicked) {
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
    };

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
    };
  }

  render () {
    return (
      <div className="App scorecard-app">
        <SunriseNav />
        <MobileNav />
          <div className="main-scorecard-container">
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
        <SunriseFooter />
      </div>
    );
  }
}

export default App;
