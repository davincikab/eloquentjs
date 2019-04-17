let numb = [[2561, 2564], [2565, 2571], [2575, 2577], [2579, 2601], [2602, 2609], [2610, 2612], [2613, 2615]];

console.log( numb.reduce((count,b) => [`${count},${b}`]) );

// Recurasive :TODO
function loop(val, test, update, body){

  while (test(val)){
    body(val);
    val = update(val);
  }

}

loop(3, b => b< 10 , b => {return b+=1}, b => console.log(b) );


//  FInd a given character code in a sentence
function textScripts(text) {
  let scripts = countBy(text, char=>{
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  return scripts;
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв" jfjfjfjfnjfjfnd'));
