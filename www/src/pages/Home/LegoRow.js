import React from 'react';
import PropTypes from 'prop-types';

import './LegoRow.css';

const propTypes = {
    children: PropTypes.node,
};
const defaultProps = {
    children: null,
};

const LegoRow = ({ children }) => (
    <div className="lego-row">
        {children}
    </div>    
);

LegoRow.propTypes = propTypes;
LegoRow.defaultProps = defaultProps;
export default LegoRow;