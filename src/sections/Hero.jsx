import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setIsLoaded(true);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const stats = [
    { number: '50+', label: 'Casos Resolvidos' },
    { number: '10+', label: 'Anos de Experiência' },
    { number: '100%', label: 'Dedicação ao Cliente' }
  ];

  return (
    <section id="inicio" className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span>Advocacia Especializada</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Assessoria Jurídica</span>
            <span className="title-line highlight">Comprometida</span>
            <span className="title-line">com Seus Direitos</span>
          </h1>

          <p className="hero-description">
            Soluções legais eficientes e personalizadas para proteger seus interesses
            com excelência e dedicação exclusiva.
          </p>

          <div className="hero-actions">
            <a
              href="#contato"
              className="cta-button primary"
              onClick={(e) => handleSmoothScroll(e, '#contato')}
            >
              <span className="button-text">Entre em Contato</span>
              <span className="button-icon">→</span>
            </a>

            <a
              href="#sobre"
              className="cta-button secondary"
              onClick={(e) => handleSmoothScroll(e, '#sobre')}
            >
              <span className="button-text">Conheça Mais</span>
            </a>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;