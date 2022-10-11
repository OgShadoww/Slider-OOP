class Slider {
    constructor (selector, options) {
        this.slider = document.querySelector(selector)
        this.next = this.slider.querySelector('#next')
        this.prev = this.slider.querySelector('#prev')
        this.event()
        this.show()
    }

    event() {
        if(this.slider) {
            this.slider.addEventListener('click', (e) => {
                if(e.target === this.next) {
                    this.nextEl()
                }  
                if(e.target === this.prev) {
                    this.prevEl()
                }
            })
        }
    }
    nextEl() {
        let slides = this.slider.querySelectorAll('.slider__body__item')
        let currentEl = 0;

        for(let i = 0; i < slides.length; i++) {
            if(slides[i].classList.contains('active')) {
                currentEl = i
            }
        }

            let nextSlide = currentEl + 1;
                if(nextSlide === slides.length) {
                    nextSlide = 0
                }
            slides[currentEl].classList.remove('active')
            slides[nextSlide].classList.add('active')
    }

    prevEl() {
        let slides = this.slider.querySelectorAll('.slider__body__item')
        let currentEl = 0;

        for(let i = 0; i < slides.length; i++) {
            if(slides[i].classList.contains('active')) {
                currentEl = i
            }
        }

        let prevSlide = currentEl - 1;
        if(currentEl === 0) {
            prevSlide = slides.length - 1
        }

        slides[currentEl].classList.remove('active')
        slides[prevSlide].classList.add('active')
    }

    show() {
        this.slider.querySelector('.slider__body__item').classList.add('active')
    }
}
