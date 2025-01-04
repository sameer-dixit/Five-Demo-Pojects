let main=document.querySelector('#main');
let crsr=document.querySelector('.cursor');

main.addEventListener("mousemove",function(ev){
  crsr.style.left=ev.x+"px";
  crsr.style.top=ev.y+"px";
});