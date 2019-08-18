import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Subgroups = ({ subgroups }) => (
  <div>
    {subgroups.map(subgroup => (
      <article key={v4()}>
        <h2 className="menu__heading">{subgroup.title}</h2>
        <ul className="menu__list">
          <li className="menu__item">
            <h3 className="menu__item__heading">
              Oysters on the Half Shell
              <span className="menu__item__price">3 each</span>
            </h3>
            <p className="menu__item__desc">Classic Cocktail Sauce, Chili Cucumber Mignonette</p>
          </li>
        </ul>
      </article>
    ))}
  </div>
)

Subgroups.propTypes = {
  subgroups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
}

export default Subgroups
