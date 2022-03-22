let slide = new Array(
  "cat01.jpg",
  "cat02.jpg",
  "cat03.jpg",
  "cat04.jpg",
  "cat05.jpg",
  "cat06.jpg",
  "cat07.jpg",
  "cat08.jpg",
  "cat09.jpg",
  "cat10.jpg",
  "cat11.jpg",
  "cat12.jpg"
);

let b1 = document.querySelector("#previous");
let b2 = document.querySelector("#next");
let x=0;
let b3 = document.querySelector("#start");
let b4 = document.querySelector("#stop");
let myInterval;

function prev() {  
  if(x>0){ document.querySelector('#slide').src="assets/img/cats/"+slide[x-1];x-- }
  else{x=slide.length;document.querySelector('#slide').src="assets/img/cats/"+slide[x-1];x--};
                }

function next() {  
  if(x<slide.length-1){x++ ;document.querySelector('#slide').src="assets/img/cats/"+slide[x];}
  else{x=0;document.querySelector('#slide').src="assets/img/cats/"+slide[x];}
                }

function myStartFunction() {myInterval = setInterval(next, 4000);}
function stoper(){clearInterval(myInterval);}
                  
b1.addEventListener("click",prev);
b2.addEventListener("click",next);
b3.addEventListener("click",myStartFunction);
b4.addEventListener("click",stoper);
