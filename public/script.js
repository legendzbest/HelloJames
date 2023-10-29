const firstRectangle=document.getElementById("HelloJames!");
const counter=document.getElementById("Counter");
let number=0;
firstRectangle.addEventListener('dragstart',  drag(e));
firstRectangle.addEventListener('drop', drop(e));
const drag = (e)=>{
    
    console.log(e);
};
const drop= (e)=>
{
    console.log(e);
};