import React from 'react';
import './filter.css';
import icon from '../assets/dropdown.png';
import Checkboxes from './checkboxes.js';

class Filter extends React.Component {

    // Currently selected candidates
    candidateA = this.props.filter[0];
    candidateB = this.props.filter[1];
    candidateC = this.props.filter[2];

    mobileSize = window.matchMedia('(max-width: 520px)');


    constructor(props) {
        super(props);
        this.state = {
            filters: [
            {
                checked: [this.candidateA, this.candidateB, this.candidateC],
                active: this.props.filter[0]
            },
            {
                checked: [this.candidateA, this.candidateB, this.candidateC],
                active: this.props.filter[1]
            },
            {
                checked: [this.candidateA, this.candidateB, this.candidateC],
                active: this.props.filter[2]
            }   
          ],
            newSelection: ''
        };
    }


     openFilter = (e) => {
        e.preventDefault();

        var checkboxes = document.getElementsByClassName('checkboxes');
        var selectedCheckboxes = e.currentTarget.querySelector('.checkboxes')
        var isHidden = (selectedCheckboxes.style.display === 'none');

        // Make sure other dropdowns are hidden first
        checkboxes[0].style.display = "none";
        checkboxes[1].style.display = "none";
        checkboxes[2].style.display = "none";

        // Make copies of filters and checked array from state
        var newFilters = [...this.state.filters]

        // Reset local state to match app state since user has not clicked 'done'
        newFilters.forEach((filter, i) => {
            filter.checked = this.props.filter;
            filter.active = this.props.filter[i];
        })
  
        this.setState({
            filters: newFilters
        })

        // Todo: if we want to close overlay on window click, we may have to 
        // turn off the underlying click events
        // window.onclick = (event) => {
        //     checkboxes[0].style.display = "none";
        //     checkboxes[1].style.display = "none";
        //     checkboxes[2].style.display = "none";
        // }

        var backIcons = [document.getElementsByClassName("filter-back-icon")[0], document.getElementsByClassName("filter-back-icon")[1], document.getElementsByClassName("filter-back-icon")[2]];

        backIcons.forEach( icon => {
            icon.onclick = (event) => {
                checkboxes[0].style.display = "none";
                checkboxes[1].style.display = "none";
                checkboxes[2].style.display = "none";

                if (this.mobileSize.matches) {
                    // Unlock fixed body if on mobile screen
                    var scrollY = document.body.style.top;
                    document.body.style.position = '';
                    document.body.style.top = '';
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            };
        })


        if (this.mobileSize.matches) {
            // When the mobile modal is shown, we want a fixed body
            var currentScroll = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = ("-" + currentScroll + "px")
        }

   
        // Show selected filter overlay if it's currently hidden
        isHidden ? (selectedCheckboxes.style.display = "block") : (selectedCheckboxes.style.display = "none") 
    }

    handleCheckboxChange = (selection, filterInd) => {
        // Make copies of filters and checked array from state
        var newFilters = [...this.state.filters]
        var newCheckedArr = [...this.state.filters[filterInd].checked];

        // Indicate previously active candidate
        var previous = this.state.filters[filterInd].active;
        var previousIndex = newCheckedArr.indexOf(previous)

        // If there's a new candidate, update state
        if (selection && selection !== previous) {

            if (this.state.filters[filterInd].checked.length === 3) {
            // Update copy of state by replacing old selection with new one
            newCheckedArr.splice(previousIndex, 1, selection)
            newFilters[filterInd].checked = newCheckedArr
            

            this.setState({
                filters: newFilters,
                newSelection: selection
            })
          } else {
            newCheckedArr.push(selection);
            newFilters[filterInd].checked = newCheckedArr;

            this.setState({
                newSelection: selection,
                filters: newFilters
            })
          }
        newFilters[filterInd].active = selection;
        
        } 
        else 
        // If the user is unchecking the active candidate, remove that candidate from state
        {   
            if (this.state.filters[filterInd].checked.length === 3) {
                newCheckedArr.splice(previousIndex, 1)
                newFilters[filterInd].checked = newCheckedArr
                newFilters[filterInd].active = '';
            
                this.setState({
                    newSelection: '',
                    filters: newFilters
                })
            } else {
                newCheckedArr.push(selection);
                newFilters[filterInd].checked = newCheckedArr;
                newFilters[filterInd].active = selection;
    
                this.setState({
                    newSelection: selection,
                    filters: newFilters
                })


        }
    }
}

    handleDone = (i) => {
        // Make copies of filters and checked array from state
        var newFilters = [...this.state.filters]
        var newCheckedArr = [...this.state.filters[i].checked];

        if (this.mobileSize.matches) {
            // Unlock fixed body if on mobile screen
            var scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        if (this.state.newSelection) {
            // Call app state with new selection and index of checkbox overlay
             this.props.handleFilterChange(this.state.newSelection, i)

            // Reset local state
             this.setState({
                newSelection: ''
            })
            
        } else {

            // Reset local state to match app state
            newCheckedArr.push(this.props.filter[i])
            newFilters[i].checked = newCheckedArr
            newFilters[i].active = this.props.filter[i];

            this.setState({
                filters: newFilters
            })
        }

        // Make sure all filter overlays are in alignment
        newFilters.forEach( (filter) => {
            filter.checked = newCheckedArr
        })

        this.setState({
            filters: newFilters
        })

    }


    render () {
        return ( 
                <div className="filter">

                    <div className="candidate-dropdown" onClick={this.openFilter}>
                        {this.props.filter[0]} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                        <Checkboxes 
                            filter={this.props.filter}
                            candidates = {this.props.candidates}
                            checked = {this.state.filters[0].checked}
                            active = {this.state.filters[0].active} 
                            key={1} 
                            ind={0} 
                            handleCheckboxChange = {this.handleCheckboxChange}
                            handleDone = {this.handleDone} />
                    </div>

                    <div className="candidate-dropdown" onClick={this.openFilter}>
                        {this.props.filter[1]} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                        <Checkboxes 
                            filter={this.props.filter} 
                            candidates = {this.props.candidates}
                            checked = {this.state.filters[1].checked}
                            active = {this.state.filters[1].active} 
                            key={2} 
                            ind={1} 
                            handleCheckboxChange = {this.handleCheckboxChange}
                            handleDone = {this.handleDone} />
                    </div>

                    <div className="candidate-dropdown" onClick={this.openFilter}>
                        {this.props.filter[2]} <img className="dropdown-icon" alt="Dropdown icon"src={icon}></img>
                        <Checkboxes 
                            filter={this.props.filter}
                            candidates = {this.props.candidates}
                            checked = {this.state.filters[2].checked}
                            active = {this.state.filters[2].active} 
                            key={3} 
                            ind={2} 
                            handleCheckboxChange = {this.handleCheckboxChange}
                            handleDone = {this.handleDone} />
                    </div>

                </div>
        );
    }
}

export default Filter;