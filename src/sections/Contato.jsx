import React, { useState, useEffect, useRef } from 'react';
import './Contato.css';

function Contato() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'contato@doutoraamanda.com.br',
      link: 'mailto:contato@doutoraamanda.com.br',
      color: '#FF6B6B'
    },
    {
      icon: '📱',
      title: 'Telefone/WhatsApp',
      content: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999',
      color: '#4ECDC4'
    },
    {
      icon: '📍',
      title: 'Endereço',
      content: 'Av. Paulista, 1000, Sala 45, São Paulo/SP',
      link: '#',
      color: '#45B7D1'
    },
    {
      icon: '🕒',
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 9h às 18h',
      link: '#',
      color: '#96CEB4'
    }
  ];

  return (
    <section
      id="contato"
      ref={sectionRef}
      className={`contato-section ${isVisible ? 'visible' : ''}`}
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
        {/* Header Animado */}
        <div className="section-header">
          <div className="section-badge">
            <span>Vamos Conversar</span>
          </div>
          <h2 className="section-title">
            <span className="title-char">E</span>
            <span className="title-char">n</span>
            <span className="title-char">t</span>
            <span className="title-char">r</span>
            <span className="title-char">e</span>
            <span className="title-space"> </span>
            <span className="title-char">e</span>
            <span className="title-char">m</span>
            <span className="title-space"> </span>
            <span className="title-char">C</span>
            <span className="title-char">o</span>
            <span className="title-char">n</span>
            <span className="title-char">t</span>
            <span className="title-char">a</span>
            <span className="title-char">t</span>
            <span className="title-char">o</span>
          </h2>
          <div className="animated-divider">
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
          </div>
          <p className="section-subtitle">
            Envie sua dúvida ou agende uma consulta.
            <span className="highlight-text"> Responderei o mais breve possível</span>.
          </p>
        </div>

        <div className="contato-wrapper">
          {/* Informações de Contato Animadas */}
          <div className="contato-info">
            <div className="info-glow"></div>
            <div className="info-content">
              <div className="info-header">
                <h3>Informações de Contato</h3>
                <div className="header-sparkle">✨</div>
              </div>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-card"
                    style={{ '--card-color': info.color }}
                    target={info.link !== '#' ? "_blank" : "_self"}
                    rel={info.link !== '#' ? "noopener noreferrer" : ""}
                  >
                    <div className="card-glow"></div>
                    <div className="card-particles">
                      <div className="particle"></div>
                      <div className="particle"></div>
                      <div className="particle"></div>
                    </div>
                    <div className="card-content">
                      <div className="card-icon-wrapper">
                        <div className="icon-background"></div>
                        <div className="card-icon">{info.icon}</div>
                        <div className="icon-pulse"></div>
                      </div>
                      <div className="card-text">
                        <h4 className="card-title">{info.title}</h4>
                        <p className="card-description">{info.content}</p>
                      </div>
                      <div className="card-arrow">
                        <span>→</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Redes Sociais */}
              <div className="social-section">
                <h4>Siga nas Redes Sociais</h4>
                <div className="social-links">
                  <a href="#" className="social-link" style={{ '--social-color': '#0077B5' }}>
                    <span className="social-icon">💼</span>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link" style={{ '--social-color': '#E4405F' }}>
                    <span className="social-icon">📷</span>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link" style={{ '--social-color': '#25D366' }}>
                    <span className="social-icon">💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Animado */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-glow"></div>
            <div className="form-content">
              <div className="form-header">
                <h3>Envie sua Mensagem</h3>
                <div className="form-subtitle">Preencha o formulário abaixo</div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder=" "
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                  <label className="form-label">Seu Nome Completo</label>
                  <div className="input-underline"></div>
                  <div className="input-focus"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder=" "
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                  <label className="form-label">Seu Email</label>
                  <div className="input-underline"></div>
                  <div className="input-focus"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <textarea
                    placeholder=" "
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-input textarea"
                  ></textarea>
                  <label className="form-label">Sua Mensagem</label>
                  <div className="input-underline"></div>
                  <div className="input-focus"></div>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                <span className="button-text">
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </span>
                <div className="button-orb">
                  {isSubmitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <span className="orb-icon">⚡</span>
                  )}
                </div>
                <div className="button-shine"></div>
                <div className="button-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* CTA Final */}
        <div className="contato-cta">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <div className="cta-icon">⚖️</div>
            <div className="cta-text">
              <h3>Primeira Consulta Gratuita</h3>
              <p>
                Agende uma avaliação inicial do seu caso <strong>sem compromisso</strong>.
                Estou aqui para ajudar você a encontrar a melhor solução jurídica.
              </p>
            </div>
            <a href="https://wa.me/5511999999999" className="cta-button" target="_blank" rel="noopener noreferrer">
              <span>Agendar no WhatsApp</span>
              <div className="cta-sparkles">
                <span>💬</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;