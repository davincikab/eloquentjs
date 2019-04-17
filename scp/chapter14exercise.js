const MOUNTAINS = [
   {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
   {name: "Everest", height: 8848, place: "Nepal"},
   {name: "Mount Fuji", height: 3776, place: "Japan"},
   {name: "Vaalserberg", height: 323, place: "Netherlands"},
   {name: "Denali", height: 6168, place: "United States"},
   {name: "Popocatepetl", height: 5465, place: "Mexico"},
   {name: "Mont Blanc", height: 4808, place: "Italy/France"},
   {name: "Mount Fuji", height: 3776, place: "Japan"},
   {name: "Vaalserberg", height: 323, place: "Netherlands"},
   {name: "Denali", height: 6168, place: "United States"},
   {name: "Popocatepetl", height: 5465, place: "Mexico"},
   {name: "Mont Blanc", height: 4808, place: "Italy/France"}
 ];

let table = document.querySelector('table');
console.log(table);

let row = document.createElement('tr');

for (let key of Object.keys(MOUNTAINS[0]) ) {
  let thead = document.createElement('th');

  thead.appendChild(document.createTextNode(key.toUpperCase()));

  row.appendChild(thead);
  table.appendChild(row);
}

for (let mount  of MOUNTAINS) {
  let row = document.createElement('tr');

  // console.log(Object.keys(mount))

  for (var key in mount) {
     let tdata = document.createElement('td');
     tdata.appendChild(document.createTextNode(mount[key]));
     row.appendChild(tdata)
  }

  table.appendChild(row);
}

function byTagName(node, tagName) {
  let arr = [];
  if(node == tagName.toUpperCase()){
    arr.push(tagName.toUpperCase());
  }

  else if(node.nodeType == Node.ELEMENT_NODE) {
    for (var i = node.childNodes.length-1; i >=0 ; i--) {
      if(node.childNodes[i].nodeName == tagName.toUpperCase()){
        arr.push(tagName.toUpperCase())
      }
      else {
        byTagName(node.childNodes[i], tagName);
      }

    }
  }

  return arr;
}

console.log(byTagName(document.body, "table").length);


let cat = document.querySelector("#cat");
let hat = document.querySelector("#hat");

let angle = 0;
let lastTime = null;
function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.001;
  lastTime = time;
  cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
  cat.style.left = (Math.cos(angle) * 200 + 230) + "px";

  // Your extensions here.
  // angle = Math.PI * 1.5;
  hat.style.top = (Math.cos(angle) * 40 + 40) + "px";
  hat.style.left = (Math.sin(angle) * 200 + 230) + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
