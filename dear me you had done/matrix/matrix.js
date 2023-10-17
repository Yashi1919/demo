let start=document.getElementById('startbtn');

let add=document.getElementById('add');

let tasksection=document.getElementById('tasksection')

add.addEventListener('click',addtasks);

let inputtasks=document.getElementById('tasksofyou');






start.addEventListener('click',sworking);

function sworking(){
  location.href="matrixget.html";
}




function addtasks(){
  if(inputtasks.value=='')
 {
  return;
 }
 else
 {
   
   savetolocalstorage(inputtasks.value);
   
    rdiv();

}
}


function rdiv(){
  representondiv();
}

  let i=0;

function representondiv(){
console.log(i);




 
   if (localStorage.getItem("matrixtasks") != null) {
 let tt = JSON.parse(localStorage.getItem("matrixtasks"));
for(i=i; i<tt.length; i++){
   let taskdiv = document.createElement('div');
   taskdiv.classList.add('taskdiv');
   
     taskdiv.innerHTML = `
              <p class=taskinput>${tt[i].inp}<p><br>
              <div class="checkboxdiv">
      <label>important<input type="checkbox" class="cb1"  value="important";     
></label>
      <label>not-important<input type="checkbox" class="cb2"  value="notimportant";     
></label>
      <label>urgent<input type="checkbox"class="cb3"  value="urgent";     
></label>
      <label>not-urgent<input type="checkbox"class="cb4"  value="noturgent";     
></label>
              </div>
      
      `;
 
      
   let setb=document.createElement('button');
   setb.innerHTML="set";
   taskdiv.appendChild(setb);
   
   
   
     tasksection.appendChild(taskdiv);
   
     inputtasks.value = "";
     
 let thetask=taskdiv.querySelector('.taskinput');    
 let cb1=document.querySelector(".cb1");
  let cb2=document.querySelector(".cb2");
 let cb3=document.querySelector(".cb3");
 let cb4=document.querySelector(".cb4");
let chkbxdiv=document.querySelector(".checkboxdiv");
//setbtn.addEventListener('click',sett);
setb.addEventListener('click',sett);


cb1.addEventListener('click', important);
cb2.addEventListener('click', unimportant);
cb3.addEventListener('click', urgent);
cb4.addEventListener('click', noturgent);



function important (){
  cb2.disabled=true;
  cb2.value="";
}

function unimportant (){
  cb1.disabled=true;
  cb1.value="";
}

function urgent() {
  cb4.disabled = true;
    cb4.value="";

}

function noturgent() {
  cb3.disabled = true;  
    cb3.value="";

}
/*
if(cb1.checked==true){
window.onload=important();
}

if(cb2.checked==true){
window.onload=unimportant();
}

if (cb3.checked==true) {
  window.onload = urgent();
}
if (cb4.checked==true) {
  window.onload = noturgent();
}

*/

//sett(a,cb1.value,cb2.value,cb3.value,cb4.value);

function sett(){
  
  
  
  a = thetask.innerHTML;
  
  
  b = cb1.value;
    c = cb2.value;
  d = cb3.value;
  e = cb4.value;

  



   
 if(localStorage.getItem("matrixtasks2")==null){
   localStorage.setItem("matrixtasks2","[]")
 }
  
  f=JSON.parse(localStorage.getItem("matrixtasks2"));
  mt=new Myset2(a,b,c,d,e);
  console.log(mt);
  f.push(mt);

  localStorage.setItem("matrixtasks2",JSON.stringify(f));
  
taskdiv.removeChild(chkbxdiv);
tasksection.removeChild(taskdiv);
}
function Myset2(a,b,c,d,e){
  this.a=a;
  this.b=b;
    this.c=c;
  this.d=d;
  this.e=e;
}



}



   }

}









function Myinput(inp){
  this.inp=inp;
}

function savetolocalstorage(inp){
  
 if(localStorage.getItem("matrixtasks")==null){
   localStorage.setItem("matrixtasks","[]")
 }
    a=JSON.parse(localStorage.getItem("matrixtasks"));
    console.log(a);
    let b=new Myinput(inp);
    a.push(b);
    localStorage.setItem("matrixtasks",JSON.stringify(a));
}



window.onload=function(){
  representondiv();
  addtasks();
  rdiv();
}





