import React, { useState, useEffect, useRef } from 'react';
import './AreasDeAtuacao.css';

function AreasDeAtuacao() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  const areas = [
    {
      icon: '👨‍👩‍👧‍👦',
      title: "Direito de Família",
      description: "Atuação em casos de divórcio, guarda de filhos, pensão alimentícia, inventários e planejamento sucessório.",
      color: '#FF6B6B',
      details: [
        "Divórcio consensual e litigioso",
        "Guarda e regulamentação de visitas",
        "Pensão alimentícia",
        "Inventário e partilha de bens"
      ]
    },
    {
      icon: '🛒',
      title: "Direito do Consumidor",
      description: "Defesa dos seus direitos em relações de consumo, produtos defeituosos, serviços inadequados e práticas abusivas.",
      color: '#4ECDC4',
      details: [
        "Vícios de produtos e serviços",
        "Cobranças indevidas",
        "Publicidade enganosa",
        "Planos de saúde"
      ]
    },
    {
      icon: '⚖️',
      title: "Direito Civil",
      description: "Soluções completas para contratos, cobranças, indenizações, questões de propriedade e responsabilidade civil.",
      color: '#45B7D1',
      details: [
        "Elaboração e revisão de contratos",
        "Ações de cobrança",
        "Indenizações por danos",
        "Usucapião e direitos reais"
      ]
    },
    {
      icon: '💼',
      title: "Direito Trabalhista",
      description: "Assessoria especializada para empregados e empregadores em questões de direitos e deveres trabalhistas.",
      color: '#96CEB4',
      details: [
        "Rescisão contratual",
        "Horas extras e adicional noturno",
        "Assédio moral e sexual",
        "Doenças ocupacionais"
      ]
    },
    {
      icon: '🏥',
      title: "Direito Previdenciário",
      description: "Atuação em benefícios do INSS, aposentadorias, auxílio-doença, pensão por morte e revisões de benefícios.",
      color: '#FFBE0B',
      details: [
        "Aposentadoria por idade e tempo",
        "Auxílio-doença e acidente",
        "Pensão por morte",
        "Salário-maternidade"
      ]
    },
    {
      icon: '🏢',
      title: "Direito Empresarial",
      description: "Assessoria jurídica para empresas, contratos societários, recuperação judicial e compliance empresarial.",
      color: '#FB5607',
      details: [
        "Constituição de empresas",
        "Contratos societários",
        "Recuperação judicial",
        "Compliance corporativo"
      ]
    }
  ];

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className={`atuacao-section ${isVisible ? 'visible' : ''}`}
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
        <div className="section-header">
          <div className="section-badge">
            <span>Especialidades Jurídicas</span>
          </div>
          <h2 className="section-title">
            <span className="title-char">Á</span>
            <span className="title-char">r</span>
            <span className="title-char">e</span>
            <span className="title-char">a</span>
            <span className="title-char">s</span>
            <span className="title-space"> </span>
            <span className="title-char">d</span>
            <span className="title-char">e</span>
            <span className="title-space"> </span>
            <span className="title-char">A</span>
            <span className="title-char">t</span>
            <span className="title-char">u</span>
            <span className="title-char">a</span>
            <span className="title-char">ç</span>
            <span className="title-char">ã</span>
            <span className="title-char">o</span>
          </h2>
          <div className="animated-divider">
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
          </div>
          <p className="section-subtitle">
            Atuação especializada em diversas áreas do direito, oferecendo soluções jurídicas
            <span className="highlight-text"> completas e personalizadas</span> para cada caso.
          </p>
        </div>

        <div className="cards-container">
          {areas.map((area, index) => (
            <div
              className={`area-card ${hoveredCard === index ? 'hovered' : ''}`}
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--card-color': area.color }}
            >
              {/* Efeitos de fundo do card */}
              <div className="card-glow"></div>
              <div className="card-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <div className="icon-background"></div>
                    <div className="card-icon">{area.icon}</div>
                    <div className="icon-pulse"></div>
                  </div>
                  <h3 className="card-title">{area.title}</h3>
                </div>

                <p className="card-description">{area.description}</p>

                <div className="card-details">
                  <div className="details-header">
                    <span className="details-title">Principais Serviços</span>
                    <div className="animated-arrow">↗</div>
                  </div>
                  <ul className="details-list">
                    {area.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="detail-item"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <span className="detail-marker">
                          <div className="marker-dot"></div>
                        </span>
                        <span className="detail-text">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <button className="consult-button">
                    <span className="button-text">Consultoria Gratuita</span>
                    <div className="button-orb">
                      <span className="orb-icon">⚡</span>
                    </div>
                    <div className="button-shine"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <div className="cta-icon">🎯</div>
            <div className="cta-text">
              <h3>Precisa de Ajuda Jurídica?</h3>
              <p>
                Entre em contato para uma <strong>avaliação gratuita</strong> do seu caso.
                Estamos aqui para transformar desafios em soluções.
              </p>
            </div>
            <a href="#contato" className="cta-button">
              <span>Falar com Especialista</span>
              <div className="cta-sparkles">
                <span>✨</span>
                <span>✨</span>
                <span>✨</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AreasDeAtuacao;