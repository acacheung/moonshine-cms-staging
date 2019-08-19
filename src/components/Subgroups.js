import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Subgroups = ({ subgroups }) => (
  <div>
    {subgroups.map(subgroup => (
      <article key={v4()}>
        <h2 className="menu__heading">{subgroup.title}</h2>
        <ul className="menu__list">
          {subgroup.items.map(item => (
            <li className="menu__item" key={v4()}>
              <h3 className="menu__item__heading">
                {item.title}
                <span className="menu__item__price">{item.price}</span>
              </h3>
              <p className="menu__item__desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
)

Subgroups.propTypes = {
  subgroups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          price: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
}

export default Subgroups
