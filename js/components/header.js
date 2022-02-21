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

        this.container = document.createElement('div');
        this.container.classList.add('header-main', 'row')
        this.bgrImg = document.createElement('img')
        this.bgrImg.src = '../../assets/images/bn-top4.webp'
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
        this.discount = new SubButton('ti-arrow-right', 'Discount')
        this.numProductCart = new CartPage()
        this.numProductCart.getProducts()

        this.cartBtn = new SubButton('ti-shopping-cart', 'Cart', this.changCartPage ,'2')
        // this.cartBtn = new IconCart(this.changCartPage)


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

        this.headerMainNav = document.createElement('div')
        this.headerMainNav.classList.add('header-main-nav')
        this.headerMainNav.innerHTML = ` <span class="list-of-products"> <i class="ti-menu-alt"></i> Danh mục sản phẩm</span>
        <a class="test" href=" https://gearvn.com/pages/gvn-thong-bao"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk1s.png?v=22306" alt=""> Thông tin
            mùa dịch </a>
        <a href="https://gearvn.com/pages/huong-dan-thanh-toan-gearvn"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk3s.png?v=22306" alt=""> Hướng dẫn
            thanh toán </a>
        <a href="https://gearvn.com/pages/huong-dan-tra-gop"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk3s.png?v=22306" alt=""> hướng dẫn
            trả góp </a>
        <a href="https://gearvn.com/pages/chinh-sach-bao-hanh"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk4s.png?v=22306" alt=""> Chính sách
            bảo hành </a>
        <a href="https://gearvn.com/pages/chinh-sach-giao-hang"> <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/xk5s.png?v=22306" alt=""> Chính sách
            vận chuyển </a>
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
        changeScreen(this.cartPage)
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
                this.loginBtn = new SubButton('ti-user', 'Log Out', this.Logout)

            }
            else {

                this.registerBtn = new SubButton('ti-check', email, this.changeAcountUserPage)
                this.loginBtn = new SubButton('ti-user', 'Log Out', this.Logout)
            }


        }
        else {

            this.registerBtn = new SubButton('ti-check', 'Register', this.changeRegisterPage)
            this.loginBtn = new SubButton('ti-user', 'Login', this.changeLoginPage)
        }

    }

    render() {
        this.headerNav.append(this.registerBtn.render(), this.loginBtn.render(), this.discount.render(), this.cartBtn.render())
        this.leftMain.append(this.imgLeftMain)
        this.rightMain.append(this.search.render(), this.headerNav, this.headerAbout)
        this.main.append(this.leftMain, this.rightMain)
        this.container.append(this.bgrImg, this.main, this.headerMainNav)

        return this.container
    }

}

export default Header