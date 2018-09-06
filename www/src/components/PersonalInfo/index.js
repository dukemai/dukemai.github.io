import React from 'react';
import PropTypes from 'prop-types';

import Role from './Role';
import { cv } from '../../data';
import './styles.css';

const propTypes = {};
const defaultProps = {};

const PersonalInfo = ({}) => (
  <section className="personalInfo">
    <div className="center-aligned">
      <div className="personalInfo__image" />
    </div>
    <section className="personalInfo__padLeft">
      <h2 className="personalInfo__name">Duc Mai</h2>
      <ul className="personalInfo__roles">
        {cv.roles.map((role, index) => <Role text={role} key={index} />)}
      </ul>
    </section>
  </section>
);

PersonalInfo.propTypes = propTypes;
PersonalInfo.defaultProps = defaultProps;
export default PersonalInfo;
