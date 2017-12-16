import React from 'react';
import PropTypes from 'prop-types';

import './LegoRow.css';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
};
const defaultProps = {
    children: null,
    className: '',
};

const LegoRow = ({ children, className }) => (
    <div className={`lego-row ${className}`}>
        {children}
    </div>    
);

LegoRow.propTypes = propTypes;
LegoRow.defaultProps = defaultProps;
export default LegoRow;