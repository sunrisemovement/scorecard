import './App.css';

import React from 'react';
import PropTypes from 'prop-types';

function ScorecardTable({ data }) {
  const headers = data.candidates.map((candidate) => <th>{candidate.name}</th>);

  const rows = data.categories.map((category) => (
    <tr>
      <td>
        {category.name}
        <span>
(out of
          {category.outOf}
)
        </span>
      </td>
    </tr>
  ));

  return (
    <table>
      <tr>
        <th label="Candidates" />
        {headers}
      </tr>
      {rows}
    </table>
  );
}

ScorecardTable.propTypes = {
  data: PropTypes.object,
};

ScorecardTable.defaultProps = {
  data: {
    categories: [],
    candidates: [],
  },
};

function HowTheyTalkAboutIt({ tableData }) {
  return (
    <section>
      <h2>How they talk about it</h2>
      <span>(out of 35)</span>
      <p>
        This section scores the candidate's framing and messaging
        when it comes to the Green New Deal. The criteria below were
        chosen as a representation of points Sunrise finds crucial
        to the scope of a Green New Deal. The scoring is based on
        the candidate's Green New Deal climate plan.
      </p>
      <ScorecardTable data={tableData} />
    </section>
  );
}

HowTheyTalkAboutIt.propTypes = {
  tableData: PropTypes.object,
};

HowTheyTalkAboutIt.defaultProps = {
  tableData: {
    categories: [],
    candidates: [],
  },
};

function Scorecard({ tableData }) {
  return (
    <div>
      <h1>The Sunrise Presidential Scorecard</h1>
      <p>Click on a candidate's score for more details on their plan.</p>

      <HowTheyTalkAboutIt tableData={tableData} />
    </div>
  );
}

Scorecard.propTypes = {
  tableData: PropTypes.object,
};

Scorecard.defaultProps = {
  tableData: {
    categories: [],
    candidates: [],
  },
};

export default Scorecard;
