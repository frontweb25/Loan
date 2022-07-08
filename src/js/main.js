import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mimi";
import VideoPlayer from "./modules/playVideo";
import Differens from './modules/differens';


window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next', slides: '.slider-1'});
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        slides: '.card'
    });

    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: 'modules__info-btns .slick-next',
        prev: 'modules__info-btns .slick-prev',
        slides: '.card'
    });

    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        slides: '.card'
    });

    feedSlider.init();
    
    const player = new VideoPlayer('.showup .play__circle', '.overlay');
    player.init();

    new Differens('.officerold', '.officernew', '.officer__card-item').init();
});