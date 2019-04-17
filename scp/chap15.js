let par = document.querySelector('p');
par.addEventListener('click', function(){
  par.append('You clicked');
});

let button = document.querySelector('button');

// function once(){
//   par.prepend('Click Event');
//   button.removeEventListener('click', once);
// }
button.addEventListener('click', event => {
  console.log('Child Event');
  console.log(event.clientX+' px  '+event.clientY+' px');
  if (event.button == 0) {
    event.stopPropagation();
  }

  // else if (event.button==1) {
  //   console.log('Middle Click');
  // }
  //
  // else if (event.button==2) {
  //   console.log('Right Click');
  // }

});

document.body.addEventListener('click', event=>{
  if(event.target.nodeName ==  "BUTTON") {
    console.log('Click from button '+event.target.textContent);
    event.stopPropagation();

  }
});

window.addEventListener('keydown',event=>{
  if (event.key == 'b') {
    document.body.style.background = 'blue';
  }
    });

  window.addEventListener('keyup',event=>{
    if (event.key == 'b') {
      document.body.style.background = '';
    }
  });

// window.addEventListener('mousemove', event=>{
//     let dot = document.createElement('div');
//     dot.className = 'dot';
//     dot.style.top = event.pageY + 'px';
//     dot.style.left = event.pageX + 'px';
//
//   // document.body.appendChild(dot);
//   par.textContent = `Mouse at ${event.pageX}, ${event.pageY}`;
//   dot.style.blur = 2 + 'px';
// });


let lastX;
let bar = document.querySelector('div');

bar.addEventListener('mousedown', event=>{
  if(event.button == 0){
      lastX = event.clientX
      window.addEventListener('mousemove', moved);
      event.preventDefault();
  }
});

function moved(event){
  if(event.buttons == 0){
    window.removeEventListener('mousemove',  moved);
    event.stopPropagation();
  }

  else{
    let dist = event.clientX - lastX;
    let newwidth = Math.max(10, bar.offsetWidth+dist)
    bar.style.width = newwidth +'px';
    lastX = event.clientX;
  }
}

// function update(event){
//
//   for (let dot; dot = document.querySelector('dot';) {
//     dot.remove();
//   }
//
//   for (let i = 0; i < event.touches.length; i++) {
//     let {pageX, pageY} = event.touches[i];
//     let dot = document.createElement("dot");
//     dot.style.left = (pageX - 50) + "px";
//     dot.style.top = (pageY - 50) + "px";
//      document.body.appendChild(dot);
//
//
//   }
// }
// window.addEventListener('touchstart', update);
// window.addEventListener('touchmove', update);
// window.addEventListener('touchstend', update);


// Scroll bar

par.prepend('// window.addEventListener'.repeat(400));

let progressbar  = document.getElementById('progressbar');
window.addEventListener('scroll', ()=>{

  max = document.body.scrollHeight - innerHeight;
  progressbar.style.width = `${(pageYOffset/max)*100}%`;
});

// FOCUS AND BLUR EVENTS

let data_help = document.getElementById('help');
let fields = document.querySelectorAll('input');

for (field of Array.from(fields)) {
  field.addEventListener('focus', event=>{
    data_help.textContent = event.target.getAttribute('data-help');
  });

  field.addEventListener('blur', event => {
    data_help.textContent = '';
  });
}

// WORKERS IN JS
// let sqworker = new Worker('scp/worker.js');
// sqworker.addEventListener('message', event =>{
//   console.log("Worker responded: " + event.data);
// });

// sqworker.postMessage(10);

// let bombTimer = setTimeout(() => {
//   console.log("BOOM!");
// }, 500);
//
// if (Math.random() < 0.000000000000001) { // 50% chance
//   console.log("Defused.");
//   clearTimeout(bombTimer);
// }
//
// let ticks = 0;
// let clock = setInterval(() => {
//   console.log("tick", ticks++);
//   if (ticks == 10) { clearInterval(clock);
//     console.log("stop.");
//   }
// }, 200);

let schedule  = null;

window.addEventListener('mousemove',event =>{
  if(!schedule){
    setTimeout(()=>{
        // document.body.textContent = `Mouse position ${event.pageX}, ${event.pageY}`;
        schedule = null;
    }, 500);
    schedule = event;
  }
});

// BALLON
let balloonsize = 10;
let balloon = document.querySelector('#balloon');
window.addEventListener('keydown',event=>{
  if (event.key == "ArrowUp" ) {
    event.preventDefault();
   if (balloon.style.fontSize > '80px') {
          balloon.innerHTML = ' 💥 ';
          balloon.style.fontSize = 10 +'px';
          window.removeEventListenerr('keydown',event => {});
     }

     else {
       balloonsize += 10;
       balloon.style.fontSize = balloonsize + 'px';
       window.removeEventListener('keydown',event => {});
     }

  }
  else if (event.key == 'ArrowDown') {
      event.preventDefault();

      balloonsize = balloon.style.fontSize.slice(0,2);
      balloonsize -= 10;
      // console.log(balloonsize);
      balloon.style.fontSize = balloonsize + 'px';

      window.removeEventListener('keydown',event=>{});
    }
  });



  window.addEventListener('keyup', event => {
    window.removeEventListener('keyup',event=>{});
  });


  // TABBED PANE
  function astabs(node){
    // Show childElemnts
    // insert a button list at top of the node: data-tabname
    // display style:none
    // Visible node
  }
