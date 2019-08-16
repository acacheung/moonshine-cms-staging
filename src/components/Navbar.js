import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header className="header">
        <div className="hero">
          <img className="hero__logo" src={logo} alt="Moonshine 152 logo" />
          <div className="is-hidden">Moonshine 152</div>
          <div className="hero__desc">— Inspired dinner &amp; weekend&nbsp;brunches&nbsp;—</div>
        </div>
        <nav className={`nav ${this.state.navBarActiveClass}`} id="content">
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            ☰
          </div>
          <Link to="/team/asia/" className="nav__link">Team</Link>
          <Link to="/press/" className="nav__link">Press</Link>
          <Link to="/" className="nav__link">Home</Link>
          <Link to="/about/" className="nav__link">About</Link>
          <Link to="/products/" className="nav__link">Products</Link>
          <Link to="/blog/" className="nav__link">Blog</Link>
          <a className="nav__link" href="http://www.opentable.com/single.aspx?restref=161260&rid=161260">Reservations</a>
          <a className="nav__link" href="https://gifts.opentable.com/buy/Moonshine-152?ref=1">Gift Cards</a>
          <a className="nav__link" href="tel:6177524191">
            <svg className="nav__link__phone" width="20" height="20" viewBox="0 0 512 512"><g></g><path d="M352 320c-32 32-32 64-64 64s-64-32-96-64-64-64-64-96 32-32 64-64-64-128-96-128-96 96-96 96c0 64 65.75 193.75 128 256s192 128 256 128c0 0 96-64 96-96s-96-128-128-96z"/></svg> 617.752.4191
          </a>
        </nav>
      </header>
    )
  }
}

export default Navbar
