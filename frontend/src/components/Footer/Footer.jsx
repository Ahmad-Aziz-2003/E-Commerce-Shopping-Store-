import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo0.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
 
    return (
      <footer className="footer">
          <div className="logo">
             <img src={footer_logo}alt="" />
          </div>
          <div className="list-footers">
              <div className="footer-sec">
                  <h2 className="heading-footer">Product</h2>
                  <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Careers</a></li>
                  </ul>
              </div>
              <div className="footer-sec">
                  <h2 className="heading-footer">Support</h2>
                  <ul>
                      <li><a href="#">How it works</a></li>
                      <li><a href="#">Trust & Safety</a></li>
                      <li><a href="#">Help Centre</a></li>
                  </ul>
              </div>
              <div className="footer-sec">
                  <h2 className="heading-footer">Discover</h2>
                  <ul>
                      <li><a href="#">Guides</a></li>
                      <li><a href="#">Stories</a></li>
                      <li><a href="#">News</a></li>
                  </ul>
              </div>
              <div className="footer-sec">
                  <h2 className="heading-footer">Resources</h2>
                  <ul>
                      <li><a href="#">TalentDesk</a></li>
                      <li><a href="#">Business Cost</a></li>
                      <li><a href="#">Startup Cities</a></li>
                  </ul>
              </div>
              <div className="footer-sec">
                  <h2 className="heading-footer">Browse</h2>
                  <ul>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Services By Country</a></li>
                      <li><a href="#">Skills</a></li>
                  </ul>
              </div>
          </div>
          <div className="socials">
            <FontAwesomeIcon className='social-icon' icon={['fab', 'facebook-f']} />
            <FontAwesomeIcon className='social-icon' icon={['fab', 'twitter']} />
            <FontAwesomeIcon className='social-icon' icon={['fab', 'linkedin-in']} />
            <FontAwesomeIcon className='social-icon' icon={['fab', 'instagram']} />
          </div>
          <div className="ending-line"></div>
          <div className="terms-copy">
              <ul className="terms-list">
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Sitemap</a></li>
                  <li><a href="#">Shop Details</a></li>
                  <li>© 2024 Allure Arcade</li>
              </ul>
          </div>
      </footer>
  )
}

export default Footer
