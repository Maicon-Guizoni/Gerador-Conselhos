const botao = document.querySelector(".advice-update");
const numeroConselho = document.querySelector(".advice-titulo");
const conselho = document.querySelector(".advice-paragrafo");

async function getAdvice() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await resposta.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    numeroConselho.innerHTML = adviceId;
    conselho.innerHTML = adviceText;
}

// adviceUpdateButton.addEventListener("click");
// getAdvice();

function clicar() {
    getAdvice();
}