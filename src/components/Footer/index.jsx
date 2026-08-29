import React from 'react';

import styles from './Footer.module.css';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className={styles['footer-logo']}>
              <div className={styles['logo-circle']}></div>

              <span>Ponte Verde</span>
            </div>

            <p className={styles['footer-description']}>
              Conectando produtores rurais e consumidores de forma sustentável,
              prática e moderna.
            </p>

            <div className={styles['social-icons']}>
              <Link to="#">
                <i className="bi bi-instagram"></i>
              </Link>

              <Link to="#">
                <i className="bi bi-facebook"></i>
              </Link>

              <Link to="#">
                <i className="bi bi-linkedin"></i>
              </Link>

              <Link to="#">
                <i className="bi bi-whatsapp"></i>
              </Link>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <h5 className={styles['footer-title']}>Navegação</h5>

            <div className={styles['footer-links']}>
              <Link to="/home">Home</Link>
              <Link to="/produtores">Produtores</Link>
              <Link to="/compradores">Compradores</Link>
              <Link to="#">Categorias</Link>
              <Link to="#">Contato</Link>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5 className={styles['footer-title']}>Contato</h5>

            <div className={styles['footer-links']}>
              <a href="mailto:contato@ponteverde.com.br" target="_blank">
                contato@ponteverde.com.br{' '}
              </a>

              <Link to="#"> (11) 99999-9999 </Link>

              <Link to="#"> São Paulo - SP </Link>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5 className={styles['footer-title']}>Newsletter</h5>

            <p className={styles['footer-description'] + ' mb-3'}>
              Receba novidades e conteúdos exclusivos.
            </p>

            <div className="d-flex gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Seu e-mail"
              />

              <button className="btn btn-success">OK</button>
            </div>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          © 2026 Ponte Verde. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
