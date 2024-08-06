import './style.css'
import React from 'react';
import facebook from '../../assets/icons/facebook logo.png'
import github from '../../assets/icons/github-icon.png'
import instagram from '../../assets/icons/instagram logo.png'
import linkedin from '../../assets/icons/linkedin logo.png'
import whatsapp from '../../assets/icons/WhatsApp-Icon-removebg-preview.png'
import Logo from '../../assets/brand/logo-2.svg'

const Footer = () => {
  return (
    <div className="footer bg-primary">
      <div className="section_padding container">
        <div className="footer-links">
          <div className="footer-links-div">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footer-links-div">
            <h4>Empresa</h4>
              <p className="fake-link">Equipo</p>
              <p className="fake-link">Servicios</p>
              <p className="fake-link">Contacto</p>
          </div>
          <div className="footer-links-div">
            <h4>Políticas</h4>
              <p className="fake-link">Seguridad y Privacidad</p>
              <p className="fake-link">Términos y Condiciones</p>
          </div>
          <div className="footer-links-div">
            <h4>Síguenos en</h4>
            <div className="redes-sociales">
                <p><img src={facebook} alt="logofacebook"/></p>
                <p><img src={instagram} alt="logoInstagram"/></p>
                <p><img src={whatsapp} alt="logoWhatsapp"/></p>
                <p><img src={linkedin} alt="logoLinkedin"/></p>
                <p><img src={github} alt="logoGithub"/></p>
            </div>           
          </div>
        </div>

        <hr></hr>

        <div className="footer-below"> 
            <div className="footer-copyright">
                <p>
                    {new Date().getFullYear()} Mercado Libros | Todos los derechos reservados.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;