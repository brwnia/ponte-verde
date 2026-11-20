
import ProducaoSidebar from '@/components/ProducaoSidebar';
import React from 'react';

import styles from './Produtores.module.css';

import produtorImg from '@/assets/img/produtor.jpg';
import cenouraImg from '@/assets/img/cenoura.jpg';
import tomateImg from '@/assets/img/tomate.jpg';
import macaImg from '@/assets/img/maca.jpg';

const CHAVE_PRODUTOS = 'ponte-verde-produtos';

const produtosIniciais = [
  {
    id: 1,
    nome: 'Cenoura Orgânica',
    categoria: 'Vegetais',
    preco: 12.9,
    estoque: 320,
    imagem: cenouraImg,
  },
  {
    id: 2,
    nome: 'Tomate Italiano',
    categoria: 'Hortifruti',
    preco: 8.5,
    estoque: 95,
    imagem: tomateImg,
  },
  {
    id: 3,
    nome: 'Maçã Fuji',
    categoria: 'Frutas',
    preco: 15,
    estoque: 540,
    imagem: macaImg,
  },
];

function carregarProdutos() {
  try {
    const produtosSalvos = localStorage.getItem(CHAVE_PRODUTOS);

    if (produtosSalvos) {
      const produtos = JSON.parse(produtosSalvos);

      if (Array.isArray(produtos)) return produtos;
    }
  } catch (erro) {
    console.error('Erro ao carregar produtos:', erro);
  }

  return produtosIniciais;
}

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.welcome}>
        <h2>Meus Produtos 🌱</h2>
        <p>Gerencie seus produtos cadastrados na plataforma.</p>
      </div>

      <div className={styles['top-actions']}>
        <button className={styles['icon-btn']} type="button">
          <i className="bi bi-bell"></i>
          <span className={styles.notification}></span>
        </button>

        <div className={styles.profile}>
          <img src={produtorImg} alt="Foto de Perfil" />

          <div>
            <h6>Joãozinho</h6>
            <span>Produtor Rural</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainCard({
  produtos,
  onNovoProduto,
  onEditarProduto,
  onExcluirProduto,
}) {
  const [pesquisa, setPesquisa] = React.useState('');

  const produtosFiltrados = produtos.filter((produto) =>
    `${produto.nome} ${produto.categoria}`
      .toLowerCase()
      .includes(pesquisa.toLowerCase()),
  );

  const formatarMoeda = (valor) =>
    Number(valor).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className={styles['products-card']}>
      <div className={styles['card-header-custom']}>
        <h3 className={styles['card-title']}>Lista de Produtos</h3>

        <div className={styles['search-area']}>
          <input
            type="text"
            className={styles['search-input']}
            placeholder="Pesquisar produto..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />

          <button
            className={'btn ' + styles['btn-green']}
            type="button"
            onClick={() => onNovoProduto()}
          >
            <i
              className="bi bi-plus-lg"
              style={{ marginRight: '.25rem' }}
            ></i>
            Novo Produto
          </button>

          <button
            className={
              'btn btn-outline-success ' + styles['btn-simulator']
            }
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#receitaModal"
          >
            <i
              className="bi bi-calculator"
              style={{ marginRight: '.25rem' }}
            ></i>
            Simular Receita
          </button>
        </div>
      </div>

      <ItemsTable
        produtos={produtosFiltrados}
        onEditarProduto={onEditarProduto}
        onExcluirProduto={onExcluirProduto}
        formatarMoeda={formatarMoeda}
      />
    </div>
  );
}

