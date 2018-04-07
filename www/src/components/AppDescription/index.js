import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ios: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
const defaultProps = {
};

const AppDescription = ({ to, title, ios, description, image }) => (
  <div className="appDescription">
    <div className="appDescription__top">
      <div className="appDescription__imageWrapper">
        <img src={image} className="appDescription__image" alt={title} />
      </div>
      <h2 className="appDescription__title">
        {title}
      </h2>
      <p className="appDescription__text">
        {description}
      </p>  
    </div>  
  </div>  
);

AppDescription.propTypes = propTypes;
AppDescription.defaultProps = defaultProps;
export default AppDescription;
