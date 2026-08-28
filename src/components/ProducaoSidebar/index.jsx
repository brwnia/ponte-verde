import { Link } from 'react-router';
import React from 'react';

import styles from './ProducaoSidebar.module.css';

import logo from '@/assets/img/logo.png';

export default function ProducaoSidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link className={styles['logo-area']} to="/">
        <img src={logo} alt="Logo" />

        <h3>Ponte Verde</h3>
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link to="#">
            <i className="bi bi-grid"></i>
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="#" className={styles.active}>
            <i className="bi bi-box-seam"></i>
            Meus Produtos
          </Link>
        </li>

        <li>
          <Link to="#">
            <i className="bi bi-cart"></i>
            Pedidos
            <span className={styles['menu-badge']}>8</span>
          </Link>
        </li>

        <li>
          <Link to="#">
            <i className="bi bi-truck"></i>
            Entregas
          </Link>
        </li>

        <li>
          <Link to="#">
            <i className="bi bi-people"></i>
            Clientes
          </Link>
        </li>

        <li>
          <Link to="#">
            <i className="bi bi-currency-dollar"></i>
            Financeiro
          </Link>
        </li>

        <li>
          <Link to="#">
            <i className="bi bi-bar-chart"></i>
            Relatórios
          </Link>
        </li>

        <li>
          <Link to="#">
            <i className="bi bi-gear"></i>
            Configurações
          </Link>
        </li>
      </ul>

      <div className={styles['support-card']}>
        <h6>Precisa de ajuda?</h6>

        <p>Fale com nosso suporte sempre que precisar.</p>

        <button className={styles['support-btn']}>Falar agora</button>
      </div>
    </aside>
  );
}
