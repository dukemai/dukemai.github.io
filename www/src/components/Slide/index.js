import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion'

import Dot from './Dot';
import { skills } from '../../data';

import './styles.css';

const propTypes = {
  backClicked: PropTypes.func.isRequired,
};
const defaultProps = {
};

class Slide extends React.Component {
  state = {
    unMountAnimation: false,
    activeSlide: 0,
    defaultStyle: { height: 0, width: 0, borderRadius: 50, top: 100 },
    style: { height: spring(350), width: spring(100), borderRadius: spring(0), top: spring(0) },
    slides: skills,
    top: 0,
  }
  componentWillMount() {
    this.state.unMountAnimation = false;
  }
  backClicked = () => {
    this.setState({
      unMountAnimation: true,
    });
  }
  nextClicked = () => {
    const { activeSlide, slides, defaultStyle } = this.state;
    const index = (activeSlide + 1) % slides.length;
    this.setState({
      activeSlide: index,
    });
  }
  previousClicked = () => {
    const { activeSlide, slides } = this.state;
    const index = activeSlide > 0 ? (activeSlide - 1) % slides.length : slides.length - 1;
    this.setState({
      activeSlide: index,
    });
  }
  render() {
    const { backClicked } = this.props;
    const { unMountAnimation, activeSlide, slides, defaultStyle, style } = this.state;
    const slide = slides[activeSlide];
    return (
      <Motion
        defaultStyle={{ opacity: 1 }}
        style={{ opacity: unMountAnimation ? spring(0) : 1 }}
        onRest={backClicked}
      >
        {
          wrapperStyle => (
            <div
              className="presentation__slideWrapper"
              style={{
                opacity: unMountAnimation ? wrapperStyle.opacity : 1,
              }}
            >
              <Motion
                defaultStyle={defaultStyle}
                style={style}
                key={activeSlide}
              >
                {interpolatingStyle => (
                  <div className={`presentation__inner presentation__inner--${slide.id}`}>
                    <div className="presentation__slideTop">
                      <div className="presentation__slideButtons">
                        <button onClick={this.backClicked} className="presentation__back">
                          Back
                        </button>
                        <div className="presentation__slideButtons__right">
                          <button onClick={this.previousClicked}>
                            Previous
                          </button>
                          <button onClick={this.nextClicked}>
                            Next
                          </button>
                        </div>
                      </div>
                      <h4 className="presentation__slideTitle">{slide.title}</h4>
                      <p className="presentation__slideDescription">
                        {slide.description}
                      </p>
                    </div>
                    <div
                      className="presentation__slide"
                    >
                      <div className="presentation__slideContentWrapper">
                        <div className="presentation__slideContent">
                          {slide.content}
                        </div>
                      </div>
                      <div
                        className="presentation__slideOverlay"
                        style={{
                          top: `${interpolatingStyle.top}%`
                        }}
                      />
                  </div>
                  </div>
                )}
              </Motion>
            </div>
          )
        }
      </Motion>
    );
  }
}

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;
export default Slide;
