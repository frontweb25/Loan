import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";


window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next', '.slider-1');
    slider.render();
    
    const player = new VideoPlayer('.showup .play__circle', '.overlay');
    player.init();
});