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
