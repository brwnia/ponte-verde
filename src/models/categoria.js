export default class Categoria {
  constructor(nome, imagem) {
    this.nome = nome;
    this.imagem = imagem;
  }

  atualizarImagem(novaImagem) {
    this.imagem = novaImagem;
  }
}