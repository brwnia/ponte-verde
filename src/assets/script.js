// ================= FORMULARIO FALE CONOSCO =================

const form = document.getElementById("contactForm");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const mensagemCounter = document.getElementById("mensagemCounter");
const successMessage = document.getElementById("successMessage");
const limiteMensagem = 500;

// ================= MOSTRAR ERRO =================

function mostrarErro(campo, mensagemErro) {
  const errorElement = document.getElementById(campo.id + "Error");

  errorElement.style.display = "block";
  errorElement.innerText = mensagemErro;
  campo.classList.add("is-invalid");
}

// ================= LIMPAR ERRO =================

function limparErro(campo) {
  const errorElement = document.getElementById(campo.id + "Error");

  errorElement.style.display = "none";
  errorElement.innerText = "";
  campo.classList.remove("is-invalid");
}

// ================= CONTADOR MENSAGEM =================

function atualizarContadorMensagem() {
  const totalCaracteres = mensagem.value.length;

  mensagemCounter.innerText =
    totalCaracteres + "/" + limiteMensagem + " caracteres";

  mensagemCounter.classList.toggle(
    "text-danger",
    totalCaracteres > limiteMensagem
  );
}

// ================= VALIDAR NOME =================

function validarNome(nomeTexto) {
  const partesNome = nomeTexto.trim().split(/\s+/);
  const contemApenasLetras = /^[A-Za-z\u00C0-\u00FF'-]+$/;

  if (partesNome.length < 2) {
    return false;
  }

  const primeiroNome = partesNome[0];
  const sobrenome = partesNome[partesNome.length - 1];

  return (
    primeiroNome.length >= 2 &&
    sobrenome.length >= 2 &&
    partesNome.every((parte) => contemApenasLetras.test(parte))
  );
}

// ================= VALIDAR EMAIL =================

function validarEmail(emailTexto) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(emailTexto.trim());
}

// ================= VALIDAR CAMPOS =================

function validarFormulario() {
  let valido = true;

  [nome, email, assunto, mensagem].forEach((campo) => limparErro(campo));

  // ================= NOME =================

  if (nome.value.trim() === "") {
    mostrarErro(nome, "O nome completo \u00E9 obrigat\u00F3rio.");
    valido = false;
  } else if (!validarNome(nome.value)) {
    mostrarErro(
      nome,
      "Informe nome e sobrenome com pelo menos 2 caracteres cada."
    );
    valido = false;
  }

  // ================= EMAIL =================

  if (email.value.trim() === "") {
    mostrarErro(email, "O e-mail \u00E9 obrigat\u00F3rio.");
    valido = false;
  } else if (!validarEmail(email.value)) {
    mostrarErro(email, "Digite um e-mail v\u00E1lido.");
    valido = false;
  }

  // ================= ASSUNTO =================

  if (assunto.value === "") {
    mostrarErro(assunto, "Selecione um assunto.");
    valido = false;
  }

  // ================= MENSAGEM =================

  if (mensagem.value.trim() === "") {
    mostrarErro(mensagem, "A mensagem \u00E9 obrigat\u00F3ria.");
    valido = false;
  } else if (mensagem.value.length > limiteMensagem) {
    mostrarErro(mensagem, "A mensagem deve ter no m\u00E1ximo 500 caracteres.");
    valido = false;
  }

  return valido;
}

// ================= ENVIO FORM =================

if (form && nome && email && assunto && mensagem && mensagemCounter) {
  mensagem.addEventListener("input", atualizarContadorMensagem);
  atualizarContadorMensagem();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    successMessage.style.display = "none";

    if (!validarFormulario()) {
      return;
    }

    successMessage.style.display = "block";
    form.reset();
    atualizarContadorMensagem();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);
  });
}

// ================= CARRINHO DE COTACAO =================

const produtosCotacao = document.getElementById("produtosCotacao");
const listaCotacao = document.getElementById("listaCotacao");
const totalCotacao = document.getElementById("totalCotacao");
const contadorItensCotacao = document.getElementById("contadorItensCotacao");
const enviarCotacao = document.getElementById("enviarCotacao");
const limparCotacao = document.getElementById("limparCotacao");
const cotacaoFeedback = document.getElementById("cotacaoFeedback");
const itensCotacao = [];
const btnComprar = document.getElementById("btnComprar");

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function buscarItemCotacao(id) {
  return itensCotacao.find((item) => item.id === id);
}

function calcularTotalCotacao() {
  return itensCotacao.reduce((total, item) => {
    return total + item.preco * item.quantidade;
  }, 0);
}

