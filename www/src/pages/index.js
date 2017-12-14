import React from 'react'
import Link from 'gatsby-link'
import { Header, LegoRow, BaseBrick } from './Home';

const IndexPage = () => (
  <div>
    <Header />
    <LegoRow>
      <BaseBrick
        text="React"
        subText="Experience with building complex sites with React"
      />
      <BaseBrick
        text="Sass, Stylus"
        subText="Experience with preprocessed css as well as css3"
      />
    </LegoRow>
    <LegoRow>
      <BaseBrick
        text="C#"
        subText="5 years of experience"
      />
      <BaseBrick
        text="Episerver"
        subText="Certified with Epi 6, 7, 9 and 10"
      />
    </LegoRow>
  </div>
)

export default IndexPage
