import React from 'react'
import PropTypes from 'prop-types'
import { PressPageTemplate } from '../../templates/press-page'

const PressPagePreview = ({ entry }) => {
  const entryArticles = entry.getIn(['data', 'articles'])
  const articles = entryArticles ? entryArticles.toJS() : []

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300i,400,400i&display=swap" rel="stylesheet"></link>
      <PressPageTemplate
        title={entry.getIn(['data', 'title'])}
        articles={articles}
      />
    </div>
  )
}

PressPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PressPagePreview
