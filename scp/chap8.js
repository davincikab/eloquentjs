// Using strict mode
"use strict";
function iterate(){
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

iterate();

// Use of new keyword in strict mode
function Person(name){this.name = name; }
let davi = new Person('David');
console.log(davi.name);

// testing

function test(label, body){
  if(!body()) console.log(`Failed ${label}`);
}

test("covert text to uppercase", ()=>{
  return "hello".toUpperCase() == 'HELLO';
});

test("covert text to uppercase", ()=>{
  return "hello".toUpperCase() == 'Hello';
});


// DEBUGGING
function numberToString(n, base = 10){
  let result = "", sign = "";
  if(n < 0){
    sign = "-";
    n = - n;
  }

  do{
    result = String(n % base) + result;
    n = Math.floor(n/base);
    console.log( Math.floor(n/base));

  }while (n > 0);

  return sign + result;
}

console.log(numberToString(13, 10));


// ERROR propagation
// Exception handling
function promptDirection(question){
  let result = prompt(question);

  if(result.toLowerCase() == 'left') return 'L';
  if(result.toLowerCase() == 'right') return 'R';

  throw new Error("Invlid direction: " + result);
}


function look() {
  if(promptDirection("Which way ?") == 'L'){
    return "A house";
  }

  else {
    return " Two birds";
  }
}

try {
  console.log(look());
} catch (e) {
  console.log(e);
}


// cleaning up after aexptions
const account = {
  a:400,
  b:500,
  c:600
};

function getAccount(){
  let accName = prompt("Enter your account:");

  if(!account.hasOwnProperty(accName)){
    throw new Error(`Invalid account name: ${ accName}`);
  }

  return accName;
}

function transfer(from, amount){
  if(account[from] < amount) return;
  let progress = 0;
  try {
    account[from] -= amount;
    console.log(account[from]);
    progress = 1;
    account[getAccount()] +=amount;

    progress = 2;

  } finally {
    if (progress == 1) {
      account[from] +=amount;
      console.log(account[from]);
    }
  }
}

transfer('a', 200);

// using for(;;) loop
// Assertions
