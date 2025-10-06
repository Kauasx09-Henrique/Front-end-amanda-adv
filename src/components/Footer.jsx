import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    phone: '(11) 99999-9999',
    email: 'contato@doutoraamanda.com.br',
    address: 'Av. Paulista, 1000 - São Paulo/SP',
    oab: 'OAB/SP 123.456'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: '🔗'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: '📷'
    },
    {
      name: 'WhatsApp',
      url: '#',
      icon: '💬'
    }
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#atuacao' },
    { name: 'Contato', href: '#contato' }
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Seção Superior */}
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Doutora Amanda</h3>
              <p className="footer-tagline">
                Advocacia especializada com excelência e dedicação
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  onClick={handlePhoneClick}
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  onClick={handleEmailClick}
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  aria-label={`Siga-nos no ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider"></div>

        {/* Seção Inferior */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="legal-info">
              <p>&copy; {currentYear} Doutora Amanda. Todos os direitos reservados.</p>
              <p className="oab-info">{contactInfo.oab}</p>
            </div>

            <div className="footer-credits">
              <p>Desenvolvido com dedicação para seu sucesso jurídico</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;