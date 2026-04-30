// 🔹 Criando o tabuleiro (3x3)
let tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// 🔹 Definindo jogador inicial
let jogadorAtual = "X";

function fazerJogada(linha, coluna) {

  // 1. Verificar se já está ocupada
  if (tabuleiro[linha][coluna] !== "") {
    alert("Esta posição já está ocupada! Escolhe outra.");
    return;
  }

  // 2. Jogar
  tabuleiro[linha][coluna] = jogadorAtual;

  // 3. Atualizar tela
  atualizarTela();

  // 4. Alternar jogador
  jogadorAtual = (jogadorAtual === "X") ? "O" : "X";

  // 5. Atualizar mensagem
  document.getElementById("mensagem").innerText =
    "Vez do jogador: " + jogadorAtual;
}

function atualizarTela() {

  const celulas = document.getElementsByClassName("celula");
  let indice = 0;

  for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
      celulas[indice].innerText = tabuleiro[l][c];
      indice++;
    }
  }
}
function verificarVitoria() {

  // Linhas
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] !== "" &&
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2]
    ) {
      return true;
    }
  }

  // Colunas
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[0][i] !== "" &&
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i]
    ) {
      return true;
    }
  }

  // Diagonal principal
  if (
    tabuleiro[0][0] !== "" &&
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2]
  ) {
    return true;
  }

  // Diagonal secundária
  if (
    tabuleiro[0][2] !== "" &&
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0]
  ) {
    return true;
  }

  return false;
}
