let stpbl1=document.getElementById("stepblock1");
let stpb1=document.getElementById("stepbrdr1");

let stpbl2=document.getElementById("stepblock2");
let stpb2=document.getElementById("stepbrdr2");

let stpbl3=document.getElementById("stepblock3");
let stpb3=document.getElementById("stepbrdr3");


stpbl1.onmouseover=function(){
	stpb1.style.borderBottom = "3px solid white";
}
stpbl1.onmouseout = function(){
	stpb1.style.borderBottom = "3px solid black";
}
stpbl2.onmouseover=function(){
	stpb2.style.borderBottom = "3px solid white";
}
stpbl2.onmouseout = function(){
	stpb2.style.borderBottom = "3px solid black";
}
stpbl3.onmouseover=function(){
	stpb3.style.borderBottom = "3px solid white";
}
stpbl3.onmouseout = function(){
	stpb3.style.borderBottom = "3px solid black";
}