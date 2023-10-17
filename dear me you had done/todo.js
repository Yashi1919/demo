let input=document.getElementById('todoinput');
let addtaskbtn=document.getElementById('add');
let unorderedlist=document.getElementById('lists');
let todosdiv=document.getElementById('todos');


addtaskbtn.addEventListener('click',addtask);
unorderedlist.classList.add('ul')
function addtask(){
 var list=document.createElement('li');
 list.classList.add('list');
 list.innerHTML=input.value;
 unorderedlist.appendChild(list);
 input.value="";
 var checkbox=document.createElement('input');
 checkbox.setAttribute('type','checkbox');
 unorderedlist.appendChild(checkbox);
 let pomodoroinput=document.createElement('input');
 pomodoroinput.setAttribute('type','number');
 pomodoroinput.classList.add('pomodoroinput')
 pomodoroinput.max="5";
 unorderedlist.appendChild(pomodoroinput);
 console.log(unorderedlist);
 let startbutton=document.createElement('button');
 startbutton.setAttribute('name','Start Focus')
 startbutton.classList.add('startfocusbtn');
 unorderedlist.appendChild(startbutton);
 startbutton.innerHTML="set";
 let b=document.createElement('br');
 unorderedlist.appendChild(b);
 console.log(unorderedlist);
}
