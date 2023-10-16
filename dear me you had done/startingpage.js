let snopsetbtn=document.getElementById('snopset');
let snopinput=document.getElementById('snop');

/*snopsetbtn.addEventListener('click',setsnop);*/
snopsetbtn.disabled = false;
snopinput.disabled = false;
  snopinput.max="5";


let startfocusbtn=document.createElement('button');
startfocusbtn.innerHTML="Start Focus";
startfocusbtn.classList.add('startfocusbtn');


      
let noofpomodoros=document.getElementById('counter');
snopinput.setAttribute('max','5');
snopinput.setAttribute('min','1');
  snopsetbtn.addEventListener('click',setsnop);

  let timerssection=document.getElementById('timers');
  let image=new Array();
  image[0]=new Image();
  image[0].src="pomodoro.png";
  image[1]=new Image();
  image[1].src="pomodoro.png";
  image[2]=new Image();
  image[2].src="pomodoro.png";
  image[3]=new Image();
  image[3].src="pomodoro.png";
  image[4]=new Image();
  image[4].src="pomodoro.png";
  
  
  
    image[0].addEventListener('click',n);
    image[0].addEventListener('click',h);
    image[0].addEventListener('click',ap);
 /*   
let songs=new Array();
songs[0]=new Audio();
songs[0].src="Deep_Focus 1.m4a";
    */
  var a1 = document.createElement("AUDIO");
  a1.src = "Deep Focus 1.m4a";
  
  var b1= document.createElement("AUDIO");
  b1.src = "Deep Focus 2.m4a";
  var c1= document.createElement("AUDIO");
  c1.src = "Deep Focus 3.m4a";
  var d1 = document.createElement("AUDIO");
  d1.src = "Deep Focus 4.m4a";
  var e1 = document.createElement("AUDIO");
  e1.src = "Deep Focus 5.m4a";
  var f1 = document.createElement("AUDIO");
  f1.src = "Deep Focus 6.m4a";
  
  a1.volume=0.3;
    b1.volume=0.3;
  c1.volume=0.3;
  d1.volume=0.3;
  e1.volume=0.3;
  f1.volume=0.3;

  function ap(){
    a1.play
  }
  
   function ap1() {
     b1.play();
   }
   function ap2() {
     c1.play();
   }
   function ap3() {
     d1.play();
   }
   function ap4() {
     e1.play();
   }
   function ap5() {
     f1.play();
   }

 breaktimerclick=document.getElementsByName('timersp[1]');
 
 
/*
    image[1].addEventListener('click',h);
        image[1].addEventListener('click',n1);

  image[2].addEventListener('click',h);
      image[2].addEventListener('click',n2);

  image[3].addEventListener('click',h);
      image[3].addEventListener('click',n3);

  image[4].addEventListener('click',h);
      image[4].addEventListener('click',n4);
*/

function n(){
    image[1].removeEventListener('click',h,false);
    image[2].removeEventListener('click',h,false);
    image[3].removeEventListener('click',h,false);
    image[4].removeEventListener('click',h,false);
}
  /*
function n1() {
  image[1].removeEventListener('click', h, false);
  image[0].removeEventListener('click', h, false);
  image[3].removeEventListener('click', h, false);
  image[4].removeEventListener('click', h, false);
}

function n2() {
  image[1].removeEventListener('click', h, false);
  image[0].removeEventListener('click', h, false);
  image[3].removeEventListener('click', h, false);
  image[4].removeEventListener('click', h, false);
}

function n3() {
  image[1].removeEventListener('click', h, false);
  image[2].removeEventListener('click', h, false);
  image[0].removeEventListener('click', h, false);
  image[4].removeEventListener('click', h, false);
}

function n4() {
  image[1].removeEventListener('click', h, false);
  image[2].removeEventListener('click', h, false);
  image[3].removeEventListener('click', h, false);
  image[0].removeEventListener('click', h, false);
}
*/


let items=["1","2","3","4","5"]
let M=items[Math.floor(Math.random()*items.length)];
console.log(M)


var audio=[];
audio[0]=new Audio();
audio[0].src="6.mp3"
audio[1]=new Audio();
audio[1].src="5.mp3"
audio[2]=new Audio();
audio[2].src="4.mp3"
audio[3]=new Audio();
audio[3].src="3.mp3"
audio[4]=new Audio();
audio[4].src="2.mp3"
audio[5]=new Audio();
audio[5].src="1.mp3"
audio[6] = new Audio();
audio[6].src = "1.mp3"
audio[7] = new Audio();
audio[7].src = "1.mp3"
audio[8] = new Audio();
audio[8].src = "1.mp3"
audio[9] = new Audio();
audio[9].src = "1.mp3"
audio[10] = new Audio();
audio[10].src = "1.mp3"

function playsong() {
 audio[M].play();
 console.log('hi yashi its working');
}







 let timefocused=document.getElementById('focusedtime');
 let totaltime=0;
 
 
 
  function setsnop(){
    let count=0;
    let i;
    for(i=0; i<snopinput.value; i++){
      let div = document.createElement('div');
      div.appendChild(image[i]);
      div.classList.add('divisions'+i);
      timerssection.appendChild(div);
      console.log(timerssection);
      
      count++;
      noofpomodoros.innerHTML='No of Pomodoros:-'+count;
      
    }
    snopinput.disabled=true;
    snopinput.value="";
    }



      
      
 let breakdiv=document.getElementById('breaktimer');
   
 let focusdiv=document.getElementById('focustimer');
 console.log(breakdiv);
 console.log(focusdiv);

    focusdiv.innerHTML="";
    breakdiv.innerHTML="";
   
 
  
  function convertseconds(s){
  var min=Math.floor(s/60);
  var sec=Math.floor(s%60);
  return min+':'+sec;
}

  let a = 0;
  let b = 0;
    let c = a + ':' + b;


