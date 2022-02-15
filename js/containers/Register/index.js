// import Header from "../../components/header.js";
// import Footer from "../../components/footer.js";
class RegisterPage{
    container;
    body;
    header;
    footer;
    h1;
    formContainer;

    constructor(){
        this.container = document.createElement('div')

        this.body = document.createElement('div')
        this.body.classList.add('register-main')
        this.body.innerHTML = `<h1 class="register-header">Tạo tài khoản</h1>
        <form id="form-1" action="">
            
            <div class="register-firstName">
                <span class="register-icon">
                    <i class="ti-user"></i>
                </span>
                <input type="text" id="fullname" class="register-input" placeholder="Ho va Tên">
                <span class="form-message"></span>
            </div>
            <div class="register-email-V">
                <span class="register-icon">
                    <i class="ti-email"></i>
                </span>
                <input type="text" type="email" id="email"  class="register-input" placeholder="email">
                <span class="form-message"></span>
                
            </div>
            <div class="register-phoneNumber">
                <span class="register-icon">
                    <i class="ti-headphone-alt"></i>
                </span>
                <input type="number" id="phone-number" class="register-input" placeholder="phone">
                <span class="form-message"></span>
           
            </div>
            <div class="register-passWord">
                <span class="register-icon">
                    <i class="ti-lock"></i>
                </span>
                <input  type="password" id="password"  class="register-input" placeholder="Mật khẩu">
                <span class="form-message"></span>
            
            </div>
            <div class="register-passWord">
                <span class="register-icon">
                    <i class="ti-lock"></i>
                </span>
                <input  type="password" id="password-confirm" class="register-input" placeholder="Nhap lai Mật khẩu">
                <span class="form-message"></span>
          
            </div>
            <div class="register-button">
                <button id="btn-register" class="register-button-main" type="submit">Đăng ký</button>
                <a href="login.html" class="register-button-turnBack">Quay về</a>
            </div>
        </form>`
        // this.header = new Header()
        // this.footer = new Footer()

    }


    render(){

        this.container.append(this.body)
        return this.container
    }


}

export default RegisterPage