var left=document.querySelector("#zhuti .left .left1");
var left1=document.querySelector("#zhuti .right .right-1");
var left3=document.querySelector("#zhuti .left .left2");
var left4=document.querySelector("#zhuti .right .right-2");
var left5=document.querySelector("#zhuti .left .left3");
var left6=document.querySelector("#zhuti .right .right-3");
var a=document.querySelector("#header .b a");
var div=document.querySelector("#nav .xia");
var left7=document.querySelector("#zhuti .right .right-4");
 left.onmouseover=function(){
 	left1.style.display="block";
 	left4.style.display="none";
 	left6.style.display="none";
 }
 left1.onmouseleave =function(){
 left1.style.display="none";
 }


 

 left3.onmouseover=function(){
 	left4.style.display="block";
 	left1.style.display="none";
 	left6.style.display="none";
 	
 }
 left4.onmouseleave=function(){
 	left4.style.display="none";s
 	
 }
 left5.onmouseover=function(){
 	left1.style.display="none";
 	left6.style.display="block";
 	left4.style.display="none";
 }
 left6.onmouseleave =function(){
 	left6.style.display="none";
 	
 }
 a.onmouseover=function(){
 	div.style.display="block";
 	
 }
 a.onmouseout=function(){
 	div.style.display="none";
 }