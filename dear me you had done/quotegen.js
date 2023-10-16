let startfocus=document.getElementById('startbutton')
startfocus.addEventListener('click',function(){
 location.href="newtodolist.html";
})





console.log('Hello World!');
let quote= document.getElementById("quote")
setInterval(quotegen(),3000);
function quotegen(){
  let quotes=["i am yashi","hotha hai yaar","love karne ka liya bahut fast sa","na illa enna teriyadu"]
 quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];
}

