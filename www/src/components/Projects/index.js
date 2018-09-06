import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';
import LargeBox from '../LargeBox';

import { cv } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Projects = ({ }) => (
  <LargeBox title="Duc Mai has been working with..." className="projects">
  
    {
      cv.projects.map((project, index) => (
        <Project {...project} key={index} />
      ))
    }
  </LargeBox>  
);

Projects.propTypes = propTypes;
Projects.defaultProps = defaultProps;
export default Projects;
