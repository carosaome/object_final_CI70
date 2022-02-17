import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";
import RegisterPage from "../Register/index.js";
import changeScreen from "../../changscreen.js";

import { checkEmail, checkPassword, checkName, checkPhone } from "../../common/validator.js"
import { createNewAccout, loginWithEmailPass } from "../../firebase/auth.js";

class LoginPage {
    container;
    h1;
    formContainer
    email;
    passWord

    containerBtn
    btnRegister
    btnGo

    registerPage

    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('login-main')

        this.h1 = document.createElement('h1')
        this.h1.classList.add('register-header')
        this.h1.innerText = 'Đăng nhập'

        this.formContainer = document.createElement('form')
        this.formContainer.addEventListener('submit', this.handleSubmit)

        this.email = new InputComponent('ti-user',
            'register-email-V',
            'text', 'email',
            'login-input',
            'Email')


        this.passWord = new InputComponent('ti-lock',
            'register-passWord',
            'password', 'password',
            'login-input',
            'PassWord')

        this.registerPage = new RegisterPage()

        this.containerBtn = document.createElement('div')
        this.containerBtn.classList.add('login-forgetOrRegist')
        this.btnRegister = new ButtonComponent('', '', 'register-button-turnBack', 'Register', this.changeRegisterPage)
        this.btnGo = new ButtonComponent('submit', '', 'register-button-main','Login' )
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const { fullname, email, phone, password, rePassword } = e.target;


        let isError = false;
        if (checkEmail(email.value) !== null) {
            // loi
            this.email.setError(checkEmail(email.value));
            isError = true;
        } else {
            this.email.setError("");
        }

        if (checkPassword(password.value) !== null) {
            this.passWord.setError(checkPassword(password.value));
            isError = true;
        } else {
            this.passWord.setError("");
        }

        if(!isError){
            loginWithEmailPass(email.value, password.value)
            
        }
    }

    changeRegisterPage=()=>{
        changeScreen(this.registerPage)
    }

    render() {
        this.containerBtn.append(this.btnGo.render(), this.btnRegister.render())
        this.formContainer.append(
            this.email.render(),
            this.passWord.render(),
            this.containerBtn
        )

        this.container.append(this.h1, this.formContainer)
        return this.container
    }
}

export default LoginPage