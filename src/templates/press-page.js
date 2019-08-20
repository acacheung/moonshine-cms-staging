import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Articles from '../components/Articles'

export const PressPageTemplate = ({
  title,
  articles,
}) => (
  <div>
    <h1 className="t-hidden">{title}</h1>
    <Articles articles={articles} />
  </div>
)

PressPageTemplate.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.array,
}

const PressPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Navbar />
      <PressPageTemplate
        title={frontmatter.title}
        articles={frontmatter.articles}
      />
      <Footer />
    </Layout>
  )
}

PressPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PressPage

export const pressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        articles {
          publication
          title
          date
          summary
          link
        }
      }
    }
  }
`
