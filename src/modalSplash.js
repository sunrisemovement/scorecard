import React from 'react';
import './candidateInfo.css';
import person from './assets/person.png';

function ModalSplash(props) {

    return ( 
        <div className="no-candidate-selected">
            <img className="person-icon" src={person} alt="No candidate selected icon"></img>
            <div className="no-candidate-title">
             No candidate selected
            </div>
            <div className="no-candidate-text">
            Choose a candidate above to read about their plan
            </div>
        </div>
    );
}

export default ModalSplash;