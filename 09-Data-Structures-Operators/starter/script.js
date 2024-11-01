'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔' : ' '}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(42);
  console.log(output);
}

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24, // Aberto 24 hrs
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Objetos Aprimorados ES6
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', addRess }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be
       delivered to ${addRess} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...othersIngredients) {
    console.log(mainIngredient);
    console.log(othersIngredients);
  },
};
///////////////////////////////////////
// Coding Challenge #4

/* 
Escreva um programa que receba uma lista de nomes de variáveis ​​escritas em underscore_case e as converta para camelCase.

A entrada virá de uma textarea inserida no DOM (veja o código abaixo), e a conversão acontecerá quando o botão for pressionado.

ESTE DADO DE TESTE (colado na área de texto)
sublinhado_case
 primeiro nome
Alguma_Variável 
  calcular_AGE
partida_atrasada

DEVE PRODUZIR ESTA SAÍDA (5 saídas console.log separadas)
sublinhadoCase       ✅
primeiroNome        ✅✅
algumaVariável     ✅✅✅
calcularIdade     ✅✅✅✅
Partida atrasada ✅✅✅✅✅

DICA 1: Lembre-se de qual caractere define uma nova linha na área de texto 😉
DICA 2: A solução só precisa funcionar para uma variável composta por 2 palavras, como a_b
DICA 3: Comece sem se preocupar com o ✅. Resolva isso somente depois que a conversão do nome da variável estiver funcionando 😉
DICA 4: Este desafio é difícil de propósito, então comece a observar a solução caso tenha dúvidas. Então faça uma pausa e continue!

Depois, teste com seus próprios dados de teste!

BOA SORTE 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [indexx, i] of rows.entries()) {
    const [first, second] = i.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(indexx + 1)}`);
  }
});

/*
// ###############  Trabalhando com Strings Part 3 ###############
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Victor Dantas'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');  
capitalizeName('victor dantas');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(35, '+'));
console.log('Victor'.padStart(20, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12378931));
console.log(maskCreditCard(42457827645627182));
console.log(maskCreditCard('2637812673263873123'));

// Repeat

const message2 = 'Bad waether... All Departues Delayes... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${' 🛬 '.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


// ###############  Trabalhando com Strings Part 2 ###############
const airline = 'TAP Air Brasil';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Consertar a captilazacao de um nome:

const passenger = 'vIctoR'; // Victor
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparando email
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Trocando
const priceGB = '288,97£';
const prieceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceGB);
console.log(prieceUS);

const announcement =
  'All passengers come to barding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Pratice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowd on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food and pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// ###############  Trabalhando com Strings Part 1 ###############
const airline = 'TAP Air Brasil';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Brasil'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B e E sao assentos do meio
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Victor'));

// ###############  Maps: Fundamentos) ###############
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

// Converte um objeto para um map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quizz App

console.log(question.get('question'));
for (const [k, v] of question) {
  if (typeof k === 'number') console.log(`Answer ${k}: ${v}`);
}

// const answer = Number(prompt(`Your answer`));
const answer = 3;
console.log(answer);

// O jeito "certo" de se fazer usando o poder das keys booleanas
console.log(question.get(question.get('correct') === answer));

// O jeito q eu fiz
// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// Converter map para array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);



const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :C');

rest.get('name');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 20;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


// ########################## Set: fundamentos #######################
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Victor'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();

for (const order of orderSet) console.log(order);
console.log(orderSet);

// Example
// Digamos que temos uma Array em nosso restaurante, que contem o pessoal de nosso restaurante

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);


// Nome da propriedade
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day},`;
}

console.log(openStr);

// Valor da propriedade
const values = Object.values(openingHours);
console.log(values);

// Objeto inteiro
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// ########################## Com Optional Chaining #######################
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Exemplo
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Metodos
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [
//   {
//     name: 'Victor',
//     email: 'victordantas1524@gmail.com',
//   },
// ];

const users = [];

console.log(users[0]?.name ?? 'User array empty');

// Mesma coisa desse codigo abaixo

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

////////////////////////////////////
// Desafio de codificação nº 1


Estamos construindo um aplicativo de apostas em futebol (futebol para meus amigos americanos 😅)!

Suponha que obtenhamos dados de um serviço web sobre um determinado jogo (abaixo). Neste desafio vamos trabalhar com os dados. Então aqui estão suas tarefas:

1. Crie um array de jogadores para cada equipe (variáveis ​​‘players1’ e ‘players2’)
2. O primeiro jogador em qualquer grupo de jogadores é o goleiro e os demais são os jogadores de campo. Para o Bayern de Munique (equipe 1) crie uma variável ('gk') com o nome do goleiro e uma matriz ('fieldPlayers') com todos os 10 jogadores de campo restantes
3. Crie um array 'allPlayers' contendo todos os jogadores de ambas as equipes (22 jogadores)
4. Durante o jogo, o Bayern de Munique (equipe 1) utilizou 3 jogadores substitutos. Então crie um novo array ('players1Final') contendo todos os jogadores originais do time1 mais 'Thiago', 'Coutinho' e 'Perisic'
5. Com base no objeto game.odds, crie uma variável para cada odd (chamada 'team1', 'draw' e 'team2')
6. Escreva uma função ('printGoals') que receba um número arbitrário de nomes de jogadores (NÃO um array) e imprima cada um deles no console, junto com o número de gols marcados no total (número de nomes de jogadores passados ​​em )
7. A equipe com as probabilidades mais baixas tem maior probabilidade de vencer. Imprima no console qual time tem maior probabilidade de vencer, SEM usar uma instrução if/else ou o operador ternário.

DADOS DE TESTE PARA 6: Use os jogadores 'Davies', 'Muller', 'Lewandowski' e 'Kimmich'. Em seguida, chame a função novamente com jogadores de game.scored

BOA SORTE 😀
*/

