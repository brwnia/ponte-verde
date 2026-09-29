export default class Produtor {
  constructor(nome, distancia, avaliacao, imagem) {
    this.nome = nome;
    this.distancia = distancia;
    this.avaliacao = avaliacao;
    this.imagem = imagem;
  }

  atualizarAvaliacao(novaAvaliacao) {
    this.avaliacao = novaAvaliacao;
  }

  atualizarDistancia(novaDistancia) {
    this.distancia = novaDistancia;
  }
}