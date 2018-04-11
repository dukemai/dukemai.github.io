import React from 'react';
import PropTypes from 'prop-types';

import Role from './Role';
import { cv } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const PersonalInfo = ({ }) => (
  <section className="personalInfo">
    <h2 className="personalInfo__name">Duc Vu Mai</h2>
    <div className="personalInfo__row">
      <ul className="personalInfo__roles">
        {
          cv.roles.map((role, index) => (
            <Role text={role} key={index} />
          ))
        }
      </ul>
      <p className="personalInfo__languages">
        <span>Languages:</span> English, Vietnamese as Swedish
      </p>
    </div> 
  </section>  
);

PersonalInfo.propTypes = propTypes;
PersonalInfo.defaultProps = defaultProps;
export default PersonalInfo;
