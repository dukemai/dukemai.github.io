import React from 'react';
import PropTypes from 'prop-types';

import { Motion, spring } from 'react-motion'

const propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};
const defaultProps = {
  isActive: false,
  onClick: () => {},
};

class Dot extends React.Component {
  state = {
    from: 14,
    to: 20,
    performAnimation: false,
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isActive !== nextProps.isActive) {
      const performAnimation = true;
      const from = this.props.isActive ? 20 : 14;
      const to = this.props.isActive ? 14 : 20;
      this.setState({
        performAnimation,
        from,
        to,
      });
    }
  }
  render() {
    const { isActive, onClick } = this.props;
    const { from, to, performAnimation } = this.state;
    return (
      <Motion
        defaultStyle={{ width: from }}
        style={{ width: spring(to) }}
      >
        {
          wrapperStyle => (
            <div
              onClick={onClick}
              className={`presentation__dot presentation__dot--${isActive ? 'active' : 'nonActive'}`}
              role="presentation"
            >
              <div
                className="presentation__dotRound"
                style={
                  performAnimation ? {
                    width: wrapperStyle.width,
                    height: wrapperStyle.width
                  } : null
                }
              >
                {
                  isActive && (<div className="presentation__dotOverlay" />)
                }
                <button className="presentation__dotButton" />
              </div>
            </div>
          )
        }
      </Motion>
    );
  }
}

Dot.propTypes = propTypes;
Dot.defaultProps = defaultProps;
export default Dot;
