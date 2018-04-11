import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};
const defaultProps = {
};

const Stack = ({ text }) => (
  <span className="badge">{text}</span>
);

Stack.propTypes = propTypes;
Stack.defaultProps = defaultProps;
export default Stack;
