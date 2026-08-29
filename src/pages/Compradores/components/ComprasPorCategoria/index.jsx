import React from 'react';
import { Link } from 'react-router';

import styles from './ComprasPorCategoria.module.css';

/**
 * @typedef ComprasPorCategoriaProps
 * @property {Array<{nome: string, imagem: any}>} categorias Lista de categorias de produtos.
 */

/**
 * Componente que exibe a seção de categorias.
 * @param {ComprasPorCategoriaProps} props Propriedades do componente.
 */
export default function ComprasPorCategoria(props) {
  const { categorias } = props;

  return (
    <section className={styles.categorias}>
      <div className={styles['categorias-cabecalho']}>
        <h2>Compre por categoria</h2>
        <Link to="#">
          Ver todas <i className="bi bi-chevron-right" aria-hidden="true"></i>
        </Link>
      </div>

      <div className={styles['categorias-lista']}>
        {categorias.map((categoria) => (
          <div className={styles['categoria-card']} key={categoria.nome}>
            <div className={styles['categoria-imagem']}>
              <img src={categoria.imagem} alt={categoria.nome} />
            </div>
            <h3>{categoria.nome}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
