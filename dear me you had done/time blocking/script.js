const addBtn = document.getElementById('add')  
 const notes = JSON.parse(localStorage.getItem('notes'));
 
 
 
 
 






 
 if(notes) {  
   notes.forEach(note => addNewNote(note))  
 }  
 addBtn.addEventListener('click', () => addNewNote())  
 function addNewNote(text = '') {  
   const note = document.createElement('div')  
   note.classList.add('note')  
  

  

   
   
   
   
   note.innerHTML = `  
   <div class="notifying">
    <button class="notifybtn">
    Set
    </button>
    <button class="editbtn">
    Edit
    </button>
    
   </div>
   
   <div class="tools">  
  <input id="timerset1" type="time" placeholder="timestart" name="time">
  <input id="timerset2" type="time" placeholder="timeend">
  <button id="startbtn">start</button>
     <button class="edit"><i class="fas fa-edit"></i></button>  
     <button class="delete"><i class="fas fa-trash-alt"></i></button>  
   </div>  
   <div class="main ${text ? "" : "hidden"}"></div>  
   <textarea class="${text ? "hidden" : ""}"></textarea>  
   `  
  
  let notifybtn=note.querySelector('.notifybtn');
  notifybtn.addEventListener('click',notify);
  
  let editbtn=note.querySelector('.editbtn');
  editbtn.addEventListener('click',edit);
  
    let startbtn=note.querySelector('#startbtn')

  
  let tools=note.querySelector('.tools');
  
  

  
  
 let time1=note.querySelector('#timerset1');
let time2=note.querySelector('#timerset2' );

let c=0;
 
 
 

function convertvalue(n){
  return n.value;
}

function coverttosteing(input){
  return n.toString();
}


startbtn.addEventListener('click',start);

function start(){
  
 var a=document.getElementById('timerset1');
 var b=document.getElementById('timerset2');
 
var t1=a.value;
var t2=b.value;

t1=t1.toString();
t2=t2.toString();
 
t1=t1.split(':');

t2=t2.split(':');
 
 
 var minutes1 = (+t1[0]) * 60 + (+t1[1]);
 var minutes2 = (+t2[0]) * 60 + (+t2[1]);

minutes1=parseInt(minutes1);
minutes2=parseInt(minutes2);

var timerminutes=0;
if(minutes1>minutes2){
  timerminutes=minutes2-minutes2;
}
else if(minutes2>minutes1){
    timerminutes=minutes2-minutes1;
}




/*

function timr() {

  timerminutes--;
  console.log(convertseconds(timerminutes));

  if (convertseconds(timerminutes)== c) {
    clear(my);

  }
}


const my = setInterval(timr, 1000);

function clear(s) {
  clearInterval(s);
}


function convertseconds(s){
  var min=Math.floor(s/60);
  var sec=Math.floor(s%60);
  return min+':'+sec;
}
*/






let seconds=timerminutes*60;

let p =document.createElement('p');


timr();
function timr() {

  seconds--;
  p.innerHTML=secondstohms(seconds);
tools.removeChild(time1);
tools.removeChild(time2);
tools.appendChild(p);
  if (secondstohms(seconds)== c) {
    clear(my);

  }
}


const my = setInterval(timr, 1000);

function clear(s) {
  clearInterval(s);
}

/*
function convertseconds(s){
  
  var min=Math.floor(s/60);
  var sec=Math.floor(s%60);
  return min+':'+sec;
}

*/
function secondstohms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " : " : ":") :"";
    var mDisplay = m > 0 ? m + (m == 1 ? ": " : ":") :"";
    var sDisplay = s > 0 ? s + (s == 1 ? ": " : " "):"";
    return hDisplay + mDisplay + sDisplay; 
}



}



















function notify(){
 time1.disabled=true;
 time2.disabled=true;
 
 
 
 
 var date=new Date();
 var h=date.getHours();
 var m=date.getMinutes();
 console.log(h);
  console.log(m);
var sec=h*3600+m*60;
console.log(sec);
let timenow=0;


function cutime(){
  sec++;
  console.log(sectohms(sec));
  let i=time1.value;
  
  if(i==sectohms(sec)){
    var audio=new Audio("song.mp3");
    audio.play();
  }
  let j=time2.value;
  if(j==sectohms(sec)){
    var audio=new Audio("song.mp3");
    audio.play();
    clearInterval(t);
  }
  
}


const t= setInterval(cutime, 1000);



  
  function sectohms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ":" :":") :"";
    var mDisplay = m > 0 ? m + (m == 1 ? "" :""):"";
    var sDisplay = s > 0 ? s + (s == 1 ? " " : " "):"";
    return hDisplay + mDisplay; 
}
 
}
 

 
 
 
 
 function edit(){
   time1.disabled=false;
  time2.disabled=false;
 
 
 

 
 }
  
  
  
  
  
  
  
  
  
   
   const editBtn = note.querySelector('.edit')  
   const deleteBtn = note.querySelector('.delete')  
   const main = note.querySelector('.main')  
   const textArea = note.querySelector('textarea')  
   textArea.value = text  
   main.innerHTML = marked(text)  
   
   let ip=document.createElement('input');

   
   
   deleteBtn.addEventListener('click', () => {  
     note.remove()  
     updateLS()  
   })  
   editBtn.addEventListener('click', () => {  
     main.classList.toggle('hidden')  
     textArea.classList.toggle('hidden')  
   })  
   textArea.addEventListener('input', (e) => {  
     const { value } = e.target  
     main.innerHTML = marked(value)  
     updateLS()  
   })  
   document.body.appendChild(note)  
 }  
 function updateLS() {  
   const notesText = document.querySelectorAll('textarea')  
   const notes = []  
   notesText.forEach(note => notes.push(note.value))  
   localStorage.setItem('notes', JSON.stringify(notes))  
 


}


