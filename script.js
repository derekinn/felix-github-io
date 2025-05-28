// --- ⭐ AQUI VOCÊ COLOCA SUAS MENSAGENS! ⭐ ---
// Adicione quantas quiser, quanto mais, melhor!
// Use piadas internas, lembranças, elogios, desejos...
const messages = [
    "Parabéns meu amorzinho",
    "Tudo de bom pra você ",
    "Tu é incrível demaiss, aproveita teu dia",
    "Manda a chave pix que eu vou abençoar",
    "Amei ter conhecido você",
    "🤓",
    "Muitas coisas boas pra você hoje bb",
    "Vou te dar teu presente (🖕🏽)",
    "Você é uma pessoa muito amorosa",
    "( . ) ( . )",
    "UÊN 👶🏽"
];
// --- ⭐ FIM DA LISTA DE MENSAGENS ⭐ ---

// Pega os elementos do HTML que vamos usar
const messageDisplay = document.getElementById('messageDisplay');
const generateButton = document.getElementById('generateButton');

// Adiciona um "ouvinte" ao botão. Quando ele for clicado, a função será executada.
generateButton.addEventListener('click', () => {
    // 1. Gera um número aleatório.
    //    Math.random() cria um número entre 0 (incluso) e 1 (excluso).
    //    Multiplicamos pelo tamanho da lista (messages.length).
    //    Math.floor() arredonda para baixo, nos dando um índice válido (0, 1, 2...).
    const randomIndex = Math.floor(Math.random() * messages.length);

    // 2. Pega a mensagem da lista usando o número aleatório.
    const randomMessage = messages[randomIndex];

    // 3. Mostra a mensagem na tela, dentro da caixinha.
    //    Usamos <p> para manter a formatação.
    messageDisplay.innerHTML = `<p>${randomMessage}</p>`;
});