let yearlybtn=document.getElementById('yearly')
let monthlybtn=document.getElementById('monthly')
let weeklybtn=document.getElementById('weekly')
let dailybtn=document.getElementById('daily')



yearlybtn.addEventListener('click',yearlydisplay);

monthlybtn.addEventListener('click',monthlydisplay);

weeklybtn.addEventListener('click',weeklydisplay);

dailybtn.addEventListener('click',dailydisplay);

/*
let page=document.body.id;

console.log(page);
switch(page){
 case 'yearly':
   console.log(page);
   break;
 case 'monthly':
 console.log(page);
 break;
 case 'weekly':
 console.log(page);
 break;
 case 'daily':
 console.log(page);
 break;
}

*/

function yearlydisplay(){
  location.href="yearly.html";
  

}

function monthlydisplay(){
  location.href="monthly.html";
  
}

function weeklydisplay() {
  location.href = "weekly.html";
}

function dailydisplay() {
  location.href = "daily.html";
  
}