/*
  console.log('hi')
  i+=1;
  let taskdiv=document.createElement('div');
  taskdiv.classList.add('taskdiv'+i);
  let checkboxdiv=document.createElement('div');
  checkboxdiv.classList.add('checkboxdiv')
  let taskinput=document.createElement('input');
 
  taskinput.classList.add('taskinput')
  taskinput.setAttribute('placeholder','Your Tasks')
  taskinput.setAttribute('type','text');
  taskinput.setAttribute('name','task')
  let para=document.createElement('p');
  para.classList.add('taskinput');
  para.innerHTML=inputtasks.value;
  inputtasks.value="";
    let checkbox1=document.createElement('input');
    let checkbox2=document.createElement('input');
    let checkbox3=document.createElement('input');
    let checkbox4=document.createElement('input');

  checkbox1.setAttribute('type','checkbox');
  checkbox2.setAttribute('type','checkbox');
  checkbox3.setAttribute('type','checkbox');
  checkbox4.setAttribute('type','checkbox');



checkbox1.addEventListener('click', important);
checkbox2.addEventListener('click', unimportant);
checkbox3.addEventListener('click', urgent);
checkbox4.addEventListener('click', noturgent);
checkbox1.setAttribute('id','checkbox1'+i);
checkbox2.setAttribute('id','checkbox2'+i);
checkbox3.setAttribute('id','checkbox3'+i);
checkbox4.setAttribute('id','checkbox4'+i);


let form=document.createElement('form');
form.classList.add('form'+i);
form.setAttribute('id','formid'+i)
form.setAttribute('method','get');

//form.setAttribute('action','matrixget.html');


let label1=document.createElement('label')
let label2=document.createElement('label')
let label3=document.createElement('label')
let label4=document.createElement('label')
label1.innerText="Important"
label2.innerText="Not-Important"
label3.innerText="Urgent"
label4.innerText="Not-Urgent"



let starttask=document.createElement('button');

//let submitbtn=document.createElement('button');
//submitbtn.innerHTML="submit";


label1.appendChild(checkbox1);
label2.appendChild(checkbox2);
label3.appendChild(checkbox3);
label4.appendChild(checkbox4);
checkboxdiv.appendChild(label1);
checkboxdiv.appendChild(label2);
checkboxdiv.appendChild(label3);
checkboxdiv.appendChild(label4);
taskdiv.appendChild(para);
taskdiv.appendChild(checkboxdiv);
//taskdiv.appendChild(submitbtn);
form.appendChild(taskdiv);

//form.appendChild(starttask);
console.log(form);
tasksection.appendChild(form)
let n=0;

//submitbtn.addEventListener('click',starttasks)


function important (){
  checkbox2.disabled=true;
  n=1;
 console.log(n);
return n;
}

function unimportant (){
  checkbox1.disabled=true;
      n=2;
 console.log(n);

return n;

}

function urgent() {
  checkbox4.disabled = true;
     n=3;

 return n;
}

function noturgent() {
  checkbox3.disabled = true;  
  n=4;
 return n;

}
let doimage=document.createElement('img');
doimage.src="do.png";

let delegateimage=document.createElement('img');
delegateimage.src="delegate.png";

let decideimage = document.createElement('img');
decideimage.src = "decide.png";

let deleteimage = document.createElement('img');
deleteimage.src = "delete.png";

doimage.classList.add('icons');
delegateimage.classList.add('icons');
decideimage.classList.add('icons');
deleteimage.classList.add('icons');


let p1=document.createElement('p');
p1.innerHTML="do this task now";

let p2=document.createElement('p');
p2.innerHTML="delagate this task";

let p3 = document.createElement('p');
p3.innerHTML = "decide the task";

let p4 = document.createElement('p');
p4.innerHTML = "delete the task";
p1.classList.add('dotask');
p2.classList.add('delegatetask');
p3.classList.add('decidetask');
p4.classList.add('deletetask');

let dodiv=document.createElement('div');
let delegatediv=document.createElement('div');
let decidediv=document.createElement('div');
let deletediv=document.createElement('div');
let strtbutton=document.createElement('button');
strtbutton.innerHTML="start";
strtbutton.classList.add('strtbutton')


dodiv.appendChild(p1);
delegatediv.appendChild(p2);
decidediv.appendChild(p3);
deletediv.appendChild(p4);

dodiv.appendChild(doimage);
delegatediv.appendChild(delegateimage);
decidediv.appendChild(decideimage);
deletediv.appendChild(deleteimage);


dodiv.appendChild(strtbutton);
deletediv.appendChild(strtbutton);
delegatediv.appendChild(strtbutton);
decidediv.appendChild(strtbutton);



dodiv.classList.add('dodiv');
delegatediv.classList.add('delegatediv');
decidediv.classList.add('decidediv');
deletediv.classList.add('deletediv');



start.setAttribute('type','submit');
start.setAttribute('value','submit');

start.addEventListener('click',starttasks);





function starttasks(){
 if(checkbox1.disabled==true && checkbox3.disabled==true){
  console.log("delete");
   form.appendChild(deletediv);
   
   

}

else if (checkbox2.disabled == true && checkbox4.disabled == true) {
 console.log("do");
    form.appendChild(dodiv);

}

else if (checkbox2.disabled == true && checkbox3.disabled == true) {
console.log("delegate");
    form.appendChild(delegatediv);


}

else if (checkbox1.disabled == true && checkbox4.disabled == true) {
console.log("decide");
 form.appendChild(decidediv);

}

}


function addchecks(n1,n2){
  return n1+n2;
}
}

}

*/
