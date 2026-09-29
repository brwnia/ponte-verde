import React from 'react';

import ComprasPorCategoria from './components/ComprasPorCategoria';
import BannerPrincipal from './components/BannerPrincipal';
import Cotacao from './components/Cotacao';
import Produtores from './components/Produtores';
import Navbar from '@/components/Navbar';

import Produto from '@/models/produto';
import Produtor from '@/models/produtor';
import Categoria from '@/models/categoria';

// Imagens categorias
import hortalicasImage from '@/assets/img/hortaliças.jpeg';
import frutasImage from '@/assets/img/frutas.jpeg';
import laticiniosImage from '@/assets/img/laticinios.jpeg';
import carnesImage from '@/assets/img/carnes.jpeg';
import graosImage from '@/assets/img/grãos.jpeg';
import artesanaisImage from '@/assets/img/artesanais.jpeg';
import kitsImage from '@/assets/img/kits.jpeg';

// Imagens produtos
import cenouraImage from '@/assets/img/cenoura.jpg';
import tomateImage from '@/assets/img/tomate.jpg';
import macaImage from '@/assets/img/maca.jpg';

// Imagens produtores
import produtor1Image from '@/assets/img/criacaogalina.jpeg';
import produtor2Image from '@/assets/img/plantacaofruta.jpeg';
import produtor3Image from '@/assets/img/plantacao.jpeg';

// Categorias
const categorias = [
  new Categoria('Hortaliças', hortalicasImage),
  new Categoria('Frutas', frutasImage),
  new Categoria('Lacticínios', laticiniosImage),
  new Categoria('Carnes', carnesImage),
  new Categoria('Grãos e Cereais', graosImage),
  new Categoria('Artesanais', artesanaisImage),
  new Categoria('Kits e Cestas', kitsImage),
];

// Produtores
const produtores = [
  new Produtor(
    'Sítio Boa Terra',
    12,
    4.8,
    produtor1Image
  ),

  new Produtor(
    'Fazenda São José',
    18,
    4.9,
    produtor2Image
  ),

  new Produtor(
    'Carlos Santos Produtor',
    10,
    4.9,
    produtor3Image
  ),
];

// Produtos disponíveis para cotação
const produtosCotacao = [
  new Produto(
    'cenoura',
    'Cenoura Organica',
    produtores[0],
    12.9,
    'kg',
    categorias[0],
    cenouraImage
  ),

  new Produto(
    'tomate',
    'Tomate Italiano',
    produtores[2],
    8.5,
    'kg',
    categorias[0],
    tomateImage
  ),

  new Produto(
    'maca',
    'Maca Fuji',
    produtores[1],
    15,
    'kg',
    categorias[1],
    macaImage
  ),

  new Produto(
    'cesta',
    'Cesta Organica Mista',
    produtores[0],
    58,
    'un',
    categorias[6],
    kitsImage
  ),
];

export default function Compradores() {
  return (
    <>
      <Navbar />

      <BannerPrincipal />

      <ComprasPorCategoria categorias={categorias} />

      <Cotacao produtos={produtosCotacao} />

      <Produtores produtores={produtores} />
    </>
  );
}