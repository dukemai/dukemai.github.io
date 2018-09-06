import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {};
const defaultProps = {};
const Box = ({ title, content, children }) => (
  <div className="box">
    <h4 className="box__title">{title}</h4>
    {Boolean(content) && <p className="box__content">{content}</p>}
    {children}
  </div>
);
Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
export default Box;
