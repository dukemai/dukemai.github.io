import React from 'react';
import PropTypes from 'prop-types';

import Stack from './Stack';
import LargeBox from '../LargeBox';

const propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  responsibility: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const defaultProps = {};

const Project = ({ name, year, responsibility, description, stacks }) => (
  <LargeBox title={name}>
    <p className="project__year">{year}</p>
    <p className="project__responsibility">{responsibility}</p>
    <p className="project__description">{description}</p>
    <div>{stacks.map(stack => <Stack text={stack} />)}</div>
  </LargeBox>
);

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;
export default Project;
