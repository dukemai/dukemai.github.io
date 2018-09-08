import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as LinkedIn } from '../../public/static/linkedin.svg';
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
        <ul className="nav">
          <li>
            <a className="nav__link nav__link--selected" href="/">
              Profile
            </a>
          </li>
          <li>
            <a className="nav__link" href="/apps">
              My apps
            </a>
          </li>
        </ul>
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
        <div>
          <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/duc-mai-96b0846b/">
            <LinkedIn />
          </a>
        </div>
      </section>
    </section>
  </section>
);

CurriculumVitae.propTypes = propTypes;
CurriculumVitae.defaultProps = defaultProps;
export default CurriculumVitae;
