import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  rules: PropTypes.string.isRequired,
  settings: PropTypes.string.isRequired,
};
const defaultProps = {
};

const UseCase = ({ title, rules, settings }) => (
  <div className="useCase">
    <h3 className="useCase__title">
      {title}
    </h3>
    <h4>Game rules</h4>
    <p className="useCase__rules">
      {rules}
    </p>
    <h4>Settings</h4>
    <p className="useCase__settings">
      {settings}
    </p>  
  </div>  
);

UseCase.propTypes = propTypes;
UseCase.defaultProps = defaultProps;
export default UseCase;
