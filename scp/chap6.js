let david = {name:"David", speak};
let njeri = {name:"Njeri", speak}

function speak(line){
  return line +  ` ${this.name}`;
}

console.log(david.speak(`My name is`));
console.log(njeri.speak(`My name is`));

function normalize(){
  console.log(this.coord.map( m =>  m/this.length ));
}

normalize.call({coord:[4,2,4,7], length:4})

let protoRab = {
  speak(line){
    console.log(`The ${this.type} says ${line}`);
  },
  color:"white"
}

let goodRabbit = Object.create(protoRab);


goodRabbit.type= 'Good';

goodRabbit.speak("hey");
console.log(goodRabbit);


// OVERRIDING DERIVED PROPERTIES
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
     console.log(`The ${this.type} says ${line}`);
};

Rabbit.prototype.teeth = "Sharp";

let weirdRabbit = new Rabbit("weird");

weirdRabbit.speak("Hellooo");
weirdRabbit.teeth = 'blunt, short';

console.log(weirdRabbit.teeth);

// CLASSES

class Person {
  constructor (type){
    if (type == '') {
      this.type = 'White';
    }
    else {
      this.type = type;
    }

  }

  speaks(lang){
    if (lang == '') {
       return `The ${this.type} does not speak`;
    }
    return `The ${this.type} speaks ${lang}` ;
  }
}


let indiam = new Person('Indian');
let brit = new Person('');

indiam.speaks('Tamil');
console.log(indiam.speaks(''));
console.log(brit.speaks('English'));

// Overriding
// Encasulating
// Map: used for search data in a data structure

let davido= {
  name:"David",
  age:21
};

console.log("name" in davido);
console.log("toString" in davido);

let newton = new Map();
newton.set("age",19);
newton.set("height", 1.7);

console.log(newton.has("toString"));


// Polymorphism

// symbols
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
     console.log(`The ${this.type} says ${line}`);
};

let sym =  Symbol("name");

Rabbit.prototype.teeth = "Sharp";
Rabbit.prototype.sym = "Bunny";

let wRabbit = new Rabbit("weird");

wRabbit.speak("Hellooo");
wRabbit.teeth = 'blunt, short';

console.log(wRabbit["teeth"]);


const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function (){
  return `${this[1]} cm of yarn`;
}

console.log([1,2,3][toStringSymbol]());


// SYmbol iterator

let listt = [1,2,3,4,5][Symbol.iterator]();
console.log(listt.next().done);
  //  Iterable data structure

class Matrix {
  // initoalize the value or properties
  constructor(width,height, element = (x,y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    // iterate through the value and push them to content Array
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }

  }

  // Obtain the properties
  get(x, y){
    return this.content[y * this.width + x];
  }

  // change the properties
  set(x, y, value){
    this.content[y * width + x] = value;
  }
}

// Iterate through the matrix
class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next(){
    if(this.y == this.matrix.height) return { done:true};

    let value = {
      x:this.x,
      y:this.y,
      value : this.matrix.get(this.x, this.y)
    };

    this.x++;

    if(this.x == this.matrix.width){
      this.x = 0;
      this.y++;
    }

    return {value, done:false};
  }
}


// create a symbol iterator
Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};


let matrix = new Matrix(3,3, (x,y) => `value ${y} ${y}`);

for (let {x,y, value} of matrix) {
  console.log(x,y,value);
}


// GETTERS AND SETTERS
class Temperature {
  constructor(celcius) {
    this.celcius = celcius;
  }

  get tofahrenheit(){
    return this.celcius * 1.8 + 32;
  }

  set fahrenheit(value){
    this.celcius = (value-32) / 1.8;
  }

  static fromfahrenheit(value){
    return new Temperature((value-32) / 1.8);
  }
}

let temp = new Temperature(22);

console.log(temp.tofahrenheit);
let tm = Temperature.fromfahrenheit(86);

console.log(tm.celcius);

// INHERIRANCE

class SymmetricalMatrix extends Matrix{
  constructor(size, element = (x,y) => undefined){
    super(size, size, (x,y)=>{
      if(x<y) return element(y,x);
      else return  element(x,y);
    });
  }

  set(x,y, value){
    super.set(x,y, value);
    if(x!=y){
      super.set(y,x,value)
    }
  }
}

let matrixx = new SymmetricalMatrix(5, (x,y) => `${x}, ${y}`);

console.log(matrixx);
