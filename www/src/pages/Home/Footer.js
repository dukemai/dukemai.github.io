import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const propTypes = {
};
const defaultProps = {
};

const Footer = ({ }) => (
    <section className="footer">
        <div className="footer__contact">
            Contact me at
            <a href="https://www.linkedin.com/in/duc-mai-96b0846b/">Duc Mai@LinkedIn</a>
        </div>
    </section>    
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
export default Footer;