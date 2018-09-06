import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = { className: PropTypes.string };
const defaultProps = { className: '' };
const LargeBox = ({ className, title, children }) => (
  <div className={`${className} box--large`}>
    <h4 className="boxTitle--large">{title}</h4>
    {children}
  </div>
);
LargeBox.propTypes = propTypes;
LargeBox.defaultProps = defaultProps;
export default LargeBox;
