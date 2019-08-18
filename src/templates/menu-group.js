import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Subgroups from '../components/Subgroups'
import MenuSubgroupNav from '../components/MenuSubgroupNav';

export const MenuGroupTemplate = ({
  time,
  subgroups,
}) => (
  <div className="menu__lists-wrap l-colspan">
    <span className="menu__times">{time}</span>
    <Subgroups subgroups={subgroups} />
  </div>
)

MenuGroupTemplate.propTypes = {
  time: PropTypes.string,
  subgroups: PropTypes.array,
}

const MenuGroup = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <div className="l-auto">
        <MenuSubgroupNav />
        <MenuGroupTemplate
          time={frontmatter.time}
          subgroups={frontmatter.subgroups}
        />
      </div>
      <div className="callout-wrap">
        <p className="callout">
          “We offer seasonal menus that focus on bright, sustainable plays on local East Coast cuisine and street food.”
        </p>
      </div>
    </Layout>
  )
}

MenuGroup.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MenuGroup

export const menuGroupQuery = graphql`
  query MenuGroup($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        time
        subgroups {
          title
        }
      }
    }
  }
`
