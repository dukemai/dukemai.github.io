import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};
const defaultProps = {};

const Skill = ({ name, rank }) => (
  <div className={`skill skill--${rank}`}>{name}</div>
);

Skill.propTypes = propTypes;
Skill.defaultProps = defaultProps;
export default Skill;
