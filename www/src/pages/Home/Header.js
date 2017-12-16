import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const propTypes = {
};
const defaultProps = {
};

const Header = ({ }) => (
    <section className="header">
        <div className="header__inner">
            <div className="header__name">
                Hi, my name is Duc Mai
            </div>
            <div className="header__sub-text">
                I am a full stack developer, a certified scrum master. Episerver and .Net are my strength at backend. I am also a React advocate.
            </div>
        </div>
    </section>    
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;