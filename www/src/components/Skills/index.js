import React from 'react';
import PropTypes from 'prop-types';

import Skill from './Skill';
import { cv } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Skills = ({ }) => (
  <div className="skills">
    <h4 className="skills__title block__title">Skills</h4>
    {
      cv.skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))
    }
  </div>  
);
Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;
export default Skills;
