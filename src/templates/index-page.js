import React from 'react'
import logo from '../img/logo.svg'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="header">
        <div className="hero">
          <img className="hero__logo" src={logo} alt="Moonshine 152 logo" />
          <div className="is-hidden">Moonshine 152</div>
          <div className="hero__desc">– Inspired dinner &amp; weekend brunches&nbsp;–</div>
        </div>
        <Navbar />
      </div>
    </Layout>
  )
}

export default IndexPage
