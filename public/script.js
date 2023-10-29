const firstRectangle=document.getElementById("HelloJames!");
let offsetX,offsetY,Dragging=false;
firstRectangle.addEventListener('mousedown',(e)=>
{
    if(e.button==0)
    {
        console.log(e.clientX,e.clientY);
        Dragging=true;
    }
}
);
firstRectangle.addEventListener('mousemove',(e)=>
{
    if(e.button==0)
    {   if(Dragging)
        {
            firstRectangle.style.left=e.clientX;
            firstRectangle.style.top=e.clientY;
        }
        //console.log(e);
    }
}
);
firstRectangle.addEventListener('mouseup',(e)=>
{
    Dragging=false;
    console.log(e.clientX,e.clientY);
}
);