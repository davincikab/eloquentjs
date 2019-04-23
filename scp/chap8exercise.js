// Retry
class MultiplicationUnitFailure extends Error {}

function primitiveMultiply(a, b){
  if(Math.random() < 0.2){
    return a*b;
  }else {
    throw new MultiplicationUnitFailure('Klunk');
  }
}

function reliableMultiply(a,b){
  for(; ;){
    try {
     let result =  primitiveMultiply(a, b);
     return result;
     break;
    } catch (e) {
      if (e instanceof MultiplicationUnitFailure) {
        console.log(e);
      }
      else {
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8,6));


// The locked box
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body){
  box.locked = box.unlock;
  body();
  console.log(box.content);
}

withBoxUnlocked( function (){
  box.content.push("gold piece");
});

try {
  withBoxUnlocked( function () {
    throw new Error("Pirates coming");
  });
} catch (e) {
  console.log("Error raised: ", e);
} finally {

}
