import React from 'react'
import PropTypes from 'prop-types'
import { PressPageTemplate } from '../../templates/press-page'

const PressPagePreview = ({ entry }) => {
  const entryArticles = entry.getIn(['data', 'articles'])
  const articles = entryArticles ? entryArticles.toJS() : []

  return (
    <PressPageTemplate
      title={entry.getIn(['data', 'title'])}
      articles={articles}
    />
  )
}

PressPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PressPagePreview
