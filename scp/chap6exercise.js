class Vec {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

 get length(){
   return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
 }
  minus(u,v){
    // return `${this.x-u}, ${this.y-v}`;
    return new Vec(this.x-u, this.y-v);
  }

  plus(u,v){
    // return `${this.x+u}, ${this.y+v}`;
    return new Vec(this.x+u, this.y+v);
  }
}


// let pnt = new Vec(3,4);
// console.log(pnt.minus(1,5));
// console.log(pnt.plus(1,5));
// console.log(pnt.length);

// GROUPS

  class Group {

    constructor() {
      // this.grp  = {};
      this.prop = [];
    }

    add(val){
      this.prop.push(val).toString();
    }
    delete(val){
        return this.prop.filter(x => x!=val)
    }

    has(val){
      return  this.prop.includes(val);
    }

    static from(obj){
      for (let value of obj) {
        return this.add(value);
      }

    }
  }

  let grp = new Group()
  grp.add("David");
  grp.add("Davi");

  console.log(grp);
  console.log(grp.has("David"));
  console.log(grp.delete("David"));

  // SYmbol iterator
  let listt = [1,2,3,4,5][Symbol.iterator]();
  console.log(Group.from([1,2,3,4,5]));

// ITERABLE GROUP
// BORROWINNG METHODS
