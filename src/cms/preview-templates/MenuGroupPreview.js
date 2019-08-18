import React from 'react'
import PropTypes from 'prop-types'
import { MenuGroupTemplate } from '../../templates/menu-group'

const MenuGroupPreview = ({ entry }) => {
  const entrySubgroups = entry.getIn(['data', 'subgroups'])
  const subgroups = entrySubgroups ? entrySubgroups.toJS() : []

  return (
    <MenuGroupTemplate
      title={entry.getIn(['data', 'title'])}
      subgroups={subgroups}
    />
  )
}

MenuGroupPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MenuGroupPreview
