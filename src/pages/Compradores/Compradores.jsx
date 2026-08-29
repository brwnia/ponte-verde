import ComprasPorCategoria from './components/ComprasPorCategoria';
import BannerPrincipal from './components/BannerPrincipal';
import Navbar from '@/components/Navbar';
import React from 'react';

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
import Cotacao from './components/Cotacao';

// Imagens produtores
import produtor1Image from '@/assets/img/criacaogalina.jpeg';
import produtor2Image from '@/assets/img/plantacaofruta.jpeg';
import produtor3Image from '@/assets/img/plantacao.jpeg';
import Produtores from './components/Produtores';

const categorias = [
  { nome: 'Hortaliças', imagem: hortalicasImage },
  { nome: 'Frutas', imagem: frutasImage },
  { nome: 'Lacticínios', imagem: laticiniosImage },
  { nome: 'Carnes', imagem: carnesImage },
  { nome: 'Grãos e Cereais', imagem: graosImage },
  { nome: 'Artesanais', imagem: artesanaisImage },
  { nome: 'Kits e Cestas', imagem: kitsImage },
];

const produtosCotacao = [
  {
    id: 'cenoura',
    nome: 'Cenoura Organica',
    produtor: 'Sitio Boa Terra',
    preco: 12.9,
    unidade: 'kg',
    categoria: 'Hortalicas',
    imagem: cenouraImage,
  },
  {
    id: 'tomate',
    nome: 'Tomate Italiano',
    produtor: 'Carlos Santos Produtor',
    preco: 8.5,
    unidade: 'kg',
    categoria: 'Hortifruti',
    imagem: tomateImage,
  },
  {
    id: 'maca',
    nome: 'Maca Fuji',
    produtor: 'Fazenda Sao Jose',
    preco: 15,
    unidade: 'kg',
    categoria: 'Frutas',
    imagem: macaImage,
  },
  {
    id: 'cesta',
    nome: 'Cesta Organica Mista',
    produtor: 'Cooperativa Verde',
    preco: 58,
    unidade: 'un',
    categoria: 'Kits e Cestas',
    imagem: kitsImage,
  },
];

const produtores = [
  {
    nome: 'Sítio Boa Terra',
    distancia: 12,
    avaliacao: 4.8,
    imagem: produtor1Image,
  },
  {
    nome: 'Fazenda São José',
    distancia: 18,
    avaliacao: 4.9,
    imagem: produtor2Image,
  },
  {
    nome: 'Carlos Santos Produtor',
    distancia: 10,
    avaliacao: 4.9,
    imagem: produtor3Image,
  },
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
