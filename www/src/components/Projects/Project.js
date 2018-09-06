import React from 'react';
import PropTypes from 'prop-types';

import Stack from './Stack';
import LargeBox from '../LargeBox';
import { ReactComponent as RoleIcon } from '../../../public/static/role.svg';

const propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  responsibility: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const defaultProps = {};

const Project = ({ name, year, responsibility, description, stacks }) => (
  <section className="project">
    <h4 className="project__name">{name}</h4>
    <p className="project__year">{year}</p>
    <p className="project__responsibility">
      <RoleIcon />
      {responsibility}
    </p>
    <p className="project__description">{description}</p>
    <div>
      {stacks.map((stack, index) => <Stack key={index} text={stack} />)}
    </div>
  </section>
);

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;
export default Project;
