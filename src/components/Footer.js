// Footer.js
import React from 'react';
import '../assets/css/Footer.css';
import LogoFacebook from '../assets/img/Facebook_Logo.jpg';
import LogoInstagram from '../assets/img/Instagram_Logo.jpg';
import LogoWhatsApp from '../assets/img/WhatsApp_Logo.jpg';

const Footer = () => {
  // for whatsapp
   const whatsappNumber = '6285859278187'; // Ganti dengan nomor WhatsApp yang diinginkan
   const whatsappLink = `https://wa.me/${whatsappNumber}`;

   // for instagram
   const instagramProfileLink = 'https://www.instagram.com/tirtafsblh_';
   return (
    <footer className="footer-container">
    <div className="footer-content">
    <div className="footer-logo">
    <span>Thanks For Coming</span>
    </div>
    <div className="footer-social">
    <a href={instagramProfileLink} target="_blank" rel="noopener noreferrer">
    <img src={LogoInstagram} alt="Twitter" />
    </a>
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <img src={LogoWhatsApp} alt="Instagram" />  
    </a>
    </div> 
    </div>
    </footer>
    );
 };

 export default Footer;
