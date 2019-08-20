import React from 'react'
import PropTypes from 'prop-types'
import { MenuGroupTemplate } from '../../templates/menu-group'

const MenuGroupPreview = ({ entry }) => {
  const entrySubgroups = entry.getIn(['data', 'subgroups'])
  const subgroups = entrySubgroups ? entrySubgroups.toJS() : []

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300i,400,400i&display=swap" rel="stylesheet"></link>
      <br />
      <br />
      <br />
      <MenuGroupTemplate
        time={entry.getIn(['data', 'time'])}
        subgroups={subgroups}
      />
    </div>
  )
}

MenuGroupPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default MenuGroupPreview
