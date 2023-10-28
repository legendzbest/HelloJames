const button=document.getElementById("Button");
const counter=document.getElementById("Counter");
let number=0;
button.addEventListener("click", ()=>{
    number+=1;
    counter.textContent=number;
 });