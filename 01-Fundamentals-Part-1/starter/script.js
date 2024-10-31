/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = 'Victor';
console.log(firstName);

// Explicacao de nomes para variaveis
let victor_morg = 'V&M';
let $function = 27;

let person = 'Victor';
let PI = 3.1415;

let myFirstJob = 'Atendent';
let myCurrentJob = '...';

let job1 = 'Atendent';
let job2 = '...';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Victor');

javascriptIsFun = 'Sim';
console.log(typeof javascriptIsFun);

let year
console.log(year);
console.log(typeof year);

year = 2005;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 2005;
// birthYear = 2004; 
// const job;

var job = 'Progamador';
job = 'Professor';

lastName = 'Dantas';
console.log(lastName);


// Operadores matematicos
const now = 2024;
const ageVictor = now - 2005;
const ageMorg = now - 2008;
console.log(ageVictor, ageMorg);

console.log(ageVictor * 2, ageVictor / 10, 2 ** 3);
// 2 ** 3 = 2³ (2 *2 *2)

const firstName = 'Victor';
const lastName = 'Dantas';

console.log(firstName + ' ' + lastName);

// Operadores de atribuicao
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25 
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

// Operadores de comparacao
console.log(ageVictor > ageMorg); // >, <, >=, <=
console.log(ageMorg >= 18);

const isFullAge = ageMorg >= 18;

console.log(now - 1991 > now - 2018);


const now = 2024;
const ageVictor = now - 2005;
const ageMorg = now - 2008;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageVictor + ageMorg) / 2
console.log(ageVictor, ageMorg, averageAge)



Mark e John estão tentando comparar seu IMC (Índice de Massa Corporal),
que é calculado pela fórmula: IMC = massa / (altura * altura) (massa em kg e altura em metros).
Sua tarefa é escrever algum código para ajudá-los:
Armazene a massa e a altura de Mark e John em variáveis ​​chamadas massMark, heightMark, massJohn e heightJohn.
Calcule o IMC de ambos usando a fórmula e armazene os resultados em duas variáveis ​​chamadas BMIMark e BMIJohn.
Registre o valor de BMIMark e BMIJohn no console.
BÔNUS: Crie uma variável booleana markHigherBMI contendo informações sobre se Mark tem um IMC maior que John. 
Registre-o no console também

DADOS DE TESTE 1: Marks pesa 78 kg e tem 1,69 m de altura. John pesa 92 kg e tem 1,95 m de altura.
DADOS DE TESTE 2: Marks pesa 95 kg e tem 1,88 m de altura. John pesa 85 kg e tem 1,76 m de altura.
👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra
IMPORTANTE: O operador ** não é suportado neste editor. Certifique-se de usar exatamente esta fórmula
 massa / (altura * altura), e não esta massa / (altura ** 2).


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);
console.log(BMIMark, BMIJohn);


const firstName = 'Victor';
const job = 'Atendent';
const birthYear = 2005;
const year = 2024;

const victor =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(victor);

const victorNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(victorNew);

console.log(`Just a regular string...`);
console.log(
  'String with \n\
multiple \n\
lines'
);

console.log(`String with
multiple
lines`);


const age = 18;

