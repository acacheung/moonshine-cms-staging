import React from 'react'
import PropTypes from 'prop-types'
import { MenuGroupTemplate } from '../../templates/menu-group'
import MenuSubgroupNav from '../../components/MenuSubgroupNav';

const MenuGroupPreview = ({ entry }) => {
  const entrySubgroups = entry.getIn(['data', 'subgroups'])
  const subgroups = entrySubgroups ? entrySubgroups.toJS() : []

  return (
    <div>
      <br />
      <br />
      <br />
      <MenuSubgroupNav />
      <MenuGroupTemplate
        time={entry.getIn(['data', 'time'])}
        subgroups={subgroups || { items: [] }}
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
