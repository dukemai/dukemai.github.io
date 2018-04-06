import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

const propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ios: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
const defaultProps = {
};

const Item = ({ to, title, ios, description, image }) => (
  <div className="appItem">
    <div className="appItem__left">
      <div className="appItem__iconWrapper">
        <a className="appItem__ios" title={title} href={ios}>
          <img className="appItem__icon" src={image} />
        </a>
      </div>
      <div className="appItem__links">
        <a className="appItem__ios" title={title} href={ios}>On AppStore</a>
      </div>  
    </div>  
    <div className="appItem__right">
      <Link to={to}>{title}</Link>
      <p className="appItem__description">
        {description}
      </p>
    </div>
  </div>  
);

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
export default Item;
