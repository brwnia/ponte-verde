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

// ================= CALCULO DE RECEITA =================

function calcularReceita() {
  const quantidade =
    parseFloat(document.getElementById("quantidade").value) || 0;

  const preco =
    parseFloat(document.getElementById("preco").value) || 0;

  const receitaBruta = quantidade * preco;
  const taxa = receitaBruta * 0.05;
  const receitaLiquida = receitaBruta - taxa;

  document.getElementById("receitaBruta").innerHTML =
    receitaBruta.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  document.getElementById("taxa").innerHTML =
    taxa.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  document.getElementById("receitaLiquida").innerHTML =
    receitaLiquida.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
}
