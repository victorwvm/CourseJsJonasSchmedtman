'use strict';
/*


function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milleninal = true;
      // Criando NOVAS variaveis com o mesmo nome de variaveis de outros escopos
      const firstName = 'Dantas';

      // Reatribuindo a variavel de escopos externos
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a milleninal, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(milleninal);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Victor';
calcAge(1987);



console.log(me);
// console.log(job);
// console.log(year);

var me = 'Victor';
let job = 'programmer';
const year = 2005;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
// Mesma coisa de: undefined(2,3) === undefined is not a function
// Se der console.log(typeof AddArrow vai resultar em undefined)

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // True
console.log(y === window.y); // False
console.log(z === window.z); // False

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  // console.log(this);
};
calcAge(2005);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  // console.log(this);
};
calcAgeArrow(2008);

const victor = {
  year: 2005,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
victor.calcAge();

const morg = {
  year: 2008,
};

morg.calcAge = victor.calcAge;
morg.calcAge();

const f = victor.calcAge;
f();

const victor = {
  firstName: 'Victor',
  year: 2005,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    // Solucao 1
    // const self = this; // Self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solucao 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

victor.greet();
victor.calcAge();

// Arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12, 15);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 3, 7);


let age = 18;
let oldAge = age;
age = 19;

console.log(age); // 31
console.log(oldAge); // 30

const me = {
  name: 'Victor',
  age: 19,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
// {name: 'Victor', age: 27}

console.log('Me', me);
// {name: 'Victor', age: 27}



// Tipos primitivos
let lastName = 'Fernandes';
let oldLastName = lastName;
lastName = 'Krasauskas';
console.log(lastName, oldLastName);

// Tipos de referencia
const victor = {
  firstName: 'Victor',
  lastName: 'Fernandes',
  age: 19,
};
const marriageVictor = victor;
marriageVictor;
console.log('Before marriage:', victor);
console.log('After marriage:', marriageVictor);

// Copiando objetos
const victor2 = {
  firstName: 'Victor',
  lastName: 'Fernandes',
  age: 18,
  // family: ['Rejane', 'Victoria', 'Deley'],
};

// ######## Basicamente nao daria certo, pois pra copiar um array aninhado dentro de um objeto teria
// que aprender sobre deep coppy

const victorCoppy = Object.assign({}, victor2);
victorCoppy.lastName = 'Krasauskas';
// victorCoppy.family.push('Morg', 'Simone', 'Joao Vitor', 'Joao');
console.log('Before marriage:', victor2);
console.log('After marriage:', victorCoppy);
*/
