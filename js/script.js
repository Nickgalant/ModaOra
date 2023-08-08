let sandwich = document.querySelector('.material-symbols-outlined');
let x = window.matchMedia("(min-width: 769px)");

function myFunction(x) {
    if(x.matches) {
        document.querySelector('.menu__nav').style.display = 'flex';
    }
}
x.addListener(myFunction);

sandwich.addEventListener("click", () => {
    if(document.querySelector('.menu__nav').style.display === 'none') {
        document.querySelector('.menu__nav').style.display = 'flex';
    } else {
        document.querySelector('.menu__nav').style.display = 'none';
    }
})