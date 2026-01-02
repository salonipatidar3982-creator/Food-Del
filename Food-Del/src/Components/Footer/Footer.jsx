import React from 'react'
import './Footer.css'
import logo from '../../assets/frontend_assets/logo.png'
import facebook_icon from '../../assets/frontend_assets/facebook_icon.png'
import twitter_icon from '../../assets/frontend_assets/twitter_icon.png'
import linkedin_icon from '../../assets/frontend_assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error praesentium facere voluptatem atque quidem vitae maiores, exercitationem asperiores. Doloremque dolorum esse autem sed porro iusto inventore error mollitia, sapiente omnis!</p>
                 <div className="footer-social-icons">
                    <img src={facebook_icon} alt=""/>
                    <img src={twitter_icon} alt=""/>
                    <img src={linkedin_icon} alt=""/>
                 </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>


    </div>
  )
}

export default Footer