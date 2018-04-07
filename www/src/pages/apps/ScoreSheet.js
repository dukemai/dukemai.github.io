import React from 'react';
import PropTypes from 'prop-types';

import { AppDescription, AppDetail, UseCase } from '../../components';
import { apps } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const scoreApp = apps[0];

const ScoreSheet = ({ }) => (
  <div className="scoreSheet appSheet">
    <AppDescription {...scoreApp}>
      {
        scoreApp.usecases.map(useCase => (
          <UseCase {...useCase} />
        ))
      }
    </AppDescription>  
    <AppDetail {...scoreApp} />
  </div>  
);

ScoreSheet.propTypes = propTypes;
ScoreSheet.defaultProps = defaultProps;
export default ScoreSheet;
