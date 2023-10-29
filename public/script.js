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
            console.log(firstRectangle.style.left=e.clientX+'px');
            console.log(firstRectangle.style.top=e.clientY+'px');
            
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