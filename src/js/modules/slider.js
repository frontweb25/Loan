export default class Slider {
    constructor(page, btns, slides) {
        this.page = document.querySelector(page);
        this.slides = document.querySelectorAll(slides);
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

    showSlides(n) {
        if(n > this.slides.length) {
            this.slideIndex = 1;
        }
        if(n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.add('animated', 'fadeInDown');
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex); 
            });
        });
        this.showSlides(this.slideIndex); 
    }
}