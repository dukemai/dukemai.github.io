import React from 'react'
import Link from 'gatsby-link'
import { Motion, spring } from 'react-motion'

import { Slide, Intro } from '../components';
import './styles.css'

const INTRO = 'INTRO';
const SLIDE = 'SLIDE';

export default class IndexPage extends React.Component {
  state = {
    lowerBound: 365,
    upperBound: 0,
    showContent: false,
    currentShow: INTRO,
  }
  toggleContent = () => {
    this.setState({
      lowerBound: this.state.upperBound,
      upperBound: this.state.lowerBound,
      showContent: true,
    })
  }
  zoomClicked = () => {
    this.setState({
      currentShow: SLIDE,
    });
  }
  backClicked = () => {
    this.setState({
      currentShow: INTRO,
    });
  }
  render() {
    const { lowerBound, upperBound, showContent, currentShow } = this.state
    return (
      <div className="page--home">  
        <Motion
          defaultStyle={{ x: lowerBound }}
          style={{ x: spring(upperBound) }}
        >
          {interpolatingStyle => (
            <div className="presentation">
              {showContent && (
                <div
                  className="presentation__content"
                  style={{
                    height: interpolatingStyle.x,
                    width: interpolatingStyle.x,
                  }}
                >
                  {
                    currentShow === INTRO && (<Intro onZoomClicked={this.zoomClicked} />)
                  }
                  {
                    currentShow === SLIDE && (<Slide backClicked={this.backClicked} />)
                  }
                </div>
              )}
              <button
                onClick={this.toggleContent}
                className="presentation__button"
              >
                <i className="material-icons presentation__icon">apps</i>
              </button>
            </div>
          )}
        </Motion>
        <div className="presentationBottom">
          Duke Mai
          <div className="presentationBottom__linkedin">
            <a
              className="presentationBottom__link"
              title="Duke Mai"
              href="https://www.linkedin.com/in/duc-mai-96b0846b/"
            >
              Visit me on LinkedIn.
            </a>
          </div>
        </div>
      </div>
    )
  }
}
