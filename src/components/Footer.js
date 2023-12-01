import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="footer">
    <h3 class="footer__title">Follow Us</h3>
<div class="footer__social">
      <Link to="https://www.facebook.com" class="footer__social-link1"
        ><span class="bx bxl-facebook"><img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png'alt='fb'/></span></Link>
      <Link to= "https://www.instagram.com" class="footer__social-link2"
        ><span class="bx bxl-instagram"><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png'alt='insta'/></span>
      </Link>
      <Link to="http://www.Twitter.com" class="footer__social-link3"
        ><span class="bx bxl-Twitter"><img src='https://www.freeiconspng.com/uploads/logo-twitter-circle-png-transparent-image-1.png'alt='twit'/></span>
      </Link>
</div>
<div> Contact us :9745283210 
  
</div>
</footer>  
  )
}

export default Footer;
