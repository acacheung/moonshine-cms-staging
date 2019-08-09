import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TeamMemberTemplate = ({
  content,
  contentComponent,
  firstname,
  lastname,
  role,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {firstname} {lastname}
            {role}
            <article className="t-body bio">
              <PostContent content={content} />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

TeamMemberTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  role: PropTypes.string,
}

const TeamMember = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TeamMemberTemplate
        content={post.html}
        contentComponent={HTMLContent}
        firstname={post.frontmatter.firstname}
        lastname={post.frontmatter.lastname}
        role={post.frontmatter.role}
      />
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
      frontmatter {
        firstname
        lastname
        role
      }
    }
  }
`
