let diceImg = document.getElementById("dice_img");
let diceBtn = document.getElementById("dice_btn");

diceBtn.addEventListener("click", function () {
  let randomNumber = Math.ceil(Math.random() * 6);
  diceImg.src = "./img/" + randomNumber + ".png";
});
