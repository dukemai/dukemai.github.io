import React from 'react';
import PropTypes from 'prop-types';

import { AppDescription, AppDetail } from '../../components';
import { apps } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const scoreApp = apps[0];

const ScoreSheet = ({ }) => (
  <div className="scoreSheet appSheet">
    <AppDescription {...scoreApp} />
    <AppDetail />
  </div>  
);

ScoreSheet.propTypes = propTypes;
ScoreSheet.defaultProps = defaultProps;
export default ScoreSheet;
