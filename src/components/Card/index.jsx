import React from 'react';

import styles from './Card.module.css';

/**
 * @typedef {Object} CardProps
 * @property {React.ReactNode} children - Conteúdo do cartão.
 * @property {boolean} [animado] - Indica se o cartão deve ter animação.
 * @property {string} [className] - Classe CSS adicional para o cartão.
 * @property {React.CSSProperties} [style] - Estilo CSS inline para o cartão.
 */

/**
 * Superfície de cartão reutilizável, podendo ser animada ou não.
 *
 * @param {CardProps} props Propriedades do cartão.
 */
export default function Card(props) {
  const { children, animado, className, style } = props;

  return (
    <div
      className={`card ${styles.card} ${animado ? styles.animated : ''} ${className || ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
