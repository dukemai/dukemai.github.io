import React from 'react'
import Link from 'gatsby-link'
import { Motion, spring } from 'react-motion'

import './styles.css'

const skills = ['Nodejs', 'React', '.Net', 'Docker']

export default class IndexPage extends React.Component {
  state = {
    lowerBound: 350,
    upperBound: 0,
    showContent: false,
  }
  toggleContent = () => {
    this.setState({
      lowerBound: this.state.upperBound,
      upperBound: this.state.lowerBound,
      showContent: true,
    })
  }
  render() {
    const { lowerBound, upperBound, showContent } = this.state
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
                  <h2 className="presentation__title">Full Stack Developer</h2>
                  <ul>
                    {skills.map((skill, index) => <li key={index}>{skill}</li>)}
                  </ul>
                  <button className="presentation__nextButton">
                    <i className="material-icons">zoom_in</i>
                  </button>
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
