let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];
let hs=0;

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game has Started");
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3.9);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randbtn);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed);
}


function btnPressed(){
    // console.log("button was clicked");
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,1000);
    }
    }
    else{
        if(hs<(level-1)){
            hs=level-1;
        }
        h2.innerHTML=`Game Over!! Your score was <b>${level-1} </b> <br>The current Highscore is ${hs} <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){document.querySelector("body").style.backgroundColor="white";},150)
        reset();
    }
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}