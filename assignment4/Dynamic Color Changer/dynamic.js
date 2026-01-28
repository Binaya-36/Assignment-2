const bgcolor=document.getElementById("bgcolor");
const color=document.getElementById("randomcolor");
const btn= document.getElementById("btn");
const defautbg="lightgray";

color.addEventListener("input",function(){
    bgcolor.style.backgroundColor=color.value;
});
btn.addEventListener("click",function()
{
    bgcolor.style.backgroundColor=defautbg;
});