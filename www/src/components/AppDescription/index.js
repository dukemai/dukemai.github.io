import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './styles.css';

const propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ios: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};

const AppDescription = ({ to, title, ios, description, image, children }) => (
  <div className="appDescription">
    <Link className="appsLink" to="/apps/">
      Apps list
    </Link>
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
    <div className="appDescription__lower">
      {children}
    </div>
    <div className="appDescription__bottom">
      <a className="appDescription__downloadLink" href={ios}>Download on App Store</a>
    </div>  
  </div>  
);

AppDescription.propTypes = propTypes;
AppDescription.defaultProps = defaultProps;
export default AppDescription;
