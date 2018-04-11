import React from 'react';
import PropTypes from 'prop-types';

import { PersonalInfo, Projects, Skills, Education, Certificates } from '../components';

const propTypes = {
};
const defaultProps = {
};

const CurriculumVitae = ({ }) => (
  <section className="cv">
    <PersonalInfo />
    <section className="cv__content">
      <section className="cv__left">
        <Projects />
      </section>
      <section className="cv__right">
        <Skills />
        <Certificates />
        <Education />
      </section>
    </section>
  </section>  
);

CurriculumVitae.propTypes = propTypes;
CurriculumVitae.defaultProps = defaultProps;
export default CurriculumVitae;
