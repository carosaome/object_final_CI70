import Search from "./search.js";
import SubButton from "./subButton.js";
import RegisterPage from "../containers/Register/index.js";
import LoginPage from "../containers/Login/index.js";
// import MainPage from "../index.js";
import HomePage from "../containers/Main/index.js";
import changeScreen from "../changscreen.js";
import UserAcountPage from "../containers/UserAcount/index.js";
import AdminPage from "../containers/admin/index.js";
import CartPage from "../containers/cart/index.js";
import IconCart from "./iconCart.js";
import db from "../firebase/index.js";

import * as _noti from "../common/notify.js"
class Header {
    container;
    bgrImg;
    containerHeader;

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
    cartBtn;

    registerPage;
    loginPage;
    accountUserPage;
    cartPage;
    numProductCart;

    app;
    home;


    constructor() {
        this.changeActiveLogin()
        // this.test()

        this.app = document.getElementById('body')
        this.home = new HomePage()
        
        this.containerHeader = document.createElement('div');
        this.containerHeader.classList.add('container-header')

        this.container = document.createElement('div');
        this.container.classList.add('header-main', 'row')
        this.bgrImg = document.createElement('img')
        this.bgrImg.src = '../../assets/images/bn-top4.webp'
        this.bgrImg.style.width = "100%"
        this.main = document.createElement('div')
        this.main.classList.add('header-content')

        this.leftMain = document.createElement('div')
        this.leftMain.addEventListener('click', this.changHomePage)
        this.leftMain.classList.add('header-left-content')
        this.leftMain.style.cursor = 'pointer'
        this.imgLeftMain = document.createElement('a')
        this.imgLeftMain.innerHTML = `  <img width="170px" height="72px" src="../../assets/images/logo.svg" alt="">`
        this.imgLeftMain.style.width = "170px";
        this.imgLeftMain.style.height = "72px";

        this.rightMain = document.createElement('div');
        this.rightMain.classList.add('header-right-content')
        this.search = new Search()


        this.registerPage = new RegisterPage()
        this.loginPage = new LoginPage()
        this.HomePage = new HomePage()
        this.accountUserPage = new UserAcountPage()
        this.adminPage = new AdminPage()
        this.cartPage = new CartPage()

        this.headerNav = document.createElement('div')
        this.headerNav.classList.add('header-nav')
        // this.registerBtn = new SubButton('ti-check', 'Register', this.changeRegisterPage)
        // this.loginBtn = new SubButton('ti-user', 'Login', this.changeLoginPage)
        this.discount = new SubButton('ti-arrow-right', 'Khuy???n M??i')
        this.numProductCart = new CartPage()
        this.numProductCart.getProducts()

        this.cartBtn = new SubButton('ti-shopping-cart', 'Gi??? H??ng', this.changCartPage ,'2')
        // this.cartBtn = new IconCart(this.changCartPage)


        this.headerAbout = document.createElement('ul')
        this.headerAbout.classList.add('header-about')
        this.headerAbout.innerHTML = `
        
        <li> <a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/hotcall.svg?v=22306"
        alt=""> <span>T???ng ????i</span> </a></li>
<li> <a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/gNewsFavIco.png?v=22306"
        alt=""> <span>Tin C??ng Ngh???</span> </a></li>
<li><a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/logo_hr.png?v=22306"
        alt=""> <span>Tuy???n D???ng</span> </a></li>
<li><a href="#"> <img
        src="https://theme.hstatic.net/1000026716/1000440777/14/youtube.png?v=22306"
        alt=""> <span>Video</span> </a></li>
<li><a style="border: none;" href="#">M???i B???n Tr???i Nghi???m Giao Di???n M???i</a></li>
        `

        this.headerMainNav = document.createElement('div')
        this.headerMainNav.classList.add('header-main-nav')
        this.headerMainNav.innerHTML = ` <span class="list-of-products"> <i class="ti-menu-alt"></i> Danh m???c s???n ph???m</span>
        <a class="test" href=" https://gearvn.com/pages/gvn-thong-bao"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk1s.png?v=22306" alt=""> Th??ng tin
            m??a d???ch </a>
        <a href="https://gearvn.com/pages/huong-dan-thanh-toan-gearvn"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk3s.png?v=22306" alt=""> H?????ng d???n
            thanh to??n </a>
        <a href="https://gearvn.com/pages/huong-dan-tra-gop"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk3s.png?v=22306" alt=""> h?????ng d???n
            tr??? g??p </a>
        <a href="https://gearvn.com/pages/chinh-sach-bao-hanh"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk4s.png?v=22306" alt=""> Ch??nh s??ch
            b???o h??nh </a>
        <a href="https://gearvn.com/pages/chinh-sach-giao-hang"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk5s.png?v=22306" alt=""> Ch??nh s??ch
            v???n chuy???n </a>
`
    }
    changHomePage = () => {
        window.location = 'http://127.0.0.1:5501/index.html';
    }

    changeRegisterPage = () => {
        changeScreen(this.registerPage)
    }

    changeAcountUserPage = () => {
        changeScreen(this.accountUserPage)
    }

    changeLoginPage = () => {
        changeScreen(this.loginPage)
    }
    changAdPage = () => {
        changeScreen(this.adminPage)
    }
    changCartPage = () => {
        const check = localStorage.getItem('emailLogined')
        if(check){
            changeScreen(this.cartPage)
        }
        else{
            _noti.error('OPPS', "Vui L??ng ????ng Nh???p ????? Th???c Hi???n Ch???c N??ng N??y!!!")
        }
    }
    Logout = () => {
        localStorage.removeItem('emailLogined')
        localStorage.removeItem('idCart')
        this.changHomePage()
    }



    changeActiveLogin() {
        let email = localStorage.getItem('emailLogined')
        if (email) {
            if (email == 'sieunhankiet@gmail.com') {
                this.registerBtn = new SubButton('ti-check', 'ADMIN', this.changAdPage)
                this.loginBtn = new SubButton('ti-user', '????ng Xu???t', this.Logout)

            }
            else {

                this.registerBtn = new SubButton('ti-check', email, this.changeAcountUserPage)
                this.loginBtn = new SubButton('ti-user', '????ng Xu???t', this.Logout)
            }


        }
        else {

            this.registerBtn = new SubButton('ti-check', 'Register', this.changeRegisterPage)
            this.loginBtn = new SubButton('ti-user', '????ng Nh???p', this.changeLoginPage)
        }

    }

    render() {
        this.headerNav.append(this.registerBtn.render(), this.loginBtn.render(), this.discount.render(), this.cartBtn.render())
        this.leftMain.append(this.imgLeftMain)
        this.rightMain.append(this.search.render(), this.headerNav, this.headerAbout)
        this.main.append(this.leftMain, this.rightMain)
        this.containerHeader.append(this.main, this.headerMainNav)
        this.container.append(this.bgrImg, this.containerHeader)

        return this.container
    }

}

export default Header