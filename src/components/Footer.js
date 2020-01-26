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
<h3 style={{textAlign:'center'}}>2020 Tournaments</h3>
<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:''}}>
<li className="masters">The Masters<br /><br />Apr 11 - 14<br /><br />Augusta, GA, United States</li>
<li className="pga">PGA Championship<br /><br />May 16 - 19<br /><br />Bethpage, New York, United States</li>
<li className="usopen">U.S. Open<br /><br />June 13 - 16<br /><br />Pebble Beach, California, United States</li>
<li className="theopen">The Open<br /><br />July 18 - 21<br /><br />Portrush, North Ireland</li>


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