function atualizarResumoCotacao() {
  if (!listaCotacao || !totalCotacao || !contadorItensCotacao || !enviarCotacao) {
    return;
  }

  if (itensCotacao.length === 0) {
    listaCotacao.innerHTML = `
      <div class="cotacao-vazia">
        <i class="bi bi-bag-plus" aria-hidden="true"></i>
        <p>Adicione produtos para calcular uma estimativa.</p>
      </div>
    `;

    contadorItensCotacao.innerText = "Nenhum item";
    totalCotacao.innerText = formatarMoeda(0);
    enviarCotacao.disabled = true;
    return;
  }

  const totalItens = itensCotacao.reduce((total, item) => {
    return total + item.quantidade;
  }, 0);

  contadorItensCotacao.innerText =
    totalItens === 1 ? "1 item" : totalItens + " itens";

  listaCotacao.innerHTML = itensCotacao
    .map((item) => {
      const subtotal = item.preco * item.quantidade;

      return `
        <div class="item-cotacao" data-id="${item.id}">
          <div class="item-cotacao-topo">
            <div>
              <h4>${item.nome}</h4>
              <p>${item.produtor} - ${formatarMoeda(item.preco)}/${item.unidade}</p>
            </div>
            <button class="btn-remover-cotacao" type="button" aria-label="Remover ${item.nome}">
              <i class="bi bi-trash" aria-hidden="true"></i>
            </button>
          </div>

          <div class="item-cotacao-controles">
            <label>
              Quantidade (${item.unidade})
              <input
                class="quantidade-cotacao"
                type="number"
                min="1"
                value="${item.quantidade}"
                data-id="${item.id}"
              >
            </label>
            <span class="subtotal-cotacao">${formatarMoeda(subtotal)}</span>
          </div>
        </div>
      `;
    })
    .join("");

  totalCotacao.innerText = formatarMoeda(calcularTotalCotacao());
  enviarCotacao.disabled = false;
}

function esconderFeedbackCotacao() {
  if (!cotacaoFeedback) {
    return;
  }

  cotacaoFeedback.style.display = "none";
  cotacaoFeedback.innerText = "";
}

function adicionarProdutoCotacao(card) {
  const produto = {
    id: card.dataset.id,
    nome: card.dataset.nome,
    produtor: card.dataset.produtor,
    preco: parseFloat(card.dataset.preco),
    unidade: card.dataset.unidade,
    quantidade: 1
  };

  const itemExistente = buscarItemCotacao(produto.id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    itensCotacao.push(produto);
  }

  esconderFeedbackCotacao();
  atualizarResumoCotacao();
}

function removerProdutoCotacao(id) {
  const itemIndex = itensCotacao.findIndex((item) => item.id === id);

  if (itemIndex >= 0) {
    itensCotacao.splice(itemIndex, 1);
  }

  esconderFeedbackCotacao();
  atualizarResumoCotacao();
}

function alterarQuantidadeCotacao(id, quantidade) {
  const item = buscarItemCotacao(id);

  if (!item) {
    return;
  }

  item.quantidade = Math.max(1, quantidade);
  esconderFeedbackCotacao();
  atualizarResumoCotacao();
}

if (produtosCotacao && listaCotacao) {
  if (btnComprar) {
    btnComprar.addEventListener("click", function () {
      document.getElementById("cotacao").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  produtosCotacao.addEventListener("click", function (event) {
    const botaoAdicionar = event.target.closest(".btn-adicionar-cotacao");

    if (!botaoAdicionar) {
      return;
    }

    const card = botaoAdicionar.closest(".produto-cotacao-card");

    if (card) {
      adicionarProdutoCotacao(card);
    }
  });

  listaCotacao.addEventListener("click", function (event) {
    const botaoRemover = event.target.closest(".btn-remover-cotacao");

    if (!botaoRemover) {
      return;
    }

    const item = botaoRemover.closest(".item-cotacao");

    if (item) {
      removerProdutoCotacao(item.dataset.id);
    }
  });

  listaCotacao.addEventListener("change", function (event) {
    if (!event.target.classList.contains("quantidade-cotacao")) {
      return;
    }

    alterarQuantidadeCotacao(
      event.target.dataset.id,
      parseInt(event.target.value, 10) || 1
    );
  });

  if (limparCotacao) {
    limparCotacao.addEventListener("click", function () {
      itensCotacao.splice(0, itensCotacao.length);
      esconderFeedbackCotacao();
      atualizarResumoCotacao();
    });
  }

  if (enviarCotacao && cotacaoFeedback) {
    enviarCotacao.addEventListener("click", function () {
      if (itensCotacao.length === 0) {
        return;
      }

      const total = calcularTotalCotacao();

      cotacaoFeedback.innerText =
        "Cotacao enviada com sucesso! Total estimado: " +
        formatarMoeda(total) +
        ". Os produtores retornariam com disponibilidade e prazo de entrega.";
      cotacaoFeedback.style.display = "block";
    });
  }

  atualizarResumoCotacao();
}
