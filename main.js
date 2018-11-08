let btnShow = document.querySelector(".logo-block__button--show");
let btnHide = document.querySelector(".main-navigation__button--hide");
let hiddenItem = document.querySelectorAll(".site-navigation__item");
let hiddenItemLength = hiddenItem.length;
    btnShow.addEventListener("click", function() {
        btnShow.classList.add("js-hide-btn");
        for (let item of hiddenItem) {
            item.classList.remove("hide-elem");
        }
    });
    btnHide.addEventListener("click", function() {
        btnShow.classList.remove("js-hide-btn");
        for (let item of hiddenItem) {
            item.classList.add("hide-elem");
        }
    });