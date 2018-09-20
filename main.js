let btnShow = document.querySelector(".logo-block__button--show");
let btnHide = document.querySelector(".main-navigation__button--hide");
let hiddenItem = document.querySelectorAll(".site-navigation__item");
let hiddenItemLength = hiddenItem.length;
    btnShow.addEventListener("click", function() {
        btnShow.classList.add("js-hide-btn");
        for (let k = 0; k <= 3; k++) {
            hiddenItem[k].classList.remove("hide-elem");
        }
    });
    btnHide.addEventListener("click", function() {
        btnShow.classList.remove("js-hide-btn");
        for (let k = 0; k <= 3; k++) {
            hiddenItem[k].classList.add("hide-elem");
        }
    });

//for (let k = 0; k <= hideElem.length; k++) - такой вариант вызвал Uncaught TypeError: Cannot read property 'classList' of undefined
                                                                    // at HTMLButtonElement.<anonymous>

