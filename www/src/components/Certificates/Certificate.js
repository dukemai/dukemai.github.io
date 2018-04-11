import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
const defaultProps = {
};

const Certificate = ({ name, year }) => (
  <div className="certificate">
    {name}
    <p className="certificate__year">
      {year}
    </p>  
  </div>  
);

Certificate.propTypes = propTypes;
Certificate.defaultProps = defaultProps;
export default Certificate;
