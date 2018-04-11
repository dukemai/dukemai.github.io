import React from 'react';
import PropTypes from 'prop-types';

import Certificate from './Certificate';
import { cv } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Certificates = ({ }) => (
  <div className="education">
    <h4 className="education__title block__title">
      Certificates
    </h4>
    {
      cv.certificates.map(certificate => (
        <Certificate {...certificate} />
      ))
    }
  </div>  
);
Certificates.propTypes = propTypes;
Certificates.defaultProps = defaultProps;
export default Certificates;
