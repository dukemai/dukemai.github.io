import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Duke Mai Home Page"
      meta={[
        { name: 'description', content: 'DukeMai, fullStack developer' },
        { name: 'keywords', content: 'Fullstack, React, Javacript, Episerver' },
      ]}
    />
    <div className="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
