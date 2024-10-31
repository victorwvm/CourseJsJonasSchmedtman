'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

// const interface = 'Audio';
// const private = 542;


function logger() {
  console.log('My name is Victor');
}

// Calling / Running /  Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Declaracao de funcao

const age1 = calcAge1(2005);

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

//Expressao de funcao
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(2005);
console.log(age1, age2);


// Arrow function

const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2005, 'Victor'));
console.log(yearsUntilRetirement(1980, 'Bob'));



const cutFruitPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2005, 'Victor'));
console.log(yearsUntilRetirement(1950, 'Mike'));




De volta às duas equipes de ginástica, os Golfinhos e os Coalas! Há uma nova disciplina de ginástica, que funciona de forma diferente.

Cada equipe compete 3 vezes e então a média das 3 pontuações é calculada (portanto, uma pontuação média por equipe).

Uma equipe só vence se tiver pelo menos o dobro da pontuação média da outra equipe. Caso contrário, nenhuma equipe vence!


Suas tarefas:

Crie uma função de seta calcAverage para calcular a média de 3 pontuações. Esta 
função deve ter três parâmetros e retornar um único número (a pontuação média).

Crie duas novas variáveis ​​— scoreDolphins e scoreKoalas, e atribua a elas o valor 
retornado da função calcAverage (você precisará chamar esta função e passar pontuações como argumentos).

Crie uma função checkWinner que toma como parâmetro a pontuação média de cada 
equipe (avgDolphins e avgKoalas), e então registra o vencedor no console,
junto com os pontos de vitória, conforme regra acima.
Exemplo: vitória dos Koalas (30 vs. 13) (use avgDolphins e avgKoalas em vez de valores codificados).

Use a função checkWinner para determinar o vencedor para DADOS 1 e DADOS 2.

Ignore os empates desta vez. Em vez disso, registre Nenhuma equipe ganha... no console se não houver vencedor.

DADOS DE TESTE 1: Golfinhos pontuaram 44, 23 e 71. Coalas pontuaram 65, 54 e 49.
DADOS DE TESTE 2: Golfinhos pontuaram 85, 54 e 41. Coalas pontuaram 23, 34 e 27.

👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra


