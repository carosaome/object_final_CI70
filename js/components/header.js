import Search from "./search.js";
import SubButton from "./subButton.js";
import RegisterPage from "../containers/Register/index.js";

import HomePage from "../containers/Main/index.js";
class Header {
    container;
    bgrImg;
    main;
    leftMain;
    imgLeftMain;

    rightMain;
    search;
    headerMainNav;
    headerAbout;
    headerSubNav;


    headerNav;
    registerBtn;
    loginBtn;
    discount;

    
    registerPage;
    loginPage;
    
    
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('header-main','row')
        this.bgrImg = document.createElement('img')
        this.bgrImg.src = '../../assets/images/bn-top4.webp'
        this.main = document.createElement('div')
        this.main.classList.add('header-content')
        
        this.leftMain = document.createElement('div')
        this.leftMain.classList.add('header-left-content')
        this.imgLeftMain = document.createElement('a')
        this.imgLeftMain.innerHTML = `  <img width="170px" height="72px" src="../../assets/images/logo.svg" alt="">`
        this.imgLeftMain.style.width = "170px";
        this.imgLeftMain.style.height = "72px";

        this.rightMain =  document.createElement('div');
        this.rightMain.classList.add('header-right-content')
        this.search = new Search ()

        
        this.registerPage = new RegisterPage()
        this.HomePage = new HomePage()
        
        this.headerNav = document.createElement('div')
        this.headerNav.classList.add('header-nav')
        this.registerBtn = new SubButton('ti-check', 'Register', )
        this.loginBtn = new SubButton('ti-user','Login')
        this.discount = new SubButton('ti-arrow-right', 'Discount')

        

        this.headerAbout = document.createElement('ul')
        this.headerAbout.classList.add('header-about')
        this.headerAbout.innerHTML = `
        
        <li> <a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/hotcall.svg?v=22306"
        alt=""> <span>Tổng Đài</span> </a></li>
<li> <a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=22306"
        alt=""> <span>Tin Công Nghệ</span> </a></li>
<li><a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=22306"
        alt=""> <span>Tuyển Dụng</span> </a></li>
<li><a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=22306"
        alt=""> <span>Video</span> </a></li>
<li><a style="border: none;" href="#">Mời Bạn Trải Nghiệm Giao Diện Mới</a></li>
        `

    }



    



    render() {
        this.headerNav.append(this.registerBtn.render(), this.loginBtn.render(), this.discount.render())
        this.leftMain.append(this.imgLeftMain)
        this.rightMain.append(this.search.render(), this.headerNav, this.headerAbout)
        this.main.append(this.leftMain, this.rightMain)
        this.container.append(this.bgrImg, this.main)

        return this.container
    }
    
}

export default Header