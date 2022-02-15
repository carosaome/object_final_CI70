import LeftMainNav from "./leftMainNav.js";
import RightMainNav from "./rightMainNav.js";

class MainNav {
    container;
    leftNav;
    rightNav;
    subRightNav
    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('sidebar-main','row')
        this.subRightNav = document.createElement('div')
        this.subRightNav.classList.add('right-sidebar-main', 'img')
        this.subRightNav.innerHTML =`
        <img src="assets/images/solid1.jpg" alt="">
        <img src="assets/images/solid2.jpg" alt="">
        <img src="assets/images/solid3.jpg" alt="">
    `

        this.leftNav = new LeftMainNav()
        this.rightNav = new RightMainNav()
    }

    render(){
        this.container.append(this.leftNav.render(), this.rightNav.render(), this.subRightNav)

        return this.container
    }
}

export default MainNav