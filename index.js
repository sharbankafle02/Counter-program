const display=document.getElementById("display");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
let temp=0;
increase.onclick=function(){
    temp++;
    display.textContent=temp;
}
decrease.onclick=function(){
    temp--;
    display.textContent=temp;
}
reset.onclick=function(){
    temp=0;
    display.textContent=temp;
}