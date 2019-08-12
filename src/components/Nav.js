import React from 'react'
import { Link } from 'gatsby'

const Nav = class extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/menu/" className="nav__link" activeClassName="is-active">Menu</Link>
        <Link to="/team/" className="nav__link" activeClassName="is-active" partiallyActive={true}>Team</Link>
        <Link to="/press/" className="nav__link" activeClassName="is-active">Press</Link>
        <a className="nav__link" href="http://www.opentable.com/single.aspx?restref=161260&rid=161260">Reservations</a>
        <a className="nav__link" href="https://gifts.opentable.com/buy/Moonshine-152?ref=1">Gift Cards</a>
        <a className="nav__link" href="tel:6177524191">
          <svg className="nav__link__phone" width="20" height="20" viewBox="0 0 512 512"><g></g><path d="M352 320c-32 32-32 64-64 64s-64-32-96-64-64-64-64-96 32-32 64-64-64-128-96-128-96 96-96 96c0 64 65.75 193.75 128 256s192 128 256 128c0 0 96-64 96-96s-96-128-128-96z"/></svg> 617.752.4191
        </a>
      </nav>
    )
  }
}

export default Nav
