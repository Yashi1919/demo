let input=document.getElementById('todoinput');
let pomodorobtn=document.getElementById('add');
let todolists=document.getElementById('todos');
let orderedlists=document.getElementById('lists');


let h=document.getElementsByClassName('thetimers');
let totaltasks=h[0];
let totalpomodoros=h[1];
let totaltime=h[2];
let taskscompleted=h[3];
  let nooftasks=0;
let completedtasks=0;
  let noofpomodoros=0;





orderedlists.classList.add('orderedlists');
pomodorobtn.addEventListener('click',add);

function add(){
 if(input.value=='')
 {
  return;
 }
 else
 {
  nooftasks+=1;
  totaltasks.innerHTML=nooftasks;
 let lists = document.createElement('li');
 lists.classList.add('lists');
 
  lists.innerHTML=input.value;
let checkbox=document.createElement('input');
  input.value="";

checkbox.setAttribute('type','checkbox');
let nop=document.createElement('input');
nop.setAttribute('type','number');
checkbox.classList.add('checkbox');
nop.classList.add('nop');
nop.setAttribute('placeholder','no of pomodoros');

let para=document.createElement('p');
let startbtn = document.createElement('button');
startbtn.innerHTML = "Start";
startbtn.classList.add('startbtn');


let setbtn = document.createElement('button');
setbtn.innerHTML = "Set";
setbtn.classList.add('startbtn');



let deletebtn=document.createElement('button');
deletebtn.innerHTML="delete";
deletebtn.classList.add('dltbtn');

 orderedlists.appendChild(lists);
 orderedlists.appendChild(checkbox);
 orderedlists.appendChild(nop);
 orderedlists.appendChild(setbtn);
 orderedlists.appendChild(startbtn);
 orderedlists.appendChild(deletebtn);
 
 setbtn.addEventListener('click',set);
 checkbox.addEventListener('click',taskcompleted);
deletebtn.addEventListener('click',del);


 startbtn.disabled=true;
 
 
 
 
 function taskcompleted() {
  deletebtn.disabled=true;
  completedtasks+=1;
  taskscompleted.innerHTML=completedtasks;

 lists.style.textDecoration="line-through";
 let completed=document.createElement('p');
 completed.innerHTML="Task Completed";
 completed.style.fontStyle="italic";
 completed.style.color="#FFA500";
  completed.style.fontWeight="bold";

 orderedlists.appendChild(completed);
 }
 
 function set(){
 var b=nop.value;
 b=parseInt(b);
 noofpomodoros=noofpomodoros+b;
  totalpomodoros.innerHTML=noofpomodoros;
  setbtn.disabled=true;
  startbtn.disabled=false;
 }
 
 function del(){
  var b=nop.value;
  b=parseInt(b);
  noofpomodoros=noofpomodoros-b;
    
   orderedlists.removeChild(lists);
 orderedlists.removeChild(checkbox);
 orderedlists.removeChild(nop);
 orderedlists.removeChild(setbtn);
 orderedlists.removeChild(startbtn);
 orderedlists.removeChild(deletebtn);
  
    
    nooftasks-=1;
    totaltasks.innerHTML=nooftasks;
  totalpomodoros.innerHTML=noofpomodoros;

 }
 
 
 startbtn.addEventListener('click',start);
 
 function start(){
  location.href="main.html";
  console.log(nop.value);
 }
 
 
 }
 
 
 
}
setInterval(remainingtime,-1000);
function remainingtime(){
 let divtime=document.getElementById('timeleft');

let today=new Date();
let chours = today.getHours();
let cminutes = today.getMinutes();
let cseconds = today.getSeconds();

let thours=23;
let tminutes=59;
let tseconds=59;

let rhours=thours-chours;
let rminutes=tminutes-cminutes;
let rseconds=tseconds-cseconds;



let h=rhours+':'+rminutes+':'+rseconds;
console.log(h);
let div1=document.createElement('div');
let div2=document.createElement('div');
let div3=document.createElement('div');
div1.innerHTML=rhours;
div2.innerHTML=rminutes;
div3.innerHTML=rseconds;

 divtime.appendChild(div1);
 divtime.appendChild(div2);
 divtime.appendChild(div3);

}
