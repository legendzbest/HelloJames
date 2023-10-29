const firstRectangle=document.getElementById("HelloJames!");
let offsetX,offsetY,Dragging=false;
const bodys=document.getElementById("bodys");
let Draggingitem;
let allNewRecnagle;
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
    newGreeting.className="greeting";
    newGreeting.id="HelloAgainJames!";
    newGreeting.textContent="Hello again, James!";
    bodys.appendChild(newGreeting);
    allNewRecnagle=document.querySelectorAll('[id="HelloAgainJames!"]');
    console.log(allNewRecnagle);
    //console.log(e.clientX,e.clientY);
    //console.log("HERE");
}
);
for (Rectangle in allNewRecnagle)
{
    Rectangle.addEventListener('mousedown',(e)=>{
    if(e.button==0)
    {
        Rectangle.style.position="absolute";
        Dragging=true;  
        offsetX=e.clientX-Rectangle.getBoundingClientRect().left;
        offsetY=e.clientY-Rectangle.getBoundingClientRect().top;
    }
    }
        )
    Rectangle.addEventListener('mousemove',(e)=>
{
    if(e.button==0)
    {   if(!Dragging)
        {
            return;
        }
    else
        {
            Rectangle.style.left=(e.clientX-offsetX)+'px';
            Rectangle.style.top=(e.clientY-offsetY)+'px';
            
        }
        //console.log(e);
    }
}

    )
    Rectangle.addEventListener('mouseup',(e)=>
{
    Dragging=false;
    Rectangle.id="new";
    Rectangle.style.display="none";
    allNewRecnagle=document.querySelectorAll('[id="HelloAgainJames!"]');
    console.log(allNewRecnagle);
    //console.log(e.clientX,e.clientY);
    //console.log("HERE");
}
)
};