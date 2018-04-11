import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};
const defaultProps = {
};

const Role = ({ text }) => (
  <li className="role">
    {text}
  </li>  
);

Role.propTypes = propTypes;
Role.defaultProps = defaultProps;
export default Role;
