import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao clicar em um link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll suave para as seções
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <a
            href="#inicio"
            onClick={(e) => handleSmoothScroll(e, '#inicio')}
            aria-label="Ir para o início"
          >
            Doutora Amanda
          </a>
        </div>

        <nav className={`navigation ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            {[
              { href: '#inicio', label: 'Início' },
              { href: '#sobre', label: 'Sobre' },
              { href: '#atuacao', label: 'Áreas de Atuação' },
              { href: '#contato', label: 'Contato' }
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSmoothScroll(e, item.href)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão do menu mobile */}
        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Overlay para mobile */}
        {isMobileMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}

export default Header;