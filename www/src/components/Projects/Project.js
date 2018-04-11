import React from 'react';
import PropTypes from 'prop-types';

import Stack from './Stack';

const propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  responsibility: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const defaultProps = {
};

const Project = ({ name, year, responsibility, description, stacks }) => (
  <div className="project">
    <h4 className="project__title">{name}</h4>
    <p className="project__year">
      {year}
    </p>
    <p className="project__responsibility">
      {responsibility}
    </p>
    <p className="project__description">
      {description}
    </p>
    <div>
      {
        stacks.map(stack => (
          <Stack text={stack} />
        ))
      }
    </div>
  </div>  
);

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;
export default Project;
