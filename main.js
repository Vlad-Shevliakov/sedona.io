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


// :)
let text = 'Привет'
let consoleStyle = [
    'color: #00e600',
    'font-size: 40px',
    'text-decoration: underline',
    'padding: 10px',
    'border: 2px solid #ff1a1a',
    'font-weight: 900',
]
console.log(`%c${text}`, consoleStyle.join(';'))
