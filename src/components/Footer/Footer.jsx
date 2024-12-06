import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={facebook_icon} alt="Facebook" />
      </div>
      <ul>
  <li>Descrição de Áudio</li>
  <li>Central de Ajuda</li>
  <li>Cartões Presente</li>
  <li>Central de Mídia</li>
  <li>Relações com Investidores</li>
  <li>Trabalhe Conosco</li>
  <li>Termos de Uso</li>
  <li>Privacidade</li>
  <li>Avisos Legais</li>
  <li>Preferências de Cookies</li>
  <li>Informações Corporativas</li>
  <li>Fale Conosco</li>
</ul>

      <p className='copyright-text'>© 1997-2024 Netflix, inc.</p>
    </div>
  );
};

export default Footer;
