import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Moonshiners from '../components/Moonshiners'
import Content, { HTMLContent } from '../components/Content'

export const TeamMemberTemplate = ({
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <article className="bio t-body">
      <PostContent content={content} />
    </article>
  )
}

TeamMemberTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
}

const TeamMember = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Moonshiners />
      <TeamMemberTemplate
        content={post.html}
        contentComponent={HTMLContent}
      />
      <div className="callout-wrap">
        <p className="callout">
          “With an energetic neighborhood &amp; industry focused bar, the Moonshine crew aims to be everyone’s local go-to!”
        </p>
      </div>
    </Layout>
  )
}

TeamMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TeamMember

export const pageQuery = graphql`
  query TeamMemberByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
    }
  }
`
