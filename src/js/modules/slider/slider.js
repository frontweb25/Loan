export default class Slider {
    constructor({page = '', btns = '', slides = '', next = '', prev = ''} = {}) {
        this.page = document.querySelector(page);
        this.slides = document.querySelectorAll(slides);
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

   
}