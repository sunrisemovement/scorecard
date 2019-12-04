import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';
import InfoModal from './infoModal.js'
import SunriseNav from './common/sunriseNav.js'
import MobileNav from './common/mobileNav.js'
import SunriseFooter from './common/sunriseFooter.js'
import IeBanner from './common/ieBanner.js'
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

  // Toggle to remove Sunrise header/footer/nav for embed mode
  embedMode = false;

  // Check if the current browser is IE

  ua = navigator.userAgent;
  isIE = this.ua.indexOf("MSIE ") > -1 || this.ua.indexOf("Trident/") > -1;

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
    table.scrollIntoView({behavior: "smooth"});
    }

  onClickModalNav = (e) => {
    let newCandidate = e.target.dataset.name

    this.setState({
      candidate: newCandidate
    })
    }

  openModal(lastClicked) {
    var modal = document.getElementById("info-modal");
    var closeIcons = [document.getElementsByClassName("sc-modal-close")[0], document.getElementsByClassName("back-icon")[0]]
    var currentScroll = window.scrollY;

    modal.style.display = "block";
    modal.scrollTop = 0;

    // When the modal is shown, we want a fixed body
    document.body.style.position = 'fixed';
    document.body.style.top = ("-" + currentScroll + "px")

    closeIcons.forEach( icon => {
      icon.onclick = (event) => {
        this.closeModal(modal, lastClicked)
      }
    })

    window.onclick = (event) => {
      if (event.target === modal) {
        this.closeModal(modal, lastClicked);
      }
    };
  }

  closeModal(modal, lastClicked) {
    modal.style.display = "none";
    var scrollY = document.body.style.top;

    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    this.setState({
      candidate: null,
      row: 0,
      table: 0,
      lastClicked: lastClicked
    });
  }

  render () {
    return (
      <div className="App scorecard-app">
        {this.isIe && <IeBanner />}
        {!this.embedMode && <SunriseNav /> }
        {!this.embedMode && <MobileNav /> }
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
         {!this.embedMode && <SunriseFooter /> }
      </div>
    );
  }
}

export default App;
