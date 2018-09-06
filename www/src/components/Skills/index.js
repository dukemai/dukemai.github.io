import React from 'react';
import PropTypes from 'prop-types';

import Skill from './Skill';
import LargeBox from '../LargeBox';
import { cv } from '../../data';
import './styles.css';

const propTypes = {};
const defaultProps = {};

const Skills = ({}) => (
  <LargeBox className="box--skill" title="Duc Mai are strong at...">
    {cv.skills.map((skill, index) => <Skill key={index} {...skill} />)}
  </LargeBox>
);
Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;
export default Skills;
