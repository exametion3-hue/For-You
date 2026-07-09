const text = `Happy Birthday, my sweetheart.

I hope we stay together for a long, beautiful life.

Thank you for every smile you've given me.

Every moment with you is a memory I'll always keep.

I love you so much.

You are the most precious and sweetest thing in my life. ❤️`;

const openBtn = document.getElementById("openBtn");
const welcome = document.querySelector(".welcome");
const letter = document.querySelector(".letter");
const typing = document.getElementById("typing");
const morse = document.getElementById("morse");
const decodeBtn = document.getElementById("decode");
const decoded = document.getElementById("decoded");

openBtn.onclick = () => {

welcome.style.display = "none";
letter.classList.remove("hidden");

let i = 0;

function type(){

if(i < text.length){

typing.innerHTML += text.charAt(i);
i++;

setTimeout(type,35);

}else{

morse.classList.remove("hidden");

}

}

type();

};

decodeBtn.onclick = ()=>{

decoded.classList.remove("hidden");

decodeBtn.style.display="none";

};

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(15+Math.random()*20)+"px";

document.getElementById("particles").appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);
