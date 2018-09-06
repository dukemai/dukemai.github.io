import React from 'react';
import PropTypes from 'prop-types';

import {
  PersonalInfo,
  Projects,
  Skills,
  Education,
  Certificates,
  Bio,
  Location,
  Languages,
} from '../components';

const propTypes = {};
const defaultProps = {};

const CurriculumVitae = ({}) => (
  <section className="cv">
    <section className="cv__content">
      <section className="cv__left">
        <PersonalInfo />
      </section>
      <section className="cv__middle">
        <Skills />
        <Projects />
      </section>
      <section className="cv__right">
        <Bio />
        <Languages />
        <Location />
        <Certificates />
        <Education />
      </section>
    </section>
  </section>
);

CurriculumVitae.propTypes = propTypes;
CurriculumVitae.defaultProps = defaultProps;
export default CurriculumVitae;
