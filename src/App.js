import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';
import InfoModal from './infoModal.js'
import SunriseNav from './common/sunriseNav.js'
import MobileNav from './common/mobileNav.js'
import SunriseFooter from './common/sunriseFooter.js'
import IeBanner from './common/ieBanner.js'
import smoothscroll from 'smoothscroll-polyfill';
import data from './data.js';

// Initiate smoothscroll polyfill for Safari
smoothscroll.polyfill();

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      filter: ['biden', 'warren', 'sanders'],
      candidate: null,
      table: 0,
      row: 0,
      lastClicked: null
    };
  }

  // Toggle to remove Sunrise header/footer/nav for embed mode
  embedMode = false;

  // Toggle to enable filter for multiple candidates. Set to 'true' for phase 2 release.
  filterEnabled = false;

  // Check if the current browser is IE
  checkIe = () => {
    let ua = navigator.userAgent;
    var isIe = ua.indexOf("MSIE") > -1 || ua.indexOf("Trident/") > -1;

    if (isIe) {
      return <IeBanner />
    }
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

  onClickRow = (row, table) => {
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
    var offset = (this.filterEnabled) ? 50 : 0;

      window.scrollTo({
        top: (table.offsetTop - offset),
        left: 0,
        behavior: 'smooth'
      })
    }

  onClickModalNav = (e) => {
    let newCandidate = e.target.dataset.name;

    var analysisContainer = document.getElementsByClassName('analysis-container')[0]
    analysisContainer.scrollTop = 0;

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

  handleFilterChange = (selection, i) => {
      var newFilter = [...this.state.filter];
      newFilter[i] = selection;

      this.setState({
        filter: newFilter
     })
   }

  render () {
    return (
      <div className="App scorecard-app">
        {this.checkIe()}
        {!this.embedMode && <SunriseNav /> }
        {!this.embedMode && <MobileNav /> }
          <div className="main-scorecard-container">
            <ScorecardApp onClickCell={this.onClickCell} 
                          onClickNav={this.onClickNav}
                          scorecardData={data}
                          onClickRow={this.onClickRow}
                          filterEnabled={this.filterEnabled}
                          filter={this.state.filter}
                          handleFilterChange={this.handleFilterChange}
                          />
            <InfoModal scorecardData={data}
                      candidate={this.state.candidate}
                      row={this.state.row}
                      table={this.state.table}
                      onClickModalNav={this.onClickModalNav}
                      filter={this.state.filter}
                      />
         </div>
         {!this.embedMode && <SunriseFooter /> }
      </div>
    );
  }
}

export default App;
