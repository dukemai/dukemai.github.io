import React from 'react'
import Link from 'gatsby-link'
import { Header, LegoRow, BaseBrick, Footer } from './Home';

const IndexPage = () => (
  <div>
    <Header />
    <LegoRow className="lego-row--1-2">
      <BaseBrick
        text="Sass, Stylus"
        subText="Experience with preprocessed css as well as css3"
        className="lego-brick--green"
      />
      <BaseBrick
        text="React"
        subText="Experience with building complex sites with React, Redux, ReactRouter"
        className="lego-brick--bluegrey"
        subTextList={[
          'Tooling with webpack, jest'
        ]}
      />
    </LegoRow>
    <LegoRow className="lego-row--2-1">
       <BaseBrick
        text="Episerver"
        subText="Certified with Epi 6, 7, 9 and 10"
        className="lego-brick--orange"
        subTextList={[
          'Strong experience with deeply tailoring upon complex requests'
        ]}
      />
      <BaseBrick
        text="C#"
        subText="5 years of experience"
        className="lego-brick--cyan"
        subTextList={[
          'Wide experience with optimizing for performance'
        ]}
      />
    </LegoRow>
    <LegoRow className="lego-row--1-2">
       <BaseBrick
        text="Continous development"
        subText="Experience with chaining tools for continuous development #Git #Teamcity #Octopus #Docker"
        className="lego-brick--cyan"
      />
      <BaseBrick
        text="Performance Optimizations"
        subText="vast experience with performance optimization for large sites"
        className="lego-brick--green"
        subTextList={[
          'Best practices for rendering performances applications',
          'Analyzing with recommended tools by Google such as pagespeed, lighthouse'
        ]}
      />
    </LegoRow>
    <Footer />
  </div>
)

export default IndexPage
