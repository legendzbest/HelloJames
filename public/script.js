const firstRectangle=document.getElementById("HelloJames!");
let offsetX,offsetY,Dragging=false;
firstRectangle.addEventListener('mousedown',(e)=>
{
    if(e.button==0)
    {
        //console.log(e);
    }
}
);
firstRectangle.addEventListener('mousemove',(e)=>
{
    if(e.button==0)
    {
        //console.log(e);
    }
}
);
firstRectangle.addEventListener('mouseup',(e)=>
{
    if(e.button==0)
    {
        console.log(e);
    }
}
);