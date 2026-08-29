import React from 'react';
import styles from './BannerPrincipal.module.css';

import bannerComprador from '@/assets/img/bannercomprador.jpeg';

function onBtnComprarClick() {
  document.getElementById('cotacao').scrollIntoView({
    behavior: 'smooth',
  });
}

export default function BannerPrincipal() {
  return (
    <section className={styles['banner-principal'] + ' container'}>
      <div className={styles['banner-principal-conteudo']}>
        <div className={styles['banner-principal-texto']}>
          <span className={styles['tag-banner-principal']}>
            DO CAMPO PARA SUA MESA
          </span>

          <h1>
            Conectamos você direto ao produtor da <span>sua região</span>
          </h1>

          <p>
            Mais frescor, mais qualidade e mais impacto positivo para o campo e
            para a sua comunidade.
          </p>

          <div className={styles['banner-principal-botoes']}>
            <button
              className={styles['btn-comprar']}
              onClick={onBtnComprarClick}
            >
              Comprar agora{' '}
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </button>
            <button className={styles['btn-produtores']}>
              Conheça os produtores
            </button>
          </div>

          <div className={styles['beneficios']}>
            <div className={styles['beneficio-item']}>
              <span className={styles['icone']}>
                <i className="bi bi-flower1" aria-hidden="true"></i>
              </span>
              <div>
                <h6>Direto do produtor</h6>
                <span>Sem intermediários</span>
              </div>
            </div>

            <div className={styles['beneficio-item']}>
              <span className={styles['icone']}>
                <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
              </span>
              <div>
                <h6>Da sua região</h6>
                <span>Fortalece a economia local</span>
              </div>
            </div>

            <div className={styles['beneficio-item']}>
              <span className={styles['icone']}>
                <i className="bi bi-shield-check" aria-hidden="true"></i>
              </span>
              <div>
                <h6>Mais qualidade</h6>
                <span>Produtos frescos e seguros</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['banner-principal-imagem']}>
          <img
            src={bannerComprador}
            className={styles['banner-principal-img']}
            alt="Produtor segurando uma caixa com legumes frescos"
          />

          <div className={styles['card-info']}>
            <span className={styles['card-info-selo']}>
              <i className="bi bi-flower1" aria-hidden="true"></i>
            </span>
            <h5>Ao comprar aqui, você:</h5>

            <div className={styles['card-info-itens']}>
              <div className={styles['info-item']}>
                <i className="bi bi-people" aria-hidden="true"></i>
                <p>Apoia pequenos produtores</p>
              </div>

              <div className={styles['info-item']}>
                <i className="bi bi-flower1" aria-hidden="true"></i>
                <p>Gera renda no campo</p>
              </div>

              <div className={styles['info-item']}>
                <i className="bi bi-globe-americas" aria-hidden="true"></i>
                <p>Reduz impactos ambientais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
