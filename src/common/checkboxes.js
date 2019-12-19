import React from 'react';
import './filter.css';
import Checkbox from './checkbox.js';

function Checkboxes(props) {

    // Our data doesn't currently reference the candidates
    // by their full names. We can use this constant to generate
    // necessary checkbox filters for now.
    const candidateNames = [['Joe', 'Biden'],
                            ['Cory', 'Booker'],
                            ['Pete', 'Buttigieg'],
                            ['Bernie', 'Sanders'],
                            ['Elizabeth', 'Warren'],
                            ['Andrew', 'Yang']]

    const filterName = props.filter[props.ind]

    return ( 
        <div className="checkboxes" style={ {display: 'none'}} id={'ch-'+props.ind} onClick={(e) => e.stopPropagation()}>
            {
                candidateNames.map(function (name, i) {
                    return <Checkbox 
                    name = {name}
                    filter = {props.filter}
                    filterName = {filterName}
                    key = {i}
                    id = {i}
                    />
                })
            }
         </div>
    );
}

export default Checkboxes;