/////////////////////////////////////
// Desafio de codificação nº 2

/* 
Vamos continuar com nosso aplicativo de apostas em futebol!

1. Faça um loop no array game.scored e imprima o nome de cada jogador no console, junto com o número do gol (Exemplo: "Gols 1: Lewandowski")
2. Use um loop para calcular a odd média e registre-a no console (já estudamos como calcular médias, você pode verificar se não se lembra)
3. Imprima as 3 probabilidades no console, mas de uma forma bem formatada, exatamente assim:
      Probabilidade de vitória do Bayern de Munique: 1,33
      Probabilidade de empate: 3,25
      Probabilidade de vitória do Borrussia Dortmund: 6,5
Obtenha os nomes dos times diretamente do objeto do jogo, não os codifique (exceto para "empate"). DICA: Observe como as probabilidades e os objetos do jogo têm os mesmos nomes de propriedades 😉

BÔNUS: Crie um objeto chamado 'artilheiros' que contém os nomes dos jogadores que marcaram como propriedades e o número de gols como valor. Neste jogo, ficará assim:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

BOA SORTE 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/* 
// Challenger 3

// 1.

const events = [new Set(gameEvents.values())];
console.log(events);

// 2

gameEvents.delete(64);

// 3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minute`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minute`
);

// 4

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`${half} [Half] ${min}: ${event}`);
}


// Challenger 2

// 1.

// const players = Object.entries(game.scored);

// let golStr = `Gols ${players.length}.`;

// for (const x of players) {
//   golStr += `${x}: `;
// }
// console.log(golStr);

// for (const [i, players] of Object.entries(game.scored)) {
//   console.log(`Gols ${i}: ${players}`);
// }

for (const [i, players] of game.scored.entries())
  console.log(`Goal ${i + 1}: player`);

// 2.

const odds = Object.values(game.odds);

let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
 
// 3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Probabilidade de vitoria ${teamStr}: ${odd}`);
}

// Probabilidade de vitória do Bayern de Munique: 1,33
// Probabilidade de empate: 3,25
// Probabilidade de vitória do Borrussia Dortmund: 6,5


// Challenger 1
// 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3.
const allPlayer = [...players1, ...players2];
console.log(allPlayer);

// 4.

const players1Final = ['Thiago', 'Coutinho', 'Persic', ...players1];
console.log(players1Final);

// 5.
// const { team1: team1, x: draw, team2: team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
console.log(draw);
console.log(team2);

// 6.

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored `);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//  ###############  Operador de atribuicao OR (||=) ###############

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Mesma coisa da linha declarada ali em cima, so que de forma mais concisa
// (porem, se o numGuests for 0, vai atribuir 10 pq 0 e um valor falso)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//  ###############  Operador de atribuicao Nullish (??=) ###############
//  Para (null E undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//  ###############  Operador de atribuicao AND (&&=) ###############
// OQ o operador de atribuicao AND faz e atribuir um valor a uma variavel SE ela for verdadeira
// no momento

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


########################## Nullish Coalescing Operator (??) #######################
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null e undefined (NAO INCLUI 0 ou " ")
const guesCorrect = restaurant.numGuests ?? 10;
console.log(guesCorrect);



########################## Short Circuiting (&& and ||) #######################


console.log('-------------- OR --------------');
// Podem usar qualquer tipo de dados, pode retornar qualquer tipo de dado, fazem algo
// chamado short-cicuiting
console.log(3 || 'Victor');
console.log('' || 'Victor');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------------- AND --------------');
console.log(0 && 'Victor');
console.log(7 && 'Victor');

console.log('Hello' && 23 && null && 'Victor');

// Exemplo Pratico
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');


########################## Rest Operator #######################

// 1 - Desestroturando

// SPREAD, porque fica no lado DIREITO do =
const arr = [1, 2, ...[3, 4]];

// Rest, porque fica no lado ESQUERDO do =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissotto, otherFood);

// Objetos
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2 - Funcoes
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', ' Spinach');

restaurant.orderPizza('Mushrooms');


########################## Spread Operator #######################

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copiar array
const mainMenuCoppy = [...restaurant.mainMenu];

// Juntar 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iteraveis: Arrays, Strings, Maps, Sets. NAO OBJETO

const str = 'Victor';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Dantas`); // Erro de sintaxe

// Exemplo do mundo real
// const ingredients = [
//   prompt("Let's make pasta! Indredient 1?"),
//   prompt('Indredient 2?'),
//   prompt('Indredient 3?'),
// // ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objetos
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCoppy = { ...restaurant };
restaurantCoppy.name = 'MORGUITAAAAAAAAAAAS';
console.log(restaurantCoppy.name);
console.log(restaurant.name);


########################## Desestruturando Objetos #######################
restaurant.orderDelivery({
  time: '22:30',
  addRess: 'Av. Gen. Mac Arthur, 170 - Vila Lageado',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  addRess: 'Rua SU1 n100',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// se quisessemos q os nomes da variaveis nao fossem iguais as das propriedades

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Definindo valor padrao
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj --- Daria um erro de sintaxe, pois espera q o codigo nao comece cm {} q indica q e
// bloco de codigo, ent pra dar certo, precisaria colocar o codigo em parenteses ()

({ a, b } = obj);
console.log(a, b);

// Objetos aninhados
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

########################## Desestruturando Arrays #######################
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(a, b, c);
console.log(x, y, z);

// Por mais q estejamos desestruturacao de um array, o array original nao e afetado
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Trocando variaveis
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recebendo dois valores retornando de uma funcao
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Desestruturacao aninhada
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Valores padroes
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/
