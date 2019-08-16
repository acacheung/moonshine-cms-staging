import React from 'react'
import PropTypes from 'prop-types'
import { MenuGroupTemplate } from '../../templates/menu-group'

const MenuGroupPreview = ({ entry, widgetFor }) => (
  <MenuGroupTemplate
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