function ItemsTable({
  produtos,
  onEditarProduto,
  onExcluirProduto,
  formatarMoeda,
}) {
  return (
    <div className="table-responsive">
      <table className={'table align-middle ' + styles.table}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {produtos.length > 0 ? (
            produtos.map((produto) => {
              const estoqueBaixo = Number(produto.estoque) <= 100;

              return (
                <tr key={produto.id}>
                  <td>
                    <div className={styles['product-info']}>
                      <img
                        src={produto.imagem}
                        alt={`Imagem de ${produto.nome}`}
                      />

                      <div>
                        <div className={styles['product-name']}>
                          {produto.nome}
                        </div>

                        <div className={styles['product-category']}>
                          {produto.categoria}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{produto.categoria}</td>

                  <td>
                    R$ {formatarMoeda(produto.preco)}/kg
                  </td>

                  <td>{produto.estoque} kg</td>

                  <td>
                    <span
                      className={
                        styles['badge-stock'] +
                        (estoqueBaixo
                          ? ' ' + styles['badge-low']
                          : '')
                      }
                    >
                      {estoqueBaixo ? 'Estoque baixo' : 'Em estoque'}
                    </span>
                  </td>

                  <td>
                    <div className={styles['action-buttons']}>
                      <button
                        className={styles['btn-action']}
                        type="button"
                        title="Editar produto"
                        aria-label={`Editar ${produto.nome}`}
                        onClick={() => onEditarProduto(produto)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>

                      <button
                        className={styles['btn-action']}
                        type="button"
                        title="Excluir produto"
                        aria-label={`Excluir ${produto.nome}`}
                        onClick={() => onExcluirProduto(produto.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                Nenhum produto encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function ModalProduto({ produto, onSalvar, onFechar }) {
  const [nome, setNome] = React.useState(produto?.nome || '');
  const [categoria, setCategoria] = React.useState(
    produto?.categoria || '',
  );
  const [preco, setPreco] = React.useState(
    produto?.preco ?? '',
  );
  const [estoque, setEstoque] = React.useState(
    produto?.estoque ?? '',
  );
  const [imagem, setImagem] = React.useState(
    produto?.imagem || '',
  );

  const salvar = (e) => {
    e.preventDefault();

    if (
      !nome.trim() ||
      !categoria.trim() ||
      preco === '' ||
      estoque === '' ||
      !Number.isFinite(Number(preco)) ||
      Number(preco) <= 0 ||
      !Number.isFinite(Number(estoque)) ||
      Number(estoque) < 0
    ) {
      alert('Preencha todos os campos com valores válidos.');
      return;
    }

    onSalvar({
      ...(produto || {}),
      nome: nome.trim(),
      categoria: categoria.trim(),
      preco: Number(preco),
      estoque: Number(estoque),
      imagem: imagem.trim() || cenouraImg,
    });
  };

  return (
    <>
      <div className={styles['modal-backdrop-custom']} onClick={onFechar} />

      <div className={styles['modal-produto']}>
        <div className={styles['modal-produto-header']}>
          <h5>
            {produto ? 'Editar Produto' : 'Novo Produto'}
          </h5>

          <button
            type="button"
            className="btn-close"
            onClick={onFechar}
            aria-label="Fechar"
          />
        </div>

        <form onSubmit={salvar}>
          <div className={styles['modal-produto-body']}>
            <div className="mb-3">
              <label className="form-label">Nome do produto</label>
              <input
                className="form-control"
                type="text"
                placeholder="Ex: Alface Orgânica"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoria</label>
              <select
                className="form-select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                <option value="">Selecione uma categoria</option>
                <option value="Vegetais">Vegetais</option>
                <option value="Hortifruti">Hortifruti</option>
                <option value="Frutas">Frutas</option>
                <option value="Grãos e Cereais">Grãos e Cereais</option>
                <option value="Artesanais">Artesanais</option>
                <option value="Kits e Cestas">Kits e Cestas</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Preço (R$)</label>
                <input
                  className="form-control"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Estoque (kg)</label>
                <input
                  className="form-control"
                  type="number"
                  min="0"
                  step="1"
                  value={estoque}
                  onChange={(e) => setEstoque(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                URL da imagem (opcional)
              </label>

              <input
                className="form-control"
                type="url"
                placeholder="https://..."
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              />
            </div>
          </div>

          <div className={styles['modal-produto-footer']}>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onFechar}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className={'btn ' + styles['btn-green']}
            >
              <i className="bi bi-check-lg me-1"></i>
              {produto ? 'Salvar alterações' : 'Cadastrar produto'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ModalProducao() {
  const [quantidade, setQuantidade] = React.useState(0);
  const [preco, setPreco] = React.useState(0);

  const receitaBruta = Number(quantidade) * Number(preco);
  const taxa = receitaBruta * 0.05;
  const receitaLiquida = receitaBruta - taxa;

  const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <div className="modal fade" id="receitaModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className={'modal-content ' + styles['receita-modal']}>
          <div className="modal-header">
            <h5 className="modal-title">
              <i
                className="bi bi-calculator"
                style={{ marginRight: '0.35rem' }}
              ></i>
              Simulador de Receita (Simplificado)
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label className={'form-label ' + styles['form-label']}>
                Quantidade (kg)
              </label>

              <input
                type="number"
                min="0"
                className={'form-control ' + styles['form-control']}
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className={'form-label ' + styles['form-label']}>
                Preço por Kg (R$)
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                className={'form-control ' + styles['form-control']}
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>

            <div className={styles['resultado-grid']}>
              <div className={styles['resultado-card']}>
                <span>Receita Bruta</span>
                <h4>{formatarMoeda(receitaBruta)}</h4>
              </div>

              <div className={styles['resultado-card']}>
                <span>Taxa Ponte Verde (5%)</span>
                <h4>{formatarMoeda(taxa)}</h4>
              </div>

              <div
                className={
                  styles['resultado-card'] + ' ' + styles['destaque']
                }
              >
                <span>Receita Líquida</span>
                <h4>{formatarMoeda(receitaLiquida)}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Produtores() {
  const [produtos, setProdutos] = React.useState(carregarProdutos);
  const [modalAberto, setModalAberto] = React.useState(false);
  const [produtoEmEdicao, setProdutoEmEdicao] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(produtos));
  }, [produtos]);

  const abrirNovoProduto = () => {
    setProdutoEmEdicao(null);
    setModalAberto(true);
  };

  const abrirEdicao = (produto) => {
    setProdutoEmEdicao(produto);
    setModalAberto(true);
  };

  const salvarProduto = (dadosProduto) => {
    if (produtoEmEdicao) {
      setProdutos((anteriores) =>
        anteriores.map((produto) =>
          produto.id === produtoEmEdicao.id
            ? { ...dadosProduto, id: produtoEmEdicao.id }
            : produto,
        ),
      );
    } else {
      const novoProduto = {
        ...dadosProduto,
        id: Date.now(),
      };

      setProdutos((anteriores) => [...anteriores, novoProduto]);
    }

    setModalAberto(false);
    setProdutoEmEdicao(null);
  };

  const excluirProduto = (id) => {
    const confirmar = window.confirm(
      'Tem certeza que deseja excluir este produto?',
    );

    if (!confirmar) return;

    setProdutos((anteriores) =>
      anteriores.filter((produto) => produto.id !== id),
    );
  };

  return (
    <>
      <ProducaoSidebar />

      <main className={styles.main}>
        <TopBar />

        <MainCard
          produtos={produtos}
          onNovoProduto={abrirNovoProduto}
          onEditarProduto={abrirEdicao}
          onExcluirProduto={excluirProduto}
        />
      </main>

      <ModalProducao />

      {modalAberto && (
        <ModalProduto
          key={produtoEmEdicao?.id || 'novo-produto'}
          produto={produtoEmEdicao}
          onSalvar={salvarProduto}
          onFechar={() => {
            setModalAberto(false);
            setProdutoEmEdicao(null);
          }}
        />
      )}
    </>
  );
}
