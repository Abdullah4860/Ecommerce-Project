import React from 'react'
import playStore from "../../../images/playstore.png"

import "./Footer.css"

const Footer = () => {
  return (
    <footer id='footer'>
        <div class = 'leftFooter'>
            <h4>Download our app</h4>
            <p>Download App for Android Mobile devices</p>
            <img src={playStore} alt="playstore"/>
           
        </div>
        <div  class = 'midFooter'>
          <h1>Ecommerce-Project</h1>
          <p>High Quality</p>
            <p>Copyrights 2023 &copy;</p>
        </div>
        <div  class = 'rightFooter'>
            <h4>Follow us on Social Media Accounts</h4>
        </div>


    </footer>
  );
};

export default Footer
