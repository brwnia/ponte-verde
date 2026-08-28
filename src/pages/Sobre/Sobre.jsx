import Navbar from '@/components/Navbar';
import React from 'react';
import styles from './Sobre.module.css';

import Card from '@/components/Card';

import bannerComprador from '@/assets/img/bannercomprador.jpeg';
import brotinho from '@/assets/img/brotinho.jpg';

function QuemSomos() {
  return (
    <>
      <section className={styles['quem-somos']}>
        <div className={styles['qs-texto']}>
          <span className={styles['label-secao']}>Quem Somos</span>
          <h1>
            Conectamos o campo
            <br />a quem faz o Brasil
            <br />
            acontecer.
          </h1>
          <p>
            A Ponte Verde nasceu para aproximar produtores rurais de
            restaurantes, mercados, hotéis e empresas que valorizam alimentos
            frescos, de qualidade e com origem confiável.
          </p>
          <p>
            Acreditamos em um agro mais justo, sustentável e eficiente, onde
            todos ganham: quem produz, quem compra e quem consome.
          </p>
          <div className={styles['destaque-box']}>
            <div className={styles['icone-circulo']}>🌿</div>
            <p>
              Mais que uma plataforma, somos uma ponte de confiança, tecnologia
              e oportunidades.
            </p>
          </div>
        </div>
        <div className={styles['qs-imagem']}>
          <img src={bannerComprador} alt="Broto de planta" />
        </div>
      </section>
      <section className={styles['mvv']}>
        <Card className={styles['mvv-card']}>
          <div className={styles['mvv-icone']}>🎯</div>
          <h3>Missão</h3>
          <p>
            Conectar o campo e os negócios de forma direta, digital e eficiente,
            gerando valor para toda a cadeia agroalimentar.
          </p>
        </Card>

        <Card className={styles['mvv-card']}>
          <div className={styles['mvv-icone']}>👁️</div>
          <h3>Visão</h3>
          <p>
            Ser a principal plataforma do Brasil que impulsiona o agro,
            promovendo desenvolvimento, tecnologia e sustentabilidade.
          </p>
        </Card>

        <Card className={styles['mvv-card']}>
          <div className={styles['mvv-icone']}>💚</div>
          <h3>Valores</h3>
          {/* Lista com checkmarks (feita com CSS) */}
          <ul className={styles['lista-valores']}>
            <li>Confiança e transparência</li>
            <li>Valorização do produtor</li>
            <li>Inovação com propósito</li>
            <li>Sustentabilidade</li>
            <li>Compromisso com pessoas</li>
          </ul>
        </Card>
      </section>
    </>
  );
}

function NossaHistoriaEImpacto() {
  const impactos = [
    { icone: '👥', numero: '2.500+', label: 'Produtores conectados' },
    { icone: '🏢', numero: '1.800+', label: 'Empresas atendidas' },
    { icone: '🌿', numero: '10.000+', label: 'Kg de alimentos distribuídos' },
    { icone: '📍', numero: '20+', label: 'Estados alcançados' },
  ];

  return (
    <>
      <section className={styles['nossa-historia']}>
        <div className={styles['nh-texto']}>
          <span className={styles['label-secao']}>Nossa História</span>
          <h2>
            Do campo
            <br />
            para o futuro.
          </h2>
          <p>
            A Ponte Verde surgiu da vivência no agro e da dor de ver bons
            produtos enfrentando barreiras até chegar a quem precisa deles.
          </p>
          <p>
            Decidimos usar a tecnologia para encurtar caminhos, reduzir
            intermediários e criar oportunidades reais para milhares de
            produtores e empresas.
          </p>
          <p className={styles['frase-destaque']}>
            Esse é só o começo de uma grande transformação.
          </p>
        </div>
        <div className={styles['nh-visual']}>
          <div className={styles['nh-imagem']}>
            <img src={brotinho} alt="brotinho" />
          </div>
          <div className={styles['citacao']}>
            <div className={styles['aspas']}>"</div>
            <p>
              Nosso propósito é fortalecer o agro e alimentar relações que geram
              valor para o Brasil.
            </p>
          </div>
        </div>
      </section>
      <section className={styles['impacto']}>
        <h2>Nosso impacto em números</h2>
        <div className={styles['impacto-grid']}>
          {impactos.map((impacto, index) => (
            <Card className={styles['impacto-card']} key={index}>
              <div className={styles['impacto-icone']}>{impacto.icone}</div>
              <div className={styles['impacto-texto']}>
                <div className={styles['impacto-numero']}>{impacto.numero}</div>
                <div className={styles['impacto-label']}>{impacto.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

function NossoTime() {
  const time = [
    { nome: 'Lucas Peixoto', foto: '👨', linkedin: null },
    {
      nome: 'Brunna Saraiva',
      foto: '👩',
      linkedin: 'https://www.linkedin.com/in/brunna-saraiva-oliveira/',
    },
    {
      nome: 'Thiago Neves',
      foto: '👨',
      linkedin: 'https://www.linkedin.com/in/thiago-oliveiraneves/',
    },
    { nome: 'Ana Carolina', foto: '👩', linkedin: null },
    {
      nome: 'Pedro Henrique',
      foto: '👨',
      linkedin: 'https://www.linkedin.com/in/pedroanuda/',
    },
  ];

  return (
    <section className={styles['nosso-time']}>
      <h2>Nosso time</h2>
      <p className={styles['subtitulo']}>
        Pessoas apaixonadas pelo agro e por transformar realidades.
      </p>
      <div className={styles['time-grid']}>
        {time.map((membro) => (
          <div className={styles['membro']}>
            <div className={styles['membro-foto']}>
              <div className={styles['foto-placeholder']}>{membro.foto}</div>
            </div>
            <div className={styles['membro-nome']}>{membro.nome}</div>
            <div className={styles['linkedin-btn']}>
              {membro.linkedin ? (
                <a
                  href={membro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  In
                </a>
              ) : (
                <span>In</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BannerCTA() {
  return (
    <div className={styles['cta-banner']}>
      <div className={styles['cta-banner-esquerda']}>
        <div className={styles['icone']}>🌉</div>
        <div>
          <h3>Vamos construir juntos um agro mais forte e conectado?</h3>
          <p>Faça parte da Ponte Verde e seja um agente dessa transformação.</p>
        </div>
      </div>
      <button className={styles['btn-cta']}>Quero fazer parte</button>
    </div>
  );
}

export default function Sobre() {
  return (
    <>
      <Navbar />
      <QuemSomos />
      <NossaHistoriaEImpacto />
      <NossoTime />
      <BannerCTA />
    </>
  );
}
