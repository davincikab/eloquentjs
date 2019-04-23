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
