const dividerImgElem = document.querySelector('#pattern-divider');
const dividerImagesPath = ['../images/pattern-divider-mobile.svg', '../images/pattern-divider-desktop.svg'];

window.addEventListener('resize', changePatternDivider);

function changePatternDivider() {
    if (window.innerWidth <= 524) {
        dividerImgElem.setAttribute('src', dividerImagesPath[0]);
    } else {
        dividerImgElem.setAttribute('src', dividerImagesPath[1]);
    }
}