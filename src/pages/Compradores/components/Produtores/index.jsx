import React from 'react';
import Card from '@/components/Card';
import styles from './Produtores.module.css';

/**
 * @typedef {Object} Produtor
 * @property {string} nome - Nome do produtor.
 * @property {string} imagem - URL da imagem do produtor.
 * @property {number} distancia - Distância do produtor em quilômetros.
 * @property {number} avaliacao - Avaliação do produtor (de 0 a 5).
 */

/**
 * @typedef {Object} ProdutoresProps
 * @property {Produtor[]} produtores - Lista de produtores a serem exibidos.
 */

/**
 * Componente que exibe uma lista de produtores em destaque.
 * @param {ProdutoresProps} props Propriedades do componente Produtores.
 */
export default function Produtores(props) {
  const { produtores } = props;

  return (
    <section className={styles['produtores'] + ' container'}>
      <h2>Produtores em destaque</h2>

      <div className="row mt-4 g-4">
        {produtores.map((produtor) => (
          <div className="col-md-4" key={produtor.nome}>
            <Card className={styles['produtor-card']}>
              <img src={produtor.imagem} alt={produtor.nome} />
              <div className="card-body">
                <h5>{produtor.nome}</h5>
                <p>
                  {produtor.distancia} km •{' '}
                  <i className="bi bi-star-fill" aria-hidden="true"></i>{' '}
                  {produtor.avaliacao}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
