import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    subText: PropTypes.string,
};
const defaultProps = {
    className: '',
    text: '',
    subText: '',
};
const BaseBrick = ({ className, text, subText }) => (
    <div className="lego-brick">
        <div className="lego-brick__inner">
            <h4 className="lego-brick__text">
                {text}
            </h4>
            <p className="lego-brick__sub-text">
                {subText}
            </p>
        </div>       
    </div>    
);
BaseBrick.propTypes = propTypes;
BaseBrick.defaultProps = defaultProps;
export default BaseBrick;