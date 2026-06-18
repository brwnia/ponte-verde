// ================= FORMULÁRIO FALE CONOSCO =================

const form = document.getElementById("contactForm");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

// ================= MOSTRAR ERRO =================

function mostrarErro(campo, mensagemErro) {

  const errorElement =
    document.getElementById(campo.id + "Error");

  errorElement.style.display = "block";
  errorElement.innerText = mensagemErro;

  campo.classList.add("is-invalid");
}

// ================= LIMPAR ERRO =================

function limparErro(campo) {

  const errorElement =
    document.getElementById(campo.id + "Error");

  errorElement.style.display = "none";
  errorElement.innerText = "";

  campo.classList.remove("is-invalid");
}

// ================= VALIDAR NOME =================

function validarNome(nomeTexto) {

  // exige nome e sobrenome
  const regex =
    /^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/;

  return regex.test(nomeTexto.trim());
}

// ================= VALIDAR EMAIL =================

function validarEmail(emailTexto) {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(emailTexto);
}

// ================= VALIDAR MENSAGEM =================

function validarMensagem(texto) {

  const palavras =
    texto.trim().split(/\s+/);

  // evita mensagens sem sentido
  const regexSemSentido =
    /(.)\1{4,}|[bcdfghjklmnpqrstvwxyz]{5,}/i;

  return (
    palavras.length >= 6 &&
    texto.length >= 25 &&
    !regexSemSentido.test(texto)
  );
}

// ================= ENVIO FORM =================

form.addEventListener("submit", function (e) {

  e.preventDefault();

  let valido = true;

  // limpa erros anteriores
  [nome, email, assunto, mensagem].forEach((campo) =>
    limparErro(campo)
  );

  // ================= NOME =================

  if (nome.value.trim() === "") {

    mostrarErro(
      nome,
      "O nome é obrigatório."
    );

    valido = false;

  } else if (!validarNome(nome.value)) {

    mostrarErro(
      nome,
      "Digite nome e sobrenome válidos."
    );

    valido = false;
  }

  // ================= EMAIL =================

  if (email.value.trim() === "") {

    mostrarErro(
      email,
      "O e-mail é obrigatório."
    );

    valido = false;

  } else if (!validarEmail(email.value)) {

    mostrarErro(
      email,
      "Digite um e-mail válido."
    );

    valido = false;
  }

  // ================= ASSUNTO =================

  if (assunto.value === "") {

    mostrarErro(
      assunto,
      "Selecione um assunto."
    );

    valido = false;
  }

  // ================= MENSAGEM =================

  if (mensagem.value.trim() === "") {

    mostrarErro(
      mensagem,
      "A mensagem é obrigatória."
    );

    valido = false;

  } else if (!validarMensagem(mensagem.value)) {

    mostrarErro(
      mensagem,
      "Escreva uma mensagem mais completa e compreensível."
    );

    valido = false;
  }

  // ================= SUCESSO =================

  if (valido) {

    const successMessage =
      document.getElementById("successMessage");

    successMessage.style.display = "block";

    form.reset();

    setTimeout(() => {

      successMessage.style.display = "none";

    }, 4000);
  }

});

  // ================= CALCULO DE RECEITA =================

function calcularReceita(){

  const quantidade =
    parseFloat(document.getElementById("quantidade").value) || 0;

  const preco =
    parseFloat(document.getElementById("preco").value) || 0;

  const receitaBruta = quantidade * preco;
  const taxa = receitaBruta * 0.05;
  const receitaLiquida = receitaBruta - taxa;

  document.getElementById("receitaBruta").innerHTML =
    receitaBruta.toLocaleString("pt-BR",{
      style:"currency",
      currency:"BRL"
    });

  document.getElementById("taxa").innerHTML =
    taxa.toLocaleString("pt-BR",{
      style:"currency",
      currency:"BRL"
    });

  document.getElementById("receitaLiquida").innerHTML =
    receitaLiquida.toLocaleString("pt-BR",{
      style:"currency",
      currency:"BRL"
    });

}
