import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import logo from '../img/logo.svg'
import Nav from '../components/Nav'

export const IndexPageTemplate = ({
  title,
}) => (
  <header className="header">
    <div className="hero">
      <img className="hero__logo" src={logo} alt="Moonshine 152 logo" />
      <div className="t-hidden">{title}</div>
      <div className="hero__desc">— Inspired dinner &amp; weekend&nbsp;brunches&nbsp;—</div>
    </div>
    <Nav />
  </header>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      title={frontmatter.title}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