const calcAverage = (med1, med2, med3) => {
  return (med1 + med2 + med3) / 3;
};

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Vitoria dos golfinhos, (${scoreDolphins} a ${scoreKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2)
    console.log(`Vitoria dos coalas, (${scoreKoalas} a ${scoreDolphins})`);
  else {
    console.log('Nenhuma equipe ganhou...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);



const friend1 = 'Joao';
const friend2 = 'Paulo';
const friend3 = 'Matheus';

const friends = ['Joao', 'Paulo', 'Matheus'];
console.log(friends);

const y = new Array(2005, 2004, 2003, 2002);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jonas';
console.log(friends);

const firsName = 'Victor';
const victor = [firsName, 'Dantas', 2024 - 2005, 'Programador', friends];
console.log(victor);
console.log(victor.length);

//Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);



const friends = ['Joao', 'Paulo', 'Matheus'];

// Adiciona elementos
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elementos
friends.pop(); // Remove o ultimo elemento da array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove o primeiro elemento da array
console.log(friends);

console.log(friends.indexOf('Paulo'));
console.log(friends.indexOf('Carlos'));

friends.push(23);
console.log(friends.includes('Paulo'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Paulo')) {
  console.log('You have a friend called Paulo');
}

DESAFIO #2

Steven quer que você melhore sua calculadora de gorjetas, usando as mesmas regras de antes
– gorjeta de 15% da conta se o valor da conta estiver entre 50 e 300, e se o valor for diferente,
 a gorjeta será de 20%.

Suas tarefas:

Escreva uma função calcTip que receba qualquer valor de conta como entrada e retorne a 
gorjeta correspondente, calculada com base nas regras acima (você pode conferir o código do 
primeiro desafio da calculadora de gorjetas se precisar). 
Use o tipo de função que você mais gosta. Teste a função usando um valor de fatura de 100.

E agora vamos usar arrays! Portanto, crie um array chamado bills contendo os dados de 
teste abaixo.

Crie um array chamado dicas contendo o valor da gorjeta de cada nota, calculado a 
partir da função que você criou anteriormente.

BÔNUS: Crie um array de totais contendo os valores totais, ou seja, conta + gorjeta.

DADOS DE TESTE: 125, 555 e 44.

👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra



const calcTip = function (conta) {
  if (conta >= 50 && conta <= 300) {
    const gorjeta = (conta * 15) / 100;
    return gorjeta;
  } else {
    const gorjeta = (conta * 20) / 100;
    return gorjeta;
  }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totais = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(totais);


const victor = {
  firstName: 'Victor',
  lastName: 'Dantas',
  age: 2024 - 2005,
  job: 'Programador',
  friends: ['Joao', 'Paulo', 'Matheus'],
};

console.log(victor);

console.log(victor.lastName);
console.log(victor['lastName']);

const nameKey = 'Name';
console.log(victor['first' + nameKey]);
console.log(victor['last' + nameKey]);

const interestedIn = prompt(
  'What do you know about Victor? Chose between firstName, lastName, age, job and friends'
);

if (victor[interestedIn]) {
  console.log(victor[interestedIn]);
} else {
  console.log(
    'Wrong request! hose between firstName, lastName, age, job and friends'
  );
}

victor.location = 'Brasil';
victor['instagram'] = 'victor.wvm';
console.log(victor);

// Challenge
// "Victor has 3 friends, and his bestfriend is called Matheus"

console.log(
  `${victor.firstName} has ${victor.friends.length} friends, and his best friend is called ${victor.friends[0]}`
);



const victor = {
  firstName: 'Victor',
  lastName: 'Dantas',
  birthYear: 2005,
  job: 'programmer',
  friends: ['Joao', 'Paulo', 'Matheus'],
  hasDriverLicense: false,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSumary: function () {
    return `${this.firstName} is a ${this.calcAge()}-old ${victor.job}, and he${
      this.hasDriverLicense ? ' a' : ' no'
    }
    has a driver's license`;
  },
};

// console.log(victor.calcAge(2005));

// N precisando passar o argumento pq esta usando o `this`
console.log(victor.calcAge());

// console.log(victor.age());
// console.log(victor.age());
// console.log(victor.age());

//Challenge
// "Victor is a 19-years old programador, and he has a driver's license"

console.log(victor.getSumary());


DESAFIO #3

Voltemos a Mark e John comparando seus IMCs!

Desta vez, vamos usar objetos para implementar os cálculos!
 Lembre-se: IMC = massa / (altura * altura) (massa em kg e altura em metros).

Suas tarefas:

Para cada um deles, crie um objeto com propriedades de nome completo, massa e altura 
(Mark Miller e John Smith). Nomeie esses objetos como mark e john, e suas propriedades 
exatamente como fullName, mass e height.

Crie um método calcBMI em cada objeto para calcular o IMC (o mesmo método em ambos os objetos). 
Atribua o valor do IMC a uma propriedade chamada bmi (minúsculas) e também retorne-o do método.

Registe na console quem tem o IMC mais elevado, juntamente com o nome completo e o 
respetivo IMC. Exemplo: "O IMC de John Smith (28,3) é maior que o de Mark Miller (23,9)!".

DADOS DO TESTE: Marks pesa 78 kg e tem 1,69 m de altura. John pesa 92 kg e tem 1,95 m de altura.


👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra


IMPORTANTE: O operador ** não é suportado neste editor. Certifique-se de usar exatamente esta fórmula massa / (altura * altura), e não esta massa / (altura ** 2).


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(
  `O Vencedor e ${this.john > this.mark ? john.fullName : mark.fullName}`
);
console.log(
  `O IMC de ${this.john > this.mark ? john.fullName : mark.fullName} ${
    this.john > this.mark ? john.calcBMI() : mark.calcBMI()
  } e maior que o de ${this.mark < this.john ? mark.fullName : john.fullName} ${
    this.mark < this.john ? mark.calcBMI() : john.calcBMI()
  }!`
);


// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// O loop continua em execucao, enquanto a condicao for verdadeira
for (let rep = 1; rep <= 12; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


const victorArray = [
  'Victor',
  'Dantas',
  2024 - 2005,
  'programador',
  ['Joao', 'Paulo', 'Matheus'],
  true,
];

const types = [];

// console.log(victorArray[0])
// console.log(victorArray[1])
// ...
// console.log(victorArray[4])
// victor[5] NAO EXISTE

for (let i = 0; i < victorArray.length; i++) {
  // Lendo array de victor
  console.log(victorArray[i]);

  // Preencher tipos de array
  // types[i] = typeof victorArray[i];
  types.push(typeof victorArray[i]);
}

console.log(types);

const years = [1991, 2007, 2005, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2024 - years[i]);
}

console.log(age);

// Continue = encera apenas a iteracao atual.
console.log('------- Apenas strings -------');

for (let i = 0; i < victorArray.length; i++) {
  if (typeof victorArray[i] !== 'string') continue;

  console.log(victorArray[i], typeof victorArray[i]);
}

// Break = encerra completamente o loop inteiro.
console.log('------- Apenas numeros -------');

for (let i = 0; i < victorArray.length; i++) {
  if (typeof victorArray[i] === 'number') break;

  console.log(victorArray[i], typeof victorArray[i]);
}
  


const victor = [
  'Victor',
  'Dantas',
  2024 - 2005,
  'programador',
  ['Joao', 'Paulo', 'Matheus'],
  true,
];

for (let i = victor.length - 1; i >= 0; i--) {
  console.log(i, victor[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`_________ Starting exercise ${exercise} _________`);

  for (let rep = 1; rep < 13; rep++) {
    console.log(`Exercise ${exercise}: Lifting wieght repetition ${rep}`);
  }
}



for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetetion ${rep}`);
}

// ################# WHILE ######################

let rep = 1;
while (rep <= 10) {
  // console.log(`While: Lifting weights repetetion ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log('Loop is about to end...');
}



DESAFIO #4

Vamos melhorar ainda mais a calculadora de gorjetas do Steven, desta vez usando loops!

Suas tarefas:

1- Crie uma array contas contendo todos os 10 valores de contas de teste.
2- Crie array vazias para as gorjetas e os totais (gorjetas e totais)
3- Use a função calcTip que escrevemos antes (incluída no código inicial) para calcular 
gorjetas e valores totais (fatura + gorjeta) para cada valor de nota na array  contas.
Use um loop for para realizar os 10 cálculos!


DADOS DE TESTE: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.


BÔNUS:

Escreva uma função calcAverage que recebe um array chamado arr como argumento. Esta 
função calcula a média de todos os números no array fornecido. Este é um desafio 
DIFÍCIL (não fizemos isso antes)! Veja como resolver isso se você quiser:

Primeiro, você precisará somar todos os valores do array. Para fazer a adição, 
comece criando uma soma variável que comece em 0. Em seguida, faça um loop sobre 
o array usando um loop for. Em cada iteração, adicione o valor atual à variável sum. 
Dessa forma, ao final do loop, você terá todos os valores somados.

Para calcular a média, divida a soma calculada anteriormente pelo comprimento do array (porque esse é o número de elementos).
Chame a função com o array de totais.



const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 4, 5, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