if (age >= 18) {
  console.log(`Victor has ${age} years old, so he can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Victor is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2005;

let century;
if (birthYear <= 2000) {
  century = 'XX';
} else {
  century = 'XXI';
}
console.log(century);


Use o exemplo de IMC do Desafio nº 1 e o código que você já escreveu e melhore-o:

1. Imprima uma boa saída no console, informando ao usuário quem tem o IMC mais alto. 
A mensagem pode ser:
"O IMC de Mark é maior que o de John!" ou "O IMC do John é maior que o do Mark!".

2. Modifique as saídas acima para usar literais de modelo para incluir os valores de IMC n
as saídas.
Exemplo: "O IMC do Mark (28,3) é maior que o do John (23,9)!" ou "O IMC de John (29,1) é 
maior que o de Mark (27)!".

Nota: Não arredonde os valores do IMC. Deixe-os como estão.
👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra


const massMark = 88;
const heightMark = 1.76;
const massJohn = 92;
const heightJohn = 1.75;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`O IMC de Mark ${BMIMark} e maior que o de John!`);
} else {
  console.log(`O IMC de John ${BMIJohn} e maior que o de Mark!`);
}



// Conversao de tipo
const inputYear = '2005';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Victor'));
console.log(typeof NaN);

console.log(String(23), 23);

// Coercao de tipo
console.log('I am ' + 23 + ' years old'); // Mesmo q
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); // Retorna 10, mas quando muda o operador para '+' ele contatena
console.log('23' * '2');
console.log('23' / '2');


// 5 Valores falsos: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Victor'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

let height = 1;

if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is undefined');
}



const age = 18;
if (age === 18) console.log('You just became an adult ;D (strict)');
if (age == 18) console.log('You just became an adult ;D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 23) {
  // '23' == 23 -> False
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');



const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someonse else should drive...');
}



Existem duas equipes de ginástica: Golfinhos e Coalas. Eles competem entre si 3 vezes. O 
vencedor com maior pontuação média ganha um troféu!

Suas tarefas:

1. Calcule a pontuação média de cada equipe, usando os dados de teste incluídos abaixo.
 A pontuação média dos Golfinhos deve ser atribuída à variável scoreDolphins, e a pontuação
  média dos Koalas deve ser atribuída à variável scoreKoalas.

2. Compare as pontuações médias da equipe para determinar o vencedor da competição 
e imprima no console:

"Golfinhos ganham o troféu" se os Golfinhos vencerem, ou
"Coalas ganham o troféu" se os Koalas vencerem, ou
"Ambos ganham o troféu" se suas pontuações médias forem iguais.

DADOS DE TESTE: Golfinhos pontuaram 96, 108 e 89. Coalas pontuaram 88, 91 e 110.

👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra



// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 100 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log('Golfinhos ganharam o trofeu');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas ganharam o trofeu');
// } else if (scoreKoalas === scoreDolphins) {
//   console.log('Ambos ganham o trofeu');
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Golfinhos ganharam o trofeu');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas ganharam o trofeu');
} else if (
  scoreKoalas === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('Ambos ganharam o trofeu');
} else {
  console.log('Ninguem ganhou o trofeu');
}


const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Treino de perna');
    break;
  case 'tuesday':
    console.log('Treino de costas');
    break;
  case 'wednesday':
    console.log('Treino de peito');
    break;
  case 'thursday':
    console.log('Treino de posteriores');
    break;
  case 'friday':
    console.log('Treino de ombro');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Aproveito o final de semana');
    break;
  default:
    console.log('Nao e um dia valido');
}

if (day === 'monday') {
  console.log('Treino de perna');
} else if (day === 'tuesday') {
  console.log('Treino de costas');
} else if (day === 'wednesday') {
  console.log('Treino de peito');
} else if (day === 'thursday') {
  console.log('Treino de posteriores');
} else if (day === 'friday') {
  console.log('Treino de ombro');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Aproveito o final de semana');
} else {
  console.log('Nao e um dia valido');
}


3 + 4;
2005;
true && false && !false;

if (23 > 100) {
  const str = '23 is bigger';
}

const me = 'Victor';
console.log(`I'm ${2024 - 2005} years old ${me}`);


const age = 19;
// age >= 18
//   ? console.log('I like to drink wine')
//   : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}

console.log(drink2);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


DESAFIO #4

Steven precisa de uma calculadora de gorjetas muito simples para sempre que for comer em um restaurante. 
No país dele, é comum dar uma gorjeta de 15% se o valor da conta estiver entre 50 e 300. 
Se o valor for diferente, a gorjeta é de 20%.

Suas tarefas:

Calcule a gorjeta, dependendo do valor da conta. Crie uma variável chamada tip para isso. 
Não é permitido usar uma instrução if...else (se for mais fácil para você, você pode começar 
com uma instrução if...else e depois tentar convertê-la em um operador ternário).

Imprime uma string no console contendo o valor da conta, a gorjeta e o valor final (fatura + gorjeta).

Exemplo: A conta foi 275, a gorjeta foi 41,25 e o valor total foi 316,25.

Nota: Use os valores das variáveis ​​bill e tip para construir esta string. Não os codifique 🙂

DADOS DE TESTE: Teste com diferentes valores de nota: 275, 40 e 430

DICA: Para calcular 20% de um valor, basta multiplicá-lo por 20/100 = 0,2

DICA 2: O valor X está entre 50 e 300, se for >= 50 && <= 300 😉

👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra



let conta = 275;

console.log(conta);
const tip =
  conta >= 50 && conta <= 300 ? (conta * 15) / 100 : (conta * 20) / 100;

console.log(
  `A conta foi ${conta}, a gorjeta foi de ${tip} e o valor total foi de ${
    conta + tip
  }`
);

*/
