function repeat(n, action) {
  for (var i = 0; i <n; i++) {
      action(i);
   }
}

let sum = 0;
repeat(5,i =>{
   sum +=i;
});

console.log(sum);

let labels = [];

repeat(5, i =>{
  labels.push(i+1);
});

console.log(labels);

// function greatthan10(){
//   return
// }

function greaterthan(n){
  return m => m<n;
}

let greaterthan10 = greaterthan(10);
console.log(greaterthan10(11));


[1,2,3,4].forEach( l => console.log(l));

let horseShoe = "🐴👟";

console.log(horseShoe.length);
console.log(horseShoe[0]);
console.log(horseShoe.charCodeAt(0));

for (let chr of horseShoe) {
  console.log(chr);
}

// Fuction to output all living scripts
function filter(array, test){
  //  Array to hold the scripts
  let living = [];
  for (let element of array) {
    if(!test(element)){
      living.push(element);
    }
  }
  return living;
}

console.log( filter(SCRIPTS, scripts => scripts.living));
console.log(SCRIPTS.filter(script => script.direction == "ttb" && script.living));
// SCRIPTS.forEach(l => console.log(l.living));
let rtlScripts = SCRIPTS.filter(l => l.direction == "rtl");
console.log(rtlScripts.map(l => l.name));

console.log([1,2,3,4].reduce((a,b) => a+b));

// find the scripts with the largest st of Chinese_characters

function characterCount(script){
  return script.ranges.reduce((count, [from, to])=>{
     return count +(to-from);
  },0);
}

console.log(SCRIPTS.reduce((a,b)=>{
    return characterCount(a) < characterCount(b)?b:a;
}));

// FInd a system using a number
function characterScript(code){
  for (let scripts of SCRIPTS) {
    if (scripts.ranges.some(([fro,to]) =>{
      return code >fro && code <to
    })) {
      return scripts;
    }
  }
  return null;
}

console.log(characterScript(12805));

// Countby
function countBy(items, groupName){
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name)

    if(known == -1){
      counts.push({name, count:1});
    }
    else{
      counts[known].count++;
    }
  }
  return counts;
}
// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

console.log(countBy([1,2,3,4,5,6,1,1,2,2], s => s==2?"Twos" :"Others" ));


//  FInd a given character code in a sentence
function textScripts(text) {
let scripts = countBy(text, char=>{
  let script = characterScript(char.codePointAt(0));
  return script ? script.name : "none";
}).filter(({name}) => name != "none");

let total = scripts.reduce((n,{count})=>n+count, 0);
if (total == 0) return "No scripts found";

// return scripts.map(({name, count})=> {
//   return `${Math.round(count*100/total)}% ${name}`;
// }).join(', ');
return scripts;
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
