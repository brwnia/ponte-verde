import React from 'react';
import styles from './Cotacao.module.css';

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

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

function CardProduto({ produto, itensCotacao, setItensCotacao, showFeedback }) {
  const adicionarProdutoNaCotacao = () => {
    showFeedback(false);
    const produtoExistente = itensCotacao.find(
      (item) => item.id === produto.id,
    );
    if (!produtoExistente) {
      setItensCotacao((prev) => [
        ...prev,
        { id: produto.id, preco: produto.preco, quantidade: 1 },
      ]);
      return;
    }

    setItensCotacao((prev) =>
      prev.map((item) =>
        produtoExistente.id === item.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item,
      ),
    );
  };

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
            {formatarMoeda(produto.preco)}/{produto.unidade}
          </strong>
          <button
            className={styles['btn-adicionar-cotacao']}
            type="button"
            onClick={() => adicionarProdutoNaCotacao()}
          >
            <i className="bi bi-plus-lg" aria-hidden="true"></i>
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}

function ItemCotacao({ produtos, item, setItensCotacao, showFeedback }) {
  const produtoInfo = produtos.find((produto) => produto.id === item.id);
  const subtotal = item.quantidade * item.preco;

  const atualizarQuantidade = (e) => {
    showFeedback(false);
    setItensCotacao((prev) =>
      prev.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantidade: parseInt(e.target.value) }
          : prevItem,
      ),
    );
  };

  const removerItem = () => {
    showFeedback(false);
    setItensCotacao((prev) =>
      prev.filter((prevItem) => prevItem.id !== item.id),
    );
  };

  return (
    <div className={styles['item-cotacao']} data-id={item.id}>
      <div className={styles['item-cotacao-topo']}>
        <div>
          <h4>{produtoInfo.nome}</h4>
          <p>
            {produtoInfo.produtor} - {formatarMoeda(produtoInfo.preco)}/
            {produtoInfo.unidade}
          </p>
        </div>
        <button
          className={styles['btn-remover-cotacao']}
          type="button"
          aria-label={`Remover ${produtoInfo.nome}`}
          onClick={removerItem}
        >
          <i className="bi bi-trash" aria-hidden="true"></i>
        </button>
      </div>

      <div className={styles['item-cotacao-controles']}>
        <label>
          Quantidade ({produtoInfo.unidade})
          <input
            className={styles['quantidade-cotacao']}
            type="number"
            min="1"
            value={item.quantidade}
            onChange={atualizarQuantidade}
            data-id={item.id}
          />
        </label>
        <span className={styles['subtotal-cotacao']}>
          {formatarMoeda(subtotal)}
        </span>
      </div>
    </div>
  );
}

/**
 * Componente que exibe a seção de cotação rápida.
 * @param {CotacaoProps} props Propriedades do componente.
 */
export default function Cotacao(props) {
  const { produtos } = props;

  const [showFeedback, setShowFeedback] = React.useState(false);
  const [itensCotacao, setItensCotacao] = React.useState([]);
  const totalItens = itensCotacao.reduce((total, item) => {
    return total + item.quantidade;
  }, 0);
  const totalCotacao = itensCotacao.reduce((total, item) => {
    return total + item.preco * item.quantidade;
  }, 0);

  const contadorItensContacao =
    totalItens === 0
      ? 'Nenhum item'
      : totalItens === 1
        ? '1 item'
        : `${totalItens} itens`;

  const onSubmitCotacao = () => {
    if (totalItens === 0) return;

    setShowFeedback(true);
  };

  const limparCotacao = () => {
    setItensCotacao([]);
    setShowFeedback(false);
  };

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
            onClick={limparCotacao}
          >
            <i className="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
            Limpar cotacao
          </button>
        </div>

        <div className={styles['cotacao-layout']}>
          <div className={styles['produtos-cotacao']} id="produtosCotacao">
            {produtos.map((produto) => (
              <CardProduto
                key={`card-${produto.id}`}
                produto={produto}
                itensCotacao={itensCotacao}
                setItensCotacao={setItensCotacao}
                showFeedback={setShowFeedback}
              />
            ))}
          </div>

          <aside className={styles['resumo-cotacao']} aria-live="polite">
            <div className={styles['resumo-cotacao-topo']}>
              <div>
                <span>Resumo da cotacao</span>
                <h3 id="contadorItensCotacao">{contadorItensContacao}</h3>
              </div>
              <i className="bi bi-basket2" aria-hidden="true"></i>
            </div>

            <div className={styles['lista-cotacao']} id="listaCotacao">
              {itensCotacao.length > 0 ? (
                itensCotacao.map((item) => (
                  <ItemCotacao
                    item={item}
                    produtos={produtos}
                    setItensCotacao={setItensCotacao}
                    showFeedback={setShowFeedback}
                  />
                ))
              ) : (
                <div className={styles['cotacao-vazia']}>
                  <i className="bi bi-bag-plus" aria-hidden="true"></i>
                  <p>Adicione produtos para calcular uma estimativa.</p>
                </div>
              )}
            </div>

            <div className={styles['total-cotacao']}>
              <span>Total estimado</span>
              <strong id="totalCotacao">{formatarMoeda(totalCotacao)}</strong>
            </div>

            <button
              className={styles['btn-enviar-cotacao']}
              id="enviarCotacao"
              type="button"
              disabled={totalItens === 0}
              onClick={onSubmitCotacao}
            >
              <i className="bi bi-send" aria-hidden="true"></i>
              Enviar cotacao
            </button>

            <div
              className={styles['cotacao-feedback']}
              id="cotacaoFeedback"
              role="status"
              style={{ display: showFeedback ? 'block' : 'none' }}
            >
              {`Cotacao enviada com sucesso! Total estimado: ${formatarMoeda(totalCotacao)}. Os produtores retornariam com disponibilidade e prazo de entrega.`}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
