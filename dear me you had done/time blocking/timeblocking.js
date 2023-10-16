let time1=document.getElementById('timerset1');
let time2=document.getElementById('timerset2' );

let c=0+':'+0+':'+0;
 

function convertvalue(n){
  return n.value;
}

function coverttosteing(input){
  return n.toString();
}

let startbutton=document.getElementById('startbtn');

startbutton.addEventListener('click',start);

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

let seconds=timerminutes*60;




function timr() {

  seconds--;
  console.log(secondstohms(seconds));

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



