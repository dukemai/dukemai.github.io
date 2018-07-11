import React from 'react';
import PropTypes from 'prop-types';

import { skills } from '../../data';

const propTypes = {
  onZoomClicked: PropTypes.func.isRequired,
};
const defaultProps = {
};

const Intro = ({ onZoomClicked }) => (
  <div className="presentation__intro">
    <h2 className="presentation__title">Full Stack Developer</h2>
    <ul>
      {
        skills.map((skill, index) =>
          (<li className="presentation__skill" key={index}>{skill.title}</li>))
      }
    </ul>
    <button onClick={onZoomClicked} className="presentation__nextButton">
      <i className="material-icons">arrow_forward_ios</i>
    </button>
  </div>
);

Intro.propTypes = propTypes;
Intro.defaultProps = defaultProps;
export default Intro;