/*  1st one*/
function h() {
   image[0].style.backgroundColor="red"; 
  

  let focustime = 25*60;
  let breaktime = 5*60;
  focusdiv.innerHTML="";
  breakdiv.innerHTML="";
  

  function timr() {

    focustime--;
    focusdiv.innerHTML = convertseconds(focustime);
    
    if (convertseconds(focustime) == c) {
      clear(my);
      hello();
      alert('its break time click on break to listen a song');
   breaktimer.addEventListener('click',playsong());

    }
  }
  

  const my = setInterval(timr, 1000);
  function clear(s) {
    clearInterval(s);
  }
  
  
  function hello(){
   
    function breaktim() {
      breaktime--;
      breakdiv.innerHTML = convertseconds(breaktime);
      if (convertseconds(breaktime) == c) {
        clear(brk);
        console.log('hi');
        image[1].addEventListener('click',h1);
        image[1].style.backgroundColor="red";
    image[1].addEventListener('click',ap1);

      }
      
    }
    const brk = setInterval(breaktim, 1000);
}

}
  
/*  2nd one*/

function h1() {
  let focustime = 25*60;
  let breaktime = 5*60;
  focusdiv.innerHTML="";
  breakdiv.innerHTML="";
  function timr() {

    focustime--;
    focusdiv.innerHTML = convertseconds(focustime);
    
    if (convertseconds(focustime) == c) {
      clear(my);
      hello();
      
  }

    }
  
  const my = setInterval(timr, 1000);
  function clear(s) {
    clearInterval(s);
  }
  
  
  function hello(){
   
    function breaktim() {
      breaktime--;
      breakdiv.innerHTML = convertseconds(breaktime);
      if (convertseconds(breaktime) == c) {
        clear(brk);
        console.log('hi');
        image[2].addEventListener('click',h2);
        image[2].style.backgroundColor="red";
        image[1].style.backgroundColor="none";
          image[2].addEventListener('click',ap2);

      }
    }
    const brk = setInterval(breaktim, 1000);
}
}
  
 /*  3rd one*/

function h2() {
  let focustime = 25*60;
  let breaktime = 5*60;
  focusdiv.innerHTML="";
  breakdiv.innerHTML="";
  function timr() {

    focustime--;
    focusdiv.innerHTML = convertseconds(focustime);
    
    if (convertseconds(focustime) == c) {
      clear(my);
      hello();
playsong();
    }
  }
  

  const my = setInterval(timr, 1000);
  function clear(s) {
    clearInterval(s);
  }
  
  
  function hello(){
   
    function breaktim() {
      breaktime--;
      breakdiv.innerHTML = convertseconds(breaktime);
      if (convertseconds(breaktime) == c) {
        clear(brk);
        console.log('hi');
        image[3].addEventListener('click',h3);
           image[3].style.backgroundColor="red";
        image[2].style.backgroundColor="none";
      image[3].addEventListener('click',ap3);

      }
      
    }
    const brk = setInterval(breaktim, 1000);
}

}
  
 /*  4th one*/

function h3() {
  let focustime = 25*60;
  let breaktime = 5*60;
  focusdiv.innerHTML="";
  breakdiv.innerHTML="";
  function timr() {

    focustime--;
    focusdiv.innerHTML = convertseconds(focustime);
    
    if (convertseconds(focustime) == c) {
      clear(my);
      hello();

    }
  }
  

  const my = setInterval(timr, 1000);
  function clear(s) {
    clearInterval(s);
  }
  
  
  function hello(){
   
    function breaktim() {
      breaktime--;
      breakdiv.innerHTML = convertseconds(breaktime);
      if (convertseconds(breaktime) == c) {
        clear(brk);
        console.log('hi');
        image[4].addEventListener('click',h4);
        image[4].style.backgroundColor="orange";
        image[3].style.backgroundColor="red";
     image[4].addEventListener('click',ap4);

      }
      
    }
    const brk = setInterval(breaktim, 1000);
}

}
  
 /*  5th one*/

function h4() {
  let focustime = 25*60;
  let breaktime = 5*60;
  focusdiv.innerHTML="";
  breakdiv.innerHTML="";
  function timr() {

    focustime--;
    focusdiv.innerHTML = convertseconds(focustime);
    
    if (convertseconds(focustime) == c) {
      clear(my);
      hello();
      alert('wanna listen songs come on musica calling you');
    }
  }
  

  const my = setInterval(timr, 1000);
  function clear(s) {
    clearInterval(s);
  }
  
  
  function hello(){
   
    function breaktim() {
      breaktime--;
      breakdiv.innerHTML = convertseconds(breaktime);
      if (convertseconds(breaktime) == c) {
        clear(brk);
        console.log('hi');
        image[5].addEventListener('click',h5);
        image[5].style.backgroundColor="orange";
        image[4].style.backgroundColor="red";
    image[5].addEventListener('click',ap5);

      }
      
    }
    const brk = setInterval(breaktim, 1000);
}

}
  
 /*
d=0+':'+0;
if(focusdiv.innerHTML==d)
{
 alert('its break time click on break to listen a song');
  breaktimerclick.addEventListener('click',playsong());
 
 console.log('hi');
}
*/
