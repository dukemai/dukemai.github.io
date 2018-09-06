import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ReactIcon } from '../../../public/static/react.svg';

const propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};
const defaultProps = {};

const determineIcon = name => {
  try {
    return require(`../../../public/static/${name.toLowerCase()}.svg`)
      .ReactComponent;
  } catch (error) {
    return require(`../../../public/static/react.svg`).ReactComponent;
  }
};

const Skill = ({ name, rank, id }) => (
  <div className={`skill skill--${rank}`}>
    {determineIcon(id)()}
    {name}
  </div>
);

Skill.propTypes = propTypes;
Skill.defaultProps = defaultProps;
export default Skill;
