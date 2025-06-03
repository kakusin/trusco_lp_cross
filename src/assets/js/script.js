const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

const inView = $$(".js-inview");
const getHeight = document.documentElement.clientHeight;


//スクロールしたら表示
window.addEventListener('load', () => {
    fadeUp();
    folatingShow();
});

window.addEventListener('scroll', () => {
    fadeUp();
    folatingShow();
});

const folatingShow = () => {
    const floatingBar = $(".floating");
    let getNow = window.pageYOffset;
    if (getHeight < getNow) {
        floatingBar.classList.add("show");
    } else {
        floatingBar.classList.remove("show");
    }
};

const fadeUp = () => {
    Object.keys(inView).forEach((i) => {
        let getNow = window.pageYOffset;
        const rect = inView[i].getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let elemPos = rect.top + scrollTop;

        if (getNow > elemPos - 0.9 * getHeight) {
            setInterval(function () {
                inView[i].classList.add("is-view");
            }, 300);
        }

    });

};

var setVw = function () {
    var e = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty("--vw", e + "px");
};
window.addEventListener("DOMContentLoaded", setVw),
window.addEventListener("resize", setVw);