import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  contentImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
const defaultProps = {
};

const AppDetail = ({ contentImages, title }) => (
  <div className="appDetail">
    {
      contentImages.map(image => (
        <div key={image} className="appDetail__imageWrapper">
          <img className="appDetail__image" src={image} alt={title} />
        </div>
      ))
    }
  </div>  
);

AppDetail.propTypes = propTypes;
AppDetail.defaultProps = defaultProps;
export default AppDetail;
