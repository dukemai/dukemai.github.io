import React from 'react';
import PropTypes from 'prop-types';

import EducationEntry from './EducationEntry';
import { cv } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Component = ({ }) => (
  <div className="education">
    <h4 className="education__title block__title">
      Education
    </h4>
    {
      cv.education.map(entry => (
        <EducationEntry {...entry} />
      ))
    }
  </div>  
);
Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
export default Component;
