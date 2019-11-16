import React from 'react';
import './App.css';
import ScorecardApp from './ScorecardApp.js';
import InfoModal from './infoModal.js'
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
    // Get the modal
var modal = document.getElementById("info-modal");
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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
