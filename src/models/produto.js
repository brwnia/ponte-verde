export default class Produto {
  constructor(id, nome, produtor, preco, unidade, categoria, imagem) {
    this.id = id;
    this.nome = nome;
    this.produtor = produtor;
    this.preco = preco;
    this.unidade = unidade;
    this.categoria = categoria;
    this.imagem = imagem;
  }

  calcularValor(quantidade) {
    return this.preco * quantidade;
  }

  atualizarPreco(novoPreco) {
    this.preco = novoPreco;
  }
}