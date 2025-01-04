let btn = document.querySelector(".add-btn");
let friends = document.querySelector(".friends-count");
let card = document.querySelector(".card");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    friends.textContent = "Friends";
    btn.innerHTML = "Remove Friend";
    card.style.background = "#bfe7bf";
    flag = 1;
  } else {
    friends.textContent = "Stranger";
    btn.innerHTML = "Add Friend";
    card.style.background = "#fff";
    flag = 0;
  }
});
