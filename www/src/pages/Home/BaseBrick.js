import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    subText: PropTypes.string,
    subTextList: PropTypes.arrayOf(PropTypes.string),
};
const defaultProps = {
    className: '',
    text: '',
    subText: '',
    subTextList: [],
};
const BaseBrick = ({ className, text, subText, subTextList }) => (
    <div className={`lego-brick ${className}`}>
        <div className="lego-brick__inner">
            <h4 className="lego-brick__text">
                {text}
            </h4>
            <p className="lego-brick__sub-text">
                {subText}
            </p>
            {
                subTextList.map((text, index) => (
                    <p key={index} className="lego-brick__sub-text">
                        {text}
                    </p>
                ))
            }
        </div>       
    </div>    
);
BaseBrick.propTypes = propTypes;
BaseBrick.defaultProps = defaultProps;
export default BaseBrick;