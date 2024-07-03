import './style.css'
import React from 'react';
import facebook from '../../assets/icons/facebook logo.png'
import github from '../../assets/icons/github-icon.png'
import instagram from '../../assets/icons/instagram logo.png'
import linkedin from '../../assets/icons/linkedin logo.png'
import whatsapp from '../../assets/icons/WhatsApp-Icon-removebg-preview.png'
import libro1 from '../../assets/img/MERCADO LIBROS.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="section_padding container">
        <div className="footer-links">
          <div className="footer-links-div">
            <img src={libro1} alt="logo" />
          </div>
          <div className="footer-links-div">
            <h4>Empresa</h4>
            <a href="/nosotros">
              <p>Nosotros</p>
            </a>
            <a href="/equipo">
              <p>Equipo</p>
            </a>
            <a href="/servicios">
              <p>Servicios</p>
            </a>
            <a href="/contacto">
              <p>Contacto</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>Políticas</h4>
            <a href="/privacidad">
              <p>Seguridad y Privacidad</p>
            </a>
            <a href="/terminos-y-condiciones">
              <p>Términos y Condiciones</p>
            </a>
          </div>
          <div className="footer-links-div">
            <h4>¡Nuestras redes sociales!</h4>
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