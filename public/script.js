const firstRectangle=document.getElementById("HelloJames!");
let offsetX,offsetY,Dragging=false;
const bodys=document.getElementById("bodys");
let allNewRecnagle;
let dragelement=bodys
const x=0;  
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
addEventListener('mouseover',(e)=>
{
    dragelement=(e.srcElement);
    console.log(dragelement.id);
    if (typeof dragelement=="undefined")
    {
        dragelement=bodys;
        //console.log(bodys.id);
    }
    //console.log(dragelement.id);
})
dragelement.addEventListener('mousedown',(e)=>
{
    console.log(dragelement.id);
    if (dragelement.id=="HelloAgainJames!")
    {
        if(e.button==0)
    {
        console.log("MASHALLA");
        dragelement.style.position="absolute";
        Dragging=true;  
        offsetX=e.clientX-dragelement.getBoundingClientRect().left;
        offsetY=e.clientY-dragelement.getBoundingClientRect().top;
    }
    }
});
dragelement.addEventListener('mousemove',(e)=>
{
    if(dragelement.id=="helloAgainJames!")
    {
    if(e.button==0)
    {   if(!Dragging)
        {
            return;
        }
    else
        {
            dragelement.style.left=(e.clientX-offsetX)+'px';
            dragelement.style.top=(e.clientY-offsetY)+'px';
            
        }
        //console.log(e);
    }
}
});
dragelement.addEventListener('mouseup',(e)=>
{
    if(dragelement.id=="helloAgainJames!")
    {
        if(e.button==0)
        {
            Dragging=false;
            dragelement.id="novus";
            dragelement.style.display="none";
        }
    }
}
);