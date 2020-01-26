import React from 'react'
import Layout from '../components/Layout-noc'
import logo from '../img/pick6golf-logo-square.svg'
import { Link } from 'gatsby'

const Terms = () => (
  <Layout>
    <section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem'}}>
      <h1 style={{textAlign:'center'}}>Thank you!</h1>
    
    <h3>You should receive an email confirming your picks, shortly.</h3>

<div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
<Link to="/" className="logolink" title="Logo - Back To Home">
    <img style={{}} className="logo fadeInDown" src={logo} alt="Twilightscapes Logo" /><br />
    Return to Home
    </Link>
</div>


    </div>
    </section>
  </Layout>
)

export default Terms
