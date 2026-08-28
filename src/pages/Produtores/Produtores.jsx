import ProducaoSidebar from '@/components/ProducaoSidebar';
import React from 'react';

import styles from './Produtores.module.css';

import produtorImg from '@/assets/img/produtor.jpg';
import cenouraImg from '@/assets/img/cenoura.jpg';
import tomateImg from '@/assets/img/tomate.jpg';
import macaImg from '@/assets/img/maca.jpg';

const produtosAExibir = [
  {
    nome: 'Cenoura Orgânica',
    categoria: 'Vegetais',
    preco: 12.9,
    estoque: 320,
    status: 'Em estoque',
    imagem: cenouraImg,
  },
  {
    nome: 'Tomate Italiano',
    categoria: 'Hortifruti',
    preco: 8.5,
    estoque: 95,
    status: 'Estoque baixo',
    imagem: tomateImg,
  },
  {
    nome: 'Maçã Fuji',
    categoria: 'Frutas',
    preco: 15,
    estoque: 540,
    status: 'Em estoque',
    imagem: macaImg,
  },
];

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.welcome}>
        <h2>Meus Produtos 🌱</h2>

        <p>Gerencie seus produtos cadastrados na plataforma.</p>
      </div>

      <div className={styles['top-actions']}>
        <button className={styles['icon-btn']}>
          <i className="bi bi-bell"></i>
          <span className={styles['notification']}></span>
        </button>

        <div className={styles['profile']}>
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

function MainCard() {
  return (
    <div className={styles['products-card']}>
      <div className={styles['card-header-custom']}>
        <h3 className={styles['card-title']}>Lista de Produtos</h3>

        <div className={styles['search-area']}>
          <input
            type="text"
            className={styles['search-input']}
            placeholder="Pesquisar produto..."
          />

          <button className={'btn' + ` ${styles['btn-green']}`}>
            <i className="bi bi-plus-lg" style={{ marginRight: '.25rem' }}></i>
            Novo Produto
          </button>

          <button
            className={
              'btn btn-outline-success' + ` ${styles['btn-simulator']}`
            }
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
      <ItemsTable />
    </div>
  );
}

function ItemsTable() {
  return (
    <div className="table-responsive">
      <table className={'table align-middle' + ` ${styles['table']}`}>
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
          {produtosAExibir.map((produto) => (
            <tr>
              <td>
                <div className={styles['product-info']}>
                  <img src={produto.imagem} alt={`Imagem de ${produto.nome}`} />
                  <div>
                    <div className={styles['product-name']}>{produto.nome}</div>
                    <div className={styles['product-category']}>
                      {produto.categoria}
                    </div>
                  </div>
                </div>
              </td>

              <td>{produto.categoria}</td>
              <td>R$ {produto.preco.toFixed(2).replace('.', ',')}/kg</td>
              <td>{produto.estoque} kg</td>

              <td>
                <span
                  className={
                    styles['badge-stock'] +
                    (produto.status !== 'Em estoque'
                      ? ` ${styles['badge-low']}`
                      : '')
                  }
                >
                  {produto.status}
                </span>
              </td>

              <td>
                <div className={styles['action-buttons']}>
                  <button className={styles['btn-action']}>
                    <i className="bi bi-pencil"></i>
                  </button>

                  <button className={styles['btn-action']}>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ModalProducao() {
  return (
    <div className="modal fade" id="receitaModal" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className={'modal-content' + ` ${styles['receita-modal']}`}>
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
              <label className={'form-label' + ` ${styles['form-label']}`}>
                Quantidade (kg)
              </label>
              <input
                type="number"
                id="quantidade"
                className={'form-control' + ` ${styles['form-control']}`}
              />
            </div>

            <div className="mb-3">
              <label className={'form-label' + ` ${styles['form-label']}`}>
                Preço por Kg (R$)
              </label>
              <input
                type="number"
                id="preco"
                className={'form-control' + ` ${styles['form-control']}`}
                step="0.01"
              />
            </div>

            <button
              className={`btn ${styles['btn-green']} w-100`}
              onclick="calcularReceita()"
            >
              Calcular Receita
            </button>

            <div className={styles['resultado-grid']}>
              <div className={styles['resultado-card']}>
                <span>Receita Bruta</span>
                <h4 id="receitaBruta">R$ 0,00</h4>
              </div>

              <div className={styles['resultado-card']}>
                <span>Taxa Ponte Verde (5%)</span>
                <h4 id="taxa">R$ 0,00</h4>
              </div>

              <div
                className={styles['resultado-card'] + ' ' + styles['destaque']}
              >
                <span>Receita Líquida</span>
                <h4 id="receitaLiquida">R$ 0,00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Produtores() {
  return (
    <>
      <ProducaoSidebar />
      <main className={styles['main']}>
        <TopBar />
        <MainCard />
      </main>
      <ModalProducao />
    </>
  );
}
