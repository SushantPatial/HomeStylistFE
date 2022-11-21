import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact logo">
              <img src="/images/logo.png" alt="logo"></img>
            </div>

            <div className="col-lg-4 col-md-6 footer-contact">
              <h4>Reach Us</h4>
              <p>
                Plot Number 20, First Floor Edc Building, <br />
                Rajiv Gandhi Technology Park, Mani Majra, <br />
                Chandigarh - 160101, India
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <KeyboardArrowRightIcon className='icon' />
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <KeyboardArrowRightIcon className='icon' />
                  <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li>
                  <KeyboardArrowRightIcon className='icon' />
                  <NavLink to='/orders'>Orders</NavLink>
                </li>
                <li>
                  <KeyboardArrowRightIcon className='icon' />
                  <NavLink to='/contact'>Contact us</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 social-links">
              <h4>Social Links</h4>
              <div className='social-links-wrapper'>
                <NavLink to="/"><TwitterIcon /></NavLink>
                <NavLink to="/"><FacebookIcon /></NavLink>
                <NavLink to="/"><LinkedInIcon /></NavLink>
                <NavLink to="/"><InstagramIcon /></NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">

        <div className="copyright">
            &copy; Copyright <strong>HomeStylist</strong> 2022. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer;