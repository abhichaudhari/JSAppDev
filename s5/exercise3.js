let slideShow = {
    slides: [
        "Bobby",
        "Pam",
        "Frank",
        "Suzie"
    ],
    currentSlideIndex: 0,
    currentSlide: function () {
        return this.slides[this.currentSlideIndex]
    },
    nextSlide: function () {
        let nextIndex = this.currentSlideIndex + 1
        if (nextIndex > this.slides.length) {
            return "End of slide show"
        }
        this.currentSlideIndex = nextIndex
        return this.currentSlide()
    },
    previousSlide: function () {
        let nextIndex = this.currentSlideIndex - 1
        if (nextIndex < 0) {
            return "Beginning of slide show"
        }
        this.currentSlideIndex = nextIndex
        return this.currentSlide()
    },

    playInterval: null,

    play : function (){
        this.playInterval = setInterval(this.nextSlide, 2000)
    },

    pause : function() {
        clearInterval(this.playInterval);
    }
}

console.log(slideShow.currentSlide())
console.log(slideShow.nextSlide())
console.log(slideShow.previousSlide())
console.log(slideShow.play());
setTimeout(slideShow.pause(), 6000);