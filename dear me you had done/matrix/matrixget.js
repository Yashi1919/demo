let dotasks=document.getElementById("dotasks");

let decidetasks=document.getElementById("decidetasks");

let delegatetasks=document.getElementById("delegatetasks");

let deletetasks=document.getElementById("deletetasks");
 let i=0;

repre();

 function repre(){
   
 
   if (localStorage.getItem("matrixtasks2") != null) {
 let tt = JSON.parse(localStorage.getItem("matrixtasks2"));
for(i=0; i<tt.length; i++){
  let taskli=document.createElement('li');
    
  dotasks.appendChild(taskli);
    

  if(tt[i].b !="" && tt[i].d !=""){
        taskli.innerHTML = tt[i].a;
        dotasks.appendChild(taskli);
  }
  
  if (tt[i].c != "" && tt[i].d != "") {
    taskli.innerHTML = tt[i].a;
    delegatetasks.appendChild(taskli);
  }
  
  if (tt[i].b != "" && tt[i].e != "") {
    taskli.innerHTML = tt[i].a;
    decidetasks.appendChild(taskli);
  }
  
  if (tt[i].c != "" && tt[i].e != "") {
    taskli.innerHTML = tt[i].a;
    deletetasks.appendChild(taskli);
  }
  
}
}

}
