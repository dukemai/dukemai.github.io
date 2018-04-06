import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

import { AppList } from '../../components';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Apps = ({ }) => (
  <div className="appList">
    <Link className="appList__back" to="/">
      Back
    </Link> 
    <h2 className="appList__title">
      My Apps
    </h2>
    <AppList />
  </div>  
);
Apps.propTypes = propTypes;
Apps.defaultProps = defaultProps;
export default Apps;
