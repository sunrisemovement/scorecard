import './index.css';

import React from 'react';
import { render } from 'react-dom';

import Scorecard from './Scorecard';
import HowTheyTalkAboutItData from './ScorecardData.js';

render(
  <Scorecard tableData={HowTheyTalkAboutItData} />,
  document.querySelector('#app'),
);
