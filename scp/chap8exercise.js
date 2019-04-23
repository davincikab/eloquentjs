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
