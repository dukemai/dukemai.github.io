import React from 'react';
import PropTypes from 'prop-types';

import EducationEntry from './EducationEntry';
import Box from '../Box';
import { cv } from '../../data';
import './styles.css';

const propTypes = {};
const defaultProps = {};

const Component = ({}) => (
  <Box title="Education">
    {cv.education.map(entry => <EducationEntry {...entry} />)}
  </Box>
);
Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
export default Component;
