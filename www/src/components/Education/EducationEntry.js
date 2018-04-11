import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
};
const defaultProps = {
};

const EducationEntry = ({ name }) => (
  <div className="educationEntry">
    {name}
  </div>  
);

EducationEntry.propTypes = propTypes;
EducationEntry.defaultProps = defaultProps;
export default EducationEntry;
