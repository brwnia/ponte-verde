import Navbar from '@/components/Navbar';
import React from 'react';

import styles from './Home.module.css';
import { Link } from 'react-router';

import agricultorImage from '@/assets/img/pexels-billsalazar-17836197.jpg';
import Button from '@/components/Button';
import Card from '@/components/Card';

const videoDaHome = {
  embedUrl: 'https://www.youtube.com/embed/JfSTaTM5AM4?si=70q6f4Necol6iV1H',
  title: 'Vídeo Institucional',
};

function Banner() {
  return (
    <section class={styles.banner}>
      <div class={styles['banner-texto']}>
        <h1>
          O Campo mais <br />
          perto do seu
          <br />
          negocio
        </h1>
        <p>
          Conectamos produtores rurais a restaurantes, mercados, hotéis e outros
          negócios.
          <br />
          Mais praticidade, menos intermediários e preços justos.
        </p>
        <div class={styles['banner-botoes']}>
          <Button
            texto="Sou Comprador"
            tipo="primario"
            link="/compradores"
            style={{ fontSize: '14px', padding: '9px 20px' }}
          />
          <Button
            texto="Sou Produtor"
            tipo="secundario"
            link="/produtores"
            style={{
              fontSize: '14px',
              padding: '9px 20px',
              backgroundColor: '#fff',
            }}
          />
        </div>
      </div>
      <div class={styles['banner-imagem']}>
        <img src={agricultorImage} alt="agricultor" />
        <div class={styles['quadrado-estatisticas']}>
          <div class={styles['estatistica-item']}>
            <span class={styles['estatistica-numero']}>2.500+</span>
            <span class={styles['estatistica-label']}>
              Produtores conectadors
            </span>
          </div>
          <div class={styles['estatistica-divisor']}></div>
          <div class={styles['estatistica-item']}>
            <span class={styles['estatistica-numero']}>1.800+</span>
            <span class={styles['estatistica-label']}>Empresas atendidas</span>
          </div>
          <div class={styles['estatistica-divisor']}></div>
          <div class={styles['estatistica-item']}>
            <span class={styles['estatistica-numero']}>4.300+</span>
            <span class={styles['estatistica-label']}>
              Negocios fortalecidos pelo agro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecaoVideo() {
  return (
    <section id="video" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Conheça a Ponte Verde</h2>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="ratio ratio-16x9">
              <iframe
                src={videoDaHome.embedUrl}
                title={videoDaHome.title}
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecaoCards() {
  return (
    <section class={styles['secao-cards']}>
      <h2>Junte-se a Ponte Verde</h2>
      <p class={styles['subtitulo']}>
        Escolha como voce quer fazer parte dessa conexäo que gera valora para
        todos
      </p>

      <div class={styles['grid-cards']}>
        <Card animado>
          <div class={styles['card-topo'] + ' ' + styles['verde-1']}>🛒</div>
          <div class={styles['card-corpo']}>
            <h3>Sou comprador</h3>
            <p>
              Compre direto de produtores confiáveis com qualidade, preço justo
              e entrega segura.
            </p>
            <Button texto="Comprar agora" className="mt-auto" />
          </div>
        </Card>

        <Card animado>
          <div class={styles['card-topo'] + ' ' + styles['verde-2']}>🌿</div>
          <div class={styles['card-corpo']}>
            <h3>Sou produtor</h3>
            <p>
              Venda seus produtos para diversos negócios e aumente sua renda.
            </p>
            <Button
              tipo="secundario"
              texto="Vender agora"
              className="mt-auto"
            />
          </div>
        </Card>

        <Card animado>
          <div class={styles['card-topo'] + ' ' + styles['verde-3']}>👩‍🍳</div>
          <div class={styles['card-corpo']}>
            <h3>Sou restaurante ou mercado</h3>
            <p>
              Abasteça seu negócio com produtos frescos, saudáveis e entregues
              direto do campo.
            </p>
            <Button texto="Comprar agora" className="mt-auto" />
          </div>
        </Card>

        <Card animado>
          <div class={styles['card-topo'] + ' ' + styles['verde-4']}>🚚</div>
          <div class={styles['card-corpo']}>
            <h3>Sou transportador</h3>
            <p>
              Faça parte dessa rede de entregas e conecte o campo a quem
              precisa.
            </p>
            <Button
              tipo="secundario"
              texto="Quero entregar"
              className="mt-auto"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

function HomeFooter() {
  return (
    <section class={styles['rodape']}>
      <div class={styles['feature']}>
        <div class={styles['feature-icone']}>🛡️</div>
        <div class={styles['feature-texto']}>
          <h4>Negociação segura</h4>
          <p>Ambiente protegido para compradores e produtores.</p>
        </div>
      </div>
      <div class={styles['feature']}>
        <div class={styles['feature-icone']}>🤝</div>
        <div class={styles['feature-texto']}>
          <h4>Conexão direta</h4>
          <p>Menos intermediários, mais valor para todos.</p>
        </div>
      </div>
      <div class={styles['feature']}>
        <div class={styles['feature-icone']}>🌱</div>
        <div class={styles['feature-texto']}>
          <h4>Sustentável</h4>
          <p>Fortalecemos o agro e incentivamos o local.</p>
        </div>
      </div>
      <div class={styles['feature']}>
        <div class={styles['feature-icone']}>🎧</div>
        <div class={styles['feature-texto']}>
          <h4>Suporte dedicado</h4>
          <p>Nosso time está sempre pronto para ajudar.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SecaoVideo />
      <SecaoCards />
      <HomeFooter />
    </>
  );
}
