import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class Moonshiners extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <nav className="moonshiners">
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug} key={post.id} className="moonshiner" activeClassName="is-active">
              <h1 className="moonshiner__heading">
                {post.frontmatter.firstname}
                <br />
                {post.frontmatter.lastname}
              </h1>
              <h2 className="moonshiner__desc">{post.frontmatter.role}</h2>
            </Link>
          ))
        }
      </nav>
    )
  }
}

Moonshiners.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query MoonshinersQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___firstname] }
          filter: { frontmatter: { templateKey: { eq: "team-member" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                firstname
                lastname
                role
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Moonshiners data={data} count={count} />}
  />
)
