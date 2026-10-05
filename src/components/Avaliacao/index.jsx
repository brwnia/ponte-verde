import React from 'react';

import styles from './Avaliacao.module.css';

const NOTAS = [1, 2, 3, 4, 5];
const ROTULOS = ['Ruim', 'Regular', 'Bom', 'Muito bom', 'Excelente'];

// Notas simuladas de outros compradores, só para existir uma média.
// Com back-end, essa lista passa a vir de uma API.
const AVALIACOES_SIMULADAS = [5, 4, 4, 5, 3];

/**
 * @param {Array<number>} notas Lista de notas de 1 a 5.
 * @returns {number} Média aritmética das notas.
 */
function calcularMedia(notas) {
  return notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
}

/**
 * Cinco estrelas cinzas por baixo e cinco laranjas por cima. A camada de cima
 * é cortada na largura proporcional à média, o que permite estrelas parciais.
 *
 * @param {{ media: number }} props Média (de 0 a 5) a ser desenhada.
 */
function EstrelasMedia({ media }) {
  const estrelas = NOTAS.map((nota) => (
    <i key={nota} className="bi bi-star-fill" aria-hidden="true"></i>
  ));

  return (
    <div className={styles['media-estrelas']} aria-hidden="true">
      <div className={styles['media-estrelas-fundo']}>{estrelas}</div>
      <div
        className={styles['media-estrelas-frente']}
        style={{ width: `${(media / 5) * 100}%` }}
      >
        {estrelas}
      </div>
    </div>
  );
}

/**
 * @typedef {Object} AvaliacaoProps
 * @property {Array<number>} [avaliacoesIniciais] - Notas (1 a 5) já existentes.
 */

/**
 * Avaliação por estrelas. Depois que a pessoa escolhe uma nota, mostra a
 * média de todas as avaliações.
 *
 * @param {AvaliacaoProps} props Propriedades do componente.
 */
export default function Avaliacao(props) {
  const { avaliacoesIniciais = AVALIACOES_SIMULADAS } = props;

  const [minhaNota, setMinhaNota] = React.useState(0);
  const [notaHover, setNotaHover] = React.useState(0);
  const [avaliacoes, setAvaliacoes] = React.useState(avaliacoesIniciais);

  const jaAvaliou = minhaNota > 0;
  const notaExibida = notaHover || minhaNota;
  const media = calcularMedia(avaliacoes);

  const avaliar = (nota) => {
    setMinhaNota(nota);
    setAvaliacoes((anteriores) => [...anteriores, nota]);
  };

  if (jaAvaliou) {
    return (
      <div className={styles['avaliacao']} role="status">
        <p className={styles['titulo']}>Obrigado pela avaliação!</p>
        <div className={styles['resultado']}>
          <strong className={styles['resultado-media']}>
            {media.toLocaleString('pt-BR', {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </strong>
          <div>
            <EstrelasMedia media={media} />
            <span className={styles['resultado-detalhe']}>
              {avaliacoes.length} avaliações · você deu {minhaNota}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['avaliacao']}>
      <p className={styles['titulo']} id="avaliacao-titulo">
        Como foi montar sua cotação?
      </p>

      <div
        className={styles['estrelas']}
        role="group"
        aria-labelledby="avaliacao-titulo"
        onMouseLeave={() => setNotaHover(0)}
      >
        {NOTAS.map((nota) => (
          <button
            key={nota}
            type="button"
            className={`${styles['estrela']} ${nota <= notaExibida ? styles['ativa'] : ''}`}
            aria-label={`${nota} ${nota === 1 ? 'estrela' : 'estrelas'}: ${ROTULOS[nota - 1]}`}
            onMouseEnter={() => setNotaHover(nota)}
            onClick={() => avaliar(nota)}
          >
            <i className="bi bi-star-fill" aria-hidden="true"></i>
          </button>
        ))}
        <span className={styles['rotulo']} aria-hidden="true">
          {ROTULOS[notaExibida - 1] ?? 'Toque numa estrela'}
        </span>
      </div>
    </div>
  );
}
