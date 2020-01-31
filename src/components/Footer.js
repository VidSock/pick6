import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagram, FaPinterestSquare, FaYoutubeSquare } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'


/*
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
*/





{/* var masters = new Date(2020,0, 20);
  var today = new Date();
  if (today>= masters){
    document.body.className += ' masters';
 }
var pga = new Date(2020,4, 19);
  var today = new Date();
  if (today>= pga){
    document.body.className += ' pga';
 }
 var usopen = new Date(2020,5, 16);
  var today = new Date();
  if (today>= usopen){
    document.body.className += ' usopen';
 }
  var theopen = new Date(2020,6, 21);
  var today = new Date();
  if (today>= theopen){
    document.body.className += ' theopen';
 } */}



const Footer = class extends React.Component {
  render() {
    return (
	    <ScrollAnimation animateIn="fadeIn" duration={2} initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          



 

<br />
<h2 style={{textAlign:'center', margin:'0 0 1rem 0',}}>2020 Tournaments</h2>
<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:''}}>

<li className="players">The Players<br /><br />March<br /> 14 - 17<br /><br />@ Ponte Vedra Beach</li>
<li className="masters">The Masters<br /><br />April<br /> 11 - 14<br /><br />@ Augusta</li>
<li className="pga">The PGA<br /><br />May<br /> 16 - 19<br /><br />@ Bethpage</li>
<li className="usopen">The U.S. Open<br /><br />June<br /> 13 - 16<br /><br />@ Pebble Beach</li>
<li className="theopen">The Open<br /><br />July<br /> 18 - 21<br /><br />@ Portrush</li>




</ul>

<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', marginTop:'.5rem'}}>
<li className="genesis">Genesis Open<br /><br />February<br /> 13 - 16<br /><br />@ Pacific Palisades</li>
<li className="anainpration">ANA Inspiration<br /><br />April<br /> 4 - 7<br /><br />@ Rancho Mirage</li>
<li className="memorial">The Memorial<br /><br />May 30 -<br /> June 2<br /><br />@ Dublin</li>
<li className="senior">Senior Open<br /><br />July<br /> 25 - 28<br /><br />@ Newport</li>
<li className="northern">Northern Trust<br /><br />August<br /> 8 - 11<br /><br />@ Norton</li>
</ul>

<br />
<br />
{/* <div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: '90%'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div> */}



{/* <div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())}</div> */}
        </div>
      </footer>
      </ScrollAnimation>
    )
  }
}

export default Footer

