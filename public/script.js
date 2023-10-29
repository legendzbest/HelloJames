const firstRectangle=document.getElementById("HelloJames!");
let offsetX,offsetY,Dragging=false;
const body=document.getElementById("body");
firstRectangle.addEventListener('mousedown',(e)=>
{
    if(e.button==0)
    {
        firstRectangle.style.position="absolute";
        Dragging=true;  
        offsetX=e.clientX-firstRectangle.getBoundingClientRect().left;
        offsetY=e.clientY-firstRectangle.getBoundingClientRect().top;
    }
}
);
firstRectangle.addEventListener('mousemove',(e)=>
{
    if(e.button==0)
    {   if(!Dragging)
        {
            return;
        }
    else
        {
            firstRectangle.style.left=(e.clientX-offsetX)+'px';
            firstRectangle.style.top=(e.clientY-offsetY)+'px';
            
        }
        //console.log(e);
    }
}
);
firstRectangle.addEventListener('mouseup',(e)=>
{
    Dragging=false;
    let newGreeting= document.createElement('div');
    newGreeting.class="greeting";
    newcontent.id="HelloAgainJames!";
    newGreeting.appendchild(body);
    //console.log(e.clientX,e.clientY);
}
);