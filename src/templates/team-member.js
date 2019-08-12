import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
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
    <main>
      <nav className="moonshiners">
        <Link className="moonshiner" to={"/team/" + firstname.toLowerCase()} activeClassName="is-active">
          <h1 className="moonshiner__heading">{firstname}<br/>{lastname}</h1>
          <h1 className="moonshiner__desc">{role}</h1>
        </Link>
      </nav>
      <article className="t-body bio">
        <PostContent content={content} />
      </article>
    </main>
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
