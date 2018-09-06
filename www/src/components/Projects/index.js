import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';
import { cv } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Projects = ({ }) => (
  <div className="projects">
  
    {
      cv.projects.map(project => (
        <Project {...project} />
      ))
    }
  </div>  
);

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;
export default Projects;
