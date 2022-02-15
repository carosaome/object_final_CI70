class RightMainNav {
   
    rightMainNav;

    constructor() {
        this.container = document.createElement('div')


        this.rightMainNav = document.createElement('div')
        this.rightMainNav.classList.add('left-sidebar-main')
        this.rightMainNav.innerHTML = `<div class="show-slider">

        <div class="owl-carousel owl-theme">
            <div class="item"><img src="assets/images/slideshow_11.jpg" alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_2.jpg?v=22378"
                    alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_15.jpg?v=22378"
                    alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_5.jpg?v=22378"
                    alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_6.jpg?v=22378"
                    alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_7.jpg?v=22378"
                    alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_8.jpg?v=22378  "
                    alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=22378"
                    alt="">></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_10.jpg?v=22378"
                    alt=""></div>
            <div class="item"><img
                    src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_11.jpg?v=22378"
                    alt=""></div>
        </div>


    </div>
    <div class="under-show-sidebar">
        <div class="img">
            <img src="assets/images/solid4.jpg" alt="">
        </div>
        <div class="img">
            <img src="/assets/images/solid5.jpg" alt="">
        </div>
    </div>`
    }

    render(){


        return this.rightMainNav
    }
}

export default RightMainNav