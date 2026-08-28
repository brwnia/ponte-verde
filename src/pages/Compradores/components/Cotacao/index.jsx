import React from 'react';
import styles from './Cotacao.module.css';

/**
 * @typedef {Object} Produto
 * @property {number} id - ID do produto.
 * @property {string} nome - Nome do produto.
 * @property {string} produtor - Nome do produtor.
 * @property {number} preco - Preço do produto.
 * @property {string} unidade - Unidade de medida do produto.
 * @property {string} categoria - Categoria do produto.
 * @property {any} imagem - Imagem do produto.
 */

/**
 * @typedef {Object} CotacaoProps
 * @property {Array<Produto>} produtos - Lista de produtos disponíveis para cotação.
 */

function CardProduto({ produto }) {
  return (
    <article
      className={styles['produto-cotacao-card']}
      data-id={produto.id}
      data-nome={produto.nome}
      data-produtor={produto.produtor}
      data-preco={produto.preco}
      data-unidade={produto.unidade}
    >
      <div className={styles['produto-cotacao-img']}>
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <div className={styles['produto-cotacao-info']}>
        <span className={styles['produto-categoria']}>{produto.categoria}</span>
        <h3>{produto.nome}</h3>
        <p>{produto.produtor}</p>
        <div className={styles['produto-cotacao-rodape']}>
          <strong>
            R$ {produto.preco.toFixed(2).replace('.', ',')}/{produto.unidade}
          </strong>
          <button className={styles['btn-adicionar-cotacao']} type="button">
            <i className="bi bi-plus-lg" aria-hidden="true"></i>
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}

/**
 * Componente que exibe a seção de cotação rápida.
 * @param {CotacaoProps} props Propriedades do componente.
 */
export default function Cotacao(props) {
  const { produtos } = props;
  return (
    <section className={styles['cotacao-section']} id="cotacao">
      <div className={styles['cotacao-container']}>
        <div className={styles['cotacao-cabecalho']}>
          <div>
            <span className={styles['tag-cotacao']}>COTACAO RAPIDA</span>
            <h2>Monte sua cotacao com produtores locais</h2>
            <p>
              Escolha os produtos, ajuste as quantidades e envie uma solicitacao
              simulada para os produtores parceiros.
            </p>
          </div>
          <button
            className={styles['btn-limpar-cotacao']}
            id="limparCotacao"
            type="button"
          >
            <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
            Limpar cotacao
          </button>
        </div>

        <div className={styles['cotacao-layout']}>
          <div className={styles['produtos-cotacao']} id="produtosCotacao">
            {produtos.map((produto) => (
              <CardProduto key={`card-${produto.id}`} produto={produto} />
            ))}
          </div>

          <aside className={styles['resumo-cotacao']} aria-live="polite">
            <div className={styles['resumo-cotacao-topo']}>
              <div>
                <span>Resumo da cotacao</span>
                <h3 id="contadorItensCotacao">Nenhum item</h3>
              </div>
              <i className="bi bi-basket2" aria-hidden="true"></i>
            </div>

            <div className={styles['lista-cotacao']} id="listaCotacao">
              <div className={styles['cotacao-vazia']}>
                <i className="bi bi-bag-plus" aria-hidden="true"></i>
                <p>Adicione produtos para calcular uma estimativa.</p>
              </div>
            </div>

            <div className={styles['total-cotacao']}>
              <span>Total estimado</span>
              <strong id="totalCotacao">R$ 0,00</strong>
            </div>

            <button
              className={styles['btn-enviar-cotacao']}
              id="enviarCotacao"
              type="button"
              disabled
            >
              <i className="bi bi-send" aria-hidden="true"></i>
              Enviar cotacao
            </button>

            <div
              className={styles['cotacao-feedback']}
              id="cotacaoFeedback"
              role="status"
            ></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
