smartcanvas=document.getElementById("smart");
poolpen=smartcanvas.getContext("2d");
color="white";




mousex="";
mousey="";
smartcanvas.addEventListener("mousedown",Lolmousedown);
function Lolmousedown(e){
    color=document.getElementById("color").value;
mousex=e.clientX-smartcanvas.offsetLeft;
mousey=e.clientY-smartcanvas.offsetTop;
poolpen.beginPath();
poolpen.strokeStyle=color;
poolpen.lineWidth=2;
poolpen.arc(mousex,mousey,40,0,2*Math.PI);
poolpen.stroke();
}
function clear(){
    poolpenRect(0,0,smartcanvas.width,smartcanvas.height);
    
}
