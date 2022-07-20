var changeBlock = document.querySelectorAll(".navigation");
changeBlock.forEach((block) => {
  block.onclick = function () {
    var hasChange = document.querySelector(".navigation.changeBack");
    console.log(hasChange);
    hasChange.classList.remove("changeBack");
    block.classList.add("changeBack");
  };
});
