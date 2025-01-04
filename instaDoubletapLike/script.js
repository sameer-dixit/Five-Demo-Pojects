let img = document.querySelector(".post-image");
let likeopt = document.querySelector(".like-btn");
let likebtn= document.querySelector('.ri-heart-line');
let middleheart= document.querySelector('.overlay-heart');
let flag=0;
console.log(likebtn);
img.addEventListener("dblclick",function(){
  if(flag==0){
    likebtn.classList.remove("ri-heart-line");
    likebtn.classList.add("ri-heart-fill");
    middleheart.style.transform='translate(-50%, -50%) scale(1)';
    setTimeout(function(){
      middleheart.style.transform='translate(-50%, -50%) scale(0)';
    },2000)
    flag=1;
  }else{
    likebtn.classList.remove("ri-heart-fill");
    likebtn.classList.add("ri-heart-line");
    middleheart.style.transform='translate(-50%, -50%) scale(0)';
    flag=0;
  }
});
let check=0;
likeopt.addEventListener("click",function(){
  if(check==0){
    likebtn.classList.remove("ri-heart-line");
    likebtn.classList.add("ri-heart-fill");
    check=1;
  }else{
    likebtn.classList.remove("ri-heart-fill");
    likebtn.classList.add("ri-heart-line");
    check=0;
  }
});