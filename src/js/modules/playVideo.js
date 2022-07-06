export default class VideoPlayer {
    constructor(triger, overlay) {
        this.btns = document.querySelectorAll(triger);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }


    bindTrigers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                if(document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    const path = item.parentNode.getAttribute('data-url');

                    this.createPlayer(path);
                }


            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    

    createPlayer(url) {
        this.player =  new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
          });

          this.overlay.style.display = 'flex';
          
    }


    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTrigers();
        this.bindCloseBtn();
        

    }
}