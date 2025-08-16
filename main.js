const menuLinks = document.querySelectorAll(".header-menu");
const hideTimeouts = {};

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const text = this.querySelector(".hidden-text");
    document.querySelectorAll(".hidden-text.active").forEach((activeText) => {
      if (activeText !== text) {
        activeText.classList.remove("active");
        if (hideTimeouts[activeText.id]) {
          clearTimeout(hideTimeouts[activeText.id]);
        }
      }
    });
    text.classList.toggle("active");
    if (hideTimeouts[text.id]) {
      clearTimeout(hideTimeouts[text.id]);
    }
    if (text.classList.contains("active")) {
      hideTimeouts[text.id] = setTimeout(() => {
        text.classList.remove("active");
      }, 3000);
    }
    if (this.classList.contains("with-arrow")) {
      this.classList.toggle("active");
    }
  });
});
//Кнопка hero_btn
const heroBtnNode = document.querySelector('.hero__btn');
const hiddenHeroNode = document.querySelector('.hidden_hero_btn')

heroBtnNode.addEventListener('click', () =>{
 hiddenHeroNode.classList.add('active')
 setTimeout(() => {
  hiddenHeroNode.classList.remove('active')
 }, 3000);
})

//play
const  playNode =  document.querySelector('.play')
const hiddenImgNode = document.querySelector('.hidden_image_text')

playNode.addEventListener('click', () =>{
  hiddenImgNode.classList.add('active')
  setTimeout(() => {
    hiddenImgNode.classList.remove('active')
  }, 3000);
})


