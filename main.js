const hiddenNoode = document.querySelector(".hidden-text");
let hideTimeout;
const buttonNode = document.getElementById("test-js");

buttonNode.addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.querySelector(".hidden-text");
  text.classList.toggle("active");
  if (hideTimeOout) clearTimeout(hideTimeOout);
  hiddenNoode.classList.add("active");
  hideTimeOout = setTimeout(() => {
    hiddenNoode.classList.remove("active");
  }, 3000);
});
