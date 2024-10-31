'use strict';

// Selecionando elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Condicoes iniciais
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Funcao para o dado rolar
btnRoll.addEventListener('click', function () {
  if (playing) {
    //  1. Gerar um numero aleatorio
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.Mostar o dado

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3.Checar se ele e 1: se for 1,

    if (dice !== 1) {
      // Adiciona os daods para a pontuacao atual
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // MUDAR DEPOIS
    } else {
      // Troca pro proximo player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Adicionar a pontuacal pro player atual
    scores[activePlayer] += currentScore;

    // E.g
    // scores[1] = scores[1] + currentScore (Pega o scores(0) e verifica o player, adiciona a pontuacao atual pro player atual)
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Checar se a pontuacal atual e >= 100
    if (scores[activePlayer] >= 20) {
      //Finalizar o jogo
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      // 3. Trocar pro proximo jogador
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
