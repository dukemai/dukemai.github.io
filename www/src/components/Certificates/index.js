import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certificate';
import Box from '../Box';
import { cv } from '../../data';
import './styles.css';

const propTypes = {};
const defaultProps = {};

const Certificates = ({}) => (
  <Box title="Certificates">
    {cv.certificates.map((certificate, i) => (
      <Certificate key={i} {...certificate} />
    ))}
  </Box>
);
Certificates.propTypes = propTypes;
Certificates.defaultProps = defaultProps;
export default Certificates;
