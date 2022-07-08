import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, slides) {
        super(container, next, prev, slides);
        this.offset = 0;
    }

    bindTriger() {
        
    }


    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-srart;
        `;
        
        
        this.bindTriger();
    }
}