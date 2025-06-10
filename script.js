// each fruit box randomly assign fruit image to it
// on clicking fruit 
// 10,7,5 marks given
// get highest marks

// array of fruits 
const fruits=[
    {name:"apple",src:"image.png",score:10},
    {name:"orange",src:"image2.png",score:7},
    {name:"strawberry",src:"image3.png",score:5}
]

// fruits as a whole
const fruit=document.getElementById("fruit");
// 1st fruit
const f1=document.getElementById("f1");
// 2nd fruit
const f2=document.getElementById("f2");
// 3rd fruit
const f3=document.getElementById("f3");
// images in each of fruits area
const im1=document.getElementById("im1");
const im2=document.getElementById("im2");
const im3=document.getElementById("im3");
// var to track fruits to be assigned
let fi1,fi2,fi3;
// flag for controlling restart, k for number of knives left
let flag=0,k=10;
// start and restart button
const btn=document.getElementById("btn");
// knives in stats
const knives=document.getElementById("knives");
// score in stats
const scoreText = document.getElementById("scoreText");
// result to be displayed
const res=document.getElementById("res");

// generate fruit function
function genFruit(){
    // knives over then display it
    if(k<=0){
        res.innerText="No Chances Left!";
        return;
    }
    // randomly assign fruits by 0 to 1 number gen * length of fruits array(3)  , floor of it to get whole number
    fi1=fruits[Math.floor(Math.random()*fruits.length)];
    fi2=fruits[Math.floor(Math.random()*fruits.length)];
    fi3=fruits[Math.floor(Math.random()*fruits.length)];
    // src of img assigned 
    im1.src=fi1.src;
    im2.src=fi2.src;
    im3.src=fi3.src;
    // if (flag==0){
    //     btn.innerText="Start";
    // }
    // display none to remove start button when not needed
    btn.style.display="none";
    // reduce knives as used
    k--;
    // stats
    knives.innerText=k;

}

// restart function when game over
function restart(){
    // flag=0;
    // knives refilled
    k=10;
    // score reset
    score=0;
    // button again hid as no use
    btn.style.display="none";
    // score,res,knives updated
    scoreText.innerText=score;
    res.innerText='';
    knives.innerText=k;
}

// Start button
btn.onclick=genFruit;
let score=0;

// function to count score
function countScore(i){
    // when knives over
    if(k<=0){
        res.innerText=`No Chances Left! \n`;
        res.innerText+=`Score:${score}`;
        // button needed for restart
        btn.style.display="block";
        btn.innerText="Restart";
        btn.onclick=restart;
        return;
    }
    score+=i.score;
    scoreText.innerText=score;
    // generate new fruits, for new game
    genFruit();
}

// functionality of clicking one of each fruits
im1.onclick= () =>countScore(fi1);
im2.onclick= () =>countScore(fi2);
im3.onclick= () =>countScore(fi3);


