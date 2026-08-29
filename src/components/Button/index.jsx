import React from 'react';
import { Link } from 'react-router';

import styles from './Button.module.css';

/**
 * @typedef {Object} ButtonProps
 * @property {string} texto - Texto a ser exibido no botão.
 * @property {'primario' | 'secundario'} [tipo] - Tipo do botão (primario ou secundario).
 * @property {string} [link] - Link para o qual o botão deve redirecionar.
 * @property {function} [onClick] - Função a ser executada ao clicar no botão.
 * @property {string} [className] - Classe CSS adicional para o botão.
 * @property {React.CSSProperties} [style] - Estilo CSS inline para o botão.
 */

/**
 * Botão reutilizável para a aplicação.
 *
 * @param {ButtonProps} props Propriedades do botão.
 */
export default function Button(props) {
  const { texto, tipo = 'primario', link, onClick } = props;

  if (link) {
    return (
      <Link
        to={link}
        className={
          styles[`btn-${tipo}` + (props.className ? ` ${props.className}` : '')]
        }
        style={props.style}
      >
        {texto}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={
        styles[`btn-${tipo}`] + (props.className ? ` ${props.className}` : '')
      }
      style={props.style}
    >
      {texto}
    </button>
  );
}
