import React, { useState, useEffect, useRef } from 'react';
import './Sobre.css';

import logo from '../../public/Amanda.png';

function Sobre() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          startNumberAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startNumberAnimation = () => {
    const finalNumbers = [10, 500, 95, 24];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      const newStats = finalNumbers.map((final, index) => {
        if (index === 3) return 24; // 24/7 não anima
        const current = Math.floor(final * progress);
        return Math.max(0, current);
      });

      setAnimatedStats(newStats);

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalNumbers);
      }
    }, stepDuration);
  };

  const qualities = [
    {
      icon: '⚖️',
      title: 'Ética Profissional',
      description: 'Conduta íntegra e transparente em todos os casos, garantindo confiança e segurança jurídica em cada processo.',
      color: '#FF6B6B'
    },
    {
      icon: '🎯',
      title: 'Foco em Resultados',
      description: 'Estratégias personalizadas e eficazes para alcançar os melhores resultados em seu caso específico.',
      color: '#4ECDC4'
    },
    {
      icon: '🤝',
      title: 'Atendimento Humanizado',
      description: 'Compreensão profunda das suas necessidades, oferecendo suporte personalizado em cada etapa do processo.',
      color: '#45B7D1'
    },
    {
      icon: '📚',
      title: 'Excelência Técnica',
      description: 'Conhecimento jurídico atualizado e especializado, combinando tradição e inovação nas soluções legais.',
      color: '#96CEB4'
    }
  ];

  const experiences = [
    { number: animatedStats[0], label: 'Anos de Experiência', suffix: '+', color: '#FF6B6B' },
    { number: animatedStats[1], label: 'Clientes Atendidos', suffix: '+', color: '#4ECDC4' },
    { number: animatedStats[2], label: 'Casos Bem-sucedidos', suffix: '%', color: '#45B7D1' },
    { number: animatedStats[3], label: 'Suporte Dedicado', suffix: '/7', color: '#96CEB4' }
  ];

  const specialties = [
    'Direito Civil',
    'Direito do Consumidor',
    'Direito de Família',
    'Direito Trabalhista',
    'Direito Previdenciário',
    'Direito Empresarial'
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className={`sobre-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Elementos de fundo animados */}
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="pulse-ring"></div>
      </div>

      <div className="container">
        {/* Cabeçalho Animado */}
        <div className="section-header">
          <div className="section-badge">
            <span>Profissionalismo e Excelência</span>
          </div>
          <h2 className="section-title">
            <span className="title-char">C</span>
            <span className="title-char">o</span>
            <span className="title-char">n</span>
            <span className="title-char">h</span>
            <span className="title-char">e</span>
            <span className="title-char">ç</span>
            <span className="title-char">a</span>
            <span className="title-space"> </span>
            <span className="title-char">a</span>
            <span className="title-space"> </span>
            <span className="title-char">D</span>
            <span className="title-char">o</span>
            <span className="title-char">u</span>
            <span className="title-char">t</span>
            <span className="title-char">o</span>
            <span className="title-char">r</span>
            <span className="title-char">a</span>
            <span className="title-space"> </span>
            <span className="title-char">A</span>
            <span className="title-char">m</span>
            <span className="title-char">a</span>
            <span className="title-char">n</span>
            <span className="title-char">d</span>
            <span className="title-char">a</span>
          </h2>
          <div className="animated-divider">
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
          </div>
          <p className="section-subtitle">
            Uma trajetória dedicada à justiça e à defesa incansável dos seus direitos,
            <span className="highlight-text"> com excelência e compromisso</span>.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="sobre-content">
          {/* Coluna da Foto Super Animada */}
          <div className="sobre-photo-column">
            <div className="photo-container">
              <div className="photo-glow"></div>
              <div className="photo-wrapper">
                <img
                  src={logo}
                  alt="Doutora Amanda - Advogada"
                  className="sobre-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="photo-fallback">
                  <span>Dra. Amanda</span>
                  <span>Advogada</span>
                </div>
              </div>

              {/* Frame animado */}
              <div className="photo-frame">
                <div className="frame-corner corner-tl"></div>
                <div className="frame-corner corner-tr"></div>
                <div className="frame-corner corner-bl"></div>
                <div className="frame-corner corner-br"></div>
              </div>

              {/* Badge animado */}
              <div className="photo-badge">
                <div className="badge-glow"></div>
                <span className="oab-badge">
                  <span className="badge-icon">⚖️</span>
                  OAB/SP 123.456
                </span>
              </div>

              {/* Partículas flutuantes */}
              <div className="photo-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </div>

            {/* Estatísticas Animadas */}
            <div className="sobre-stats">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="stat-card"
                  style={{ '--stat-color': exp.color }}
                >
                  <div className="stat-glow"></div>
                  <div className="stat-content">
                    <div className="stat-number">
                      {exp.number}
                      <span className="stat-suffix">{exp.suffix}</span>
                    </div>
                    <div className="stat-label">{exp.label}</div>
                  </div>
                  <div className="stat-pulse"></div>
                </div>
              ))}
            </div>

            {/* Especialidades Animadas */}
            <div className="specialties-section">
              <div className="specialties-glow"></div>
              <h4>Áreas de Especialização</h4>
              <div className="specialties-list">
                {specialties.map((specialty, index) => (
                  <div
                    key={index}
                    className="specialty-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="specialty-icon">
                      <div className="icon-sparkle">✨</div>
                    </span>
                    <span className="specialty-text">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna do Texto Animada */}
          <div className="sobre-info-column">
            {/* Texto Principal com Animações */}
            <div className="sobre-texto">
              <div className="text-glow"></div>
              <div className="text-content">
                <div className="text-block">
                  <div className="text-icon">⭐</div>
                  <p className="intro">
                    Com uma trajetória pautada pela <strong>ética</strong> e <strong>dedicação</strong>,
                    meu objetivo é oferecer uma advocacia humanizada e de excelência,
                    onde cada cliente se sente único e verdadeiramente representado.
                  </p>
                </div>

                <div className="text-block">
                  <div className="text-icon">🌉</div>
                  <p>
                    Acredito que o <strong>acesso à justiça</strong> é um direito fundamental,
                    e meu compromisso é ser a ponte entre você e a solução para suas questões legais,
                    sempre com transparência, rigor técnico e foco no melhor resultado possível.
                  </p>
                </div>

                <div className="text-block">
                  <div className="text-icon">💫</div>
                  <p>
                    Minha atuação é baseada em <strong>relacionamentos de confiança</strong>,
                    onde cada cliente recebe atenção personalizada e soluções jurídicas
                    estratégicas para suas necessidades específicas, sempre com excelência técnica.
                  </p>
                </div>
              </div>
            </div>

            {/* Qualidades Super Animadas */}
            <div className="sobre-qualities">
              <div className="qualities-glow"></div>
              <div className="qualities-content">
                <div className="qualities-header">
                  <h3>Pilares da Minha Atuação</h3>
                  <div className="qualities-subtitle">
                    Valores que guiam cada decisão e estratégia jurídica
                  </div>
                </div>
                <div className="qualities-grid">
                  {qualities.map((quality, index) => (
                    <div
                      key={index}
                      className={`quality-card ${hoveredCard === index ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{ '--quality-color': quality.color }}
                    >
                      <div className="card-glow"></div>
                      <div className="card-particles">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                      </div>
                      <div className="quality-content">
                        <div className="quality-header">
                          <div className="quality-icon-wrapper">
                            <div className="icon-background"></div>
                            <div className="quality-icon">{quality.icon}</div>
                            <div className="icon-pulse"></div>
                          </div>
                          <h4 className="quality-title">{quality.title}</h4>
                        </div>
                        <p className="quality-description">{quality.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;