import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

import styles from './FaleConosco.module.css';

import centralImage from '@/assets/img/central.png';

function LeftSecttion() {
  return (
    <div className="col-lg-5 left-content">
      <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
        <i className="bi bi-chat-dots" style={{ marginRight: '0.35rem' }}></i>
        Fale conosco
      </span>

      <h1 className={styles['hero-title']}>Estamos aqui para ajudar você!</h1>

      <p className={styles['hero-subtitle']}>
        Tem dúvidas, sugestões ou precisa de suporte? Nossa equipe está pronta
        para te atender.
      </p>

      <div className={styles['feature-box']}>
        <div className={styles['feature-icon']}>
          <i className="bi bi-lightning-charge"></i>
        </div>

        <div>
          <strong>Atendimento rápido</strong>
          <p className="mb-0 text-muted">Respostas rápidas e eficientes.</p>
        </div>
      </div>

      <div className={styles['feature-box']}>
        <div className={styles['feature-icon']}>
          <i className="bi bi-people"></i>
        </div>

        <div>
          <strong>Equipe especializada</strong>
          <p className="mb-0 text-muted">
            Profissionais preparados para ajudar.
          </p>
        </div>
      </div>

      <div className={styles['feature-box']}>
        <div className={styles['feature-icon']}>
          <i className="bi bi-shield-check"></i>
        </div>

        <div>
          <strong>Segurança e confiança</strong>
          <p className="mb-0 text-muted">Seus dados sempre protegidos.</p>
        </div>
      </div>

      <img src={centralImage} className={styles['landscape']} alt="Paisagem" />
    </div>
  );
}

function RightSection() {
  return (
    <div className="col-lg-7">
      <div className={styles['contact-card']}>
        <h3 className={styles['form-title']}>Envie sua mensagem</h3>

        <form id="contactForm" novalidate>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className={styles['form-label'] + ' form-label'}>
                {' '}
                Nome completo{' '}
              </label>

              <input
                type="text"
                className={styles['form-control'] + ' form-control'}
                id="nome"
                placeholder="Digite seu nome"
              />

              <div className={styles['error-message']} id="nomeError"></div>
            </div>

            <div className="col-md-6 mb-3">
              <label className={styles['form-label'] + ' form-label'}>
                {' '}
                E-mail{' '}
              </label>

              <input
                type="email"
                className={styles['form-control'] + ' form-control'}
                id="email"
                placeholder="seu@email.com"
              />

              <div className={styles['error-message']} id="emailError"></div>
            </div>
          </div>

          <div className="mb-3">
            <label className={styles['form-label'] + ' form-label'}>
              {' '}
              Assunto{' '}
            </label>

            <select
              className={styles['form-select'] + ' form-select'}
              id="assunto"
            >
              <option value="">Selecione um assunto</option>
              <option>Dúvida</option>
              <option>Suporte</option>
              <option>Sugestão</option>
              <option>Parceria</option>
            </select>

            <div className={styles['error-message']} id="assuntoError"></div>
          </div>

          <div className="mb-3">
            <label className={styles['form-label'] + ' form-label'}>
              {' '}
              Mensagem{' '}
            </label>

            <textarea
              className={styles['form-control'] + ' form-control'}
              id="mensagem"
              rows="6"
              placeholder="Escreva sua mensagem aqui..."
            ></textarea>

            <div className="d-flex justify-content-end text-muted small mt-1">
              <span id="mensagemCounter">0/500 caracteres</span>
            </div>

            <div className={styles['error-message']} id="mensagemError"></div>
          </div>

          <button
            type="submit"
            className={'btn btn-success w-100 ' + styles['btn-send']}
          >
            <i className="bi bi-send" style={{ marginRight: '0.35rem' }}></i>
            Enviar mensagem
          </button>

          <div
            className={'alert alert-success ' + styles['success-message']}
            id="successMessage"
          >
            Mensagem enviada com sucesso!
          </div>
        </form>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="row mt-5 g-4">
      <div className="col-md-4">
        <div className={styles['contact-info-card']}>
          <div className={styles['contact-info-icon']}>
            <i className="bi bi-whatsapp"></i>
          </div>

          <div className={styles['contact-info-title']}>WhatsApp</div>

          <p className="text-muted mb-2">Atendimento rápido pelo WhatsApp.</p>

          <strong>(11) 99999-9999</strong>
        </div>
      </div>

      <div className="col-md-4">
        <div className={styles['contact-info-card']}>
          <div className={styles['contact-info-icon']}>
            <i className="bi bi-envelope"></i>
          </div>

          <div className={styles['contact-info-title']}>E-mail</div>

          <p className="text-muted mb-2">Envie sua mensagem por e-mail.</p>

          <strong>contato@ponteverde.com.br</strong>
        </div>
      </div>

      <div className="col-md-4">
        <div className={styles['contact-info-card']}>
          <div className={styles['contact-info-icon']}>
            <i className="bi bi-geo-alt"></i>
          </div>

          <div className={styles['contact-info-title']}>Endereço</div>

          <p className="text-muted mb-2">
            Avenida das Nações Unidas - São Paulo/SP
          </p>

          <strong>Atendimento comercial</strong>
        </div>
      </div>
    </div>
  );
}

export default function FaleConosco() {
  return (
    <>
      <Navbar />
      <section className={styles['main-section']}>
        <div className="container">
          <div className="row align-items-center g-5">
            <LeftSecttion />
            <RightSection />
          </div>
          <ContactInfo />
        </div>
      </section>
      <Footer />
    </>
  );
}
