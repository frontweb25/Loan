export default class Slider {
    constructor({container = null, btns = null, slides = null, next = null, prev = null} = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.querySelectorAll(slides);
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slideIndex = 1;
    }
}