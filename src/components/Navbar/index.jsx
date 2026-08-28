import React from 'react';
import { Link, NavLink } from 'react-router';

import styles from './Navbar.module.css';
import logoPonteVerde from '@/assets/img/logoPonteVerde.png';

export default function Navbar() {
  return (
    <nav className={'navbar navbar-expand-lg ' + styles['navbar-custom']}>
      <div className="container">
        <Link className={'navbar-brand ' + styles['navbar-brand']} to="/home">
          <div className={styles['logo-circle']}>
            <img src={logoPonteVerde} alt="Logo" />
          </div>
          <span>Ponte Verde</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className={'nav-item ' + styles['nav-item']}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${styles['nav-link']} ${isActive ? styles['active'] : ''}`
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>

            <li className={'nav-item ' + styles['nav-item']}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${styles['nav-link']} ${isActive ? styles['active'] : ''}`
                }
                to="/sobre"
              >
                Sobre Nós
              </NavLink>
            </li>

            <li className={'nav-item ' + styles['nav-item']}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${styles['nav-link']} ${isActive ? styles['active'] : ''}`
                }
                to="/produtores"
              >
                Produtor
              </NavLink>
            </li>

            <li className={'nav-item ' + styles['nav-item']}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${styles['nav-link']} ${isActive ? styles['active'] : ''}`
                }
                to="/compradores"
              >
                Comprador
              </NavLink>
            </li>

            <li className={'nav-item ' + styles['nav-item']}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${styles['nav-link']} ${isActive ? styles['active'] : ''}`
                }
                to="/faleconosco"
              >
                Fale Conosco
              </NavLink>
            </li>
          </ul>

          <div
            className={
              'd-flex align-items-center gap-3 ' + styles['header-actions']
            }
          >
            <button className={styles['search-btn']}>
              <i className="bi bi-search"></i>
            </button>

            <button className={'btn ' + styles['btn-register']}>
              Cadastre-se
            </button>

            <button className={'btn ' + styles['btn-login']}>Entrar</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
