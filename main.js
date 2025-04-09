const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
const caracteresMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caracteresNumeros = "0123456789";
const caracteresEspeciais = "!@#$%¨&*(){}[]";

function gerarSenha() {
    const comprimento = parseInt(document.getElementById("comprimento").value);
    const opcoes = {
        minusculas: document.getElementById("minusculas").checked,
        maiusculas: document.getElementById("maiusculas").checked,
        numeros: document.getElementById("numeros").checked,
        especiais: document.getElementById("especiais").checked
    };

    let conjuntoCaracteres = '';
    if (opcoes.minusculas) conjuntoCaracteres += caracteresMinusculas;
    if (opcoes.maiusculas) conjuntoCaracteres += caracteresMaiusculas;
    if (opcoes.numeros) conjuntoCaracteres += caracteresNumeros;
    if (opcoes.especiais) conjuntoCaracteres += caracteresEspeciais;

    if (!conjuntoCaracteres) {
        alert('Selecione pelo menos uma opção de caracteres!');
        return;
    }

    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indiceAleatorio = Math.floor(Math.random() * conjuntoCaracteres.length);
        senha += conjuntoCaracteres[indiceAleatorio];
    }

    document.getElementById('senha').value = senha;
}

function copiarSenha() {
    const entradaSenha = document.getElementById('senha');
    entradaSenha.select();
    document.execCommand('copy');

    const botaoCopiar = document.querySelector('.botao-copiar');
    const textoOriginal = botaoCopiar.textContent;
    botaoCopiar.textContent = 'Copiado!';
    setTimeout(() => {
        botaoCopiar.textContent = textoOriginal;
    }, 2000);
}

// Gerar senha automaticamente ao carregar
gerarSenha();
