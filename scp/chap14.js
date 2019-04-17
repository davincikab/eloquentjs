function findText(node, string){
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if(findText(node.childNodes[i], string)){
         return true;
      }
    }
  }else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) ;
  }

}

console.log(findText(document.body, "books"));


function replace(){
  let images = document.getElementsByTagName('img');

  for (var i = images.length-1; i >= 0 ; i--) {
    let image  = images[i];

    if (image.alt) {
      let text = document.createTextNode(image.alt);

      image.parentNode.replaceChild(text, image);
    }
  }
}


function elt(type, ...children){
  let node = document.createElement(type);

  for (let child of children) {
    if (typeof child != "string") {node.appendChild(child)}
    else node.appendChild(document.createTextNode(child));
  }

  return node;
}
document.getElementById('quote').appendChild(
  elt('footer', '-',
    elt('strong', 'Davinci '),
        ", preface of ",
            elt("em", "Kingsman 2 movie"),
                ",2018")
);

function time(name, action){
  let start = Date.now();
  action();

  console.log(name, 'took', Date.now()-start, 'ms');
}

// time('naive', ()=>{
//   let target = document.getElementById('one');
//
//   while (target.offsetWidth < 2000) {
//     target.appendChild(document.createTextNode('X'));
//   }
// });

time('CLEVER', ()=>{
  let target = document.getElementById('two');
  target.appendChild(document.createTextNode('XXXXX'));
  let total = Math.ceil(2000 / (target.offsetWidth/5));

  target.firstChild.nodeValue = 'X'.repeat(total);
});
