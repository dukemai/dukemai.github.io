import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};
const defaultProps = {};

const frontEnd = ['React', 'Redux', 'CSS3', 'HTML5', 'Stylus', 'AngularJS', 'Webpack', 'jQuery'];
const backEnd = ['Nodejs', '.Net', 'Passport', 'Episerver CMS','SQL', 'MongoDB', '.Net 3.5'];
const performance = [];

const decideClass = text => {
  if (frontEnd.indexOf(text) > -1) {
    return 'badge--fe';
  }
  if (backEnd.indexOf(text) > -1) {
    return 'badge--be';
  }
  return '';
};

const Stack = ({ text }) => (
  <span className={`badge ${decideClass(text)}`}>{text}</span>
);

Stack.propTypes = propTypes;
Stack.defaultProps = defaultProps;
export default Stack;
