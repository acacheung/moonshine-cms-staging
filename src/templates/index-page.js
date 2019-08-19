import React from 'react'
import logo from '../img/logo.svg'
import Navbar from '../components/Navbar'

const IndexPage = ({ data }) => {
  return (
    <div className="header">
        <div className="hero">
          <img className="hero__logo" src={logo} alt="Moonshine 152 logo" />
          <div className="is-hidden">Moonshine 152</div>
          <div className="hero__desc">— Inspired dinner &amp; weekend&nbsp;brunches&nbsp;—</div>
        </div>
        <Navbar />
    </div>
  )
}

export default IndexPage
