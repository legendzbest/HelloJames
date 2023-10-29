const firstRectangle=document.getElementById("HelloJames!");
const counter=document.getElementById("Counter");
let number=0;
firstRectangle.addEventListener('dragstart',  drag);
firstRectangle.addEventListener('drop', drop);
const drag = (e)=>{
    
    console.log(e);
};
const drop= (e)=>
{
    console.log(e);
};