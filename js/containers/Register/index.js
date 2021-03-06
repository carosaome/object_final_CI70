import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";

import { checkEmail, checkPassword, checkName, checkPhone } from "../../common/validator.js"
import { createNewAccout } from "../../firebase/auth.js";

class RegisterPage {
    container;
    h1;

    formContainer;
    fullName;
    email;
    phone;
    passWord;
    confirnPassWord;
    containerBtn;
    btnGo
    btnTurnBack

    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('register-main')

        this.h1 = document.createElement('h1')
        this.h1.classList.add('register-header')
        this.h1.innerText = 'Tạo tài khoản'

        this.formContainer = document.createElement('form')
        this.formContainer.id = 'form-1'
        this.formContainer.addEventListener('submit', this.handleSubmit)
        this.fullName = new InputComponent('ti-user',
            'register-firstName',
            'text', 'fullname',
            'register-input',
            'FullName')

        this.email = new InputComponent('ti-email',
            'register-email-V',
            'text', 'email',
            'register-input',
            'Email')

        this.phone = new InputComponent('ti-headphone-alt',
            'register-phoneNumber',
            'text', 'phone',
            'register-input',
            'Phone')
        this.passWord = new InputComponent('ti-lock',
            'register-passWord',
            'password', 'password',
            'register-input',
            'PassWord')
        this.confirnPassWord = new InputComponent('ti-lock',
            'register-passWord',
            'password', 'rePassword',
            'register-input',
            'Confirn PassWord')

        this.containerBtn = document.createElement('div')
        this.containerBtn.classList.add('register-button')
        this.btnGo = new ButtonComponent('', 'btn-register', 'register-button-main', 'Register')
        this.btnTurnBack = new ButtonComponent('', '', 'register-button-turnBack', 'Turn Back')
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

        if (checkName(fullname.value) !== null) {
            this.fullName.setError(checkName(fullname.value));
            isError = true;
        } else {
            this.fullName.setError("");
        }

        if (checkPhone(phone.value) !== null) {
            this.phone.setError(checkPassword(phone.value));
            isError = true;
        } else {
            this.phone.setError("");
        }


        if (checkPassword(password.value) !== null) {
            this.passWord.setError(checkPassword(password.value));
            isError = true;
        } else {
            this.passWord.setError("");
        }

        if (checkPassword(rePassword.value) !== null) {
            this.confirnPassWord.setError(checkPassword(password.value));
            isError = true;
        } else if (password.value !== rePassword.value) {
            this.confirnPassWord.setError("Your re-password is not matching.");
            isError = true;
        } else {
            this.confirnPassWord.setError("");
        }



        if(!isError){
            createNewAccout(email.value, password.value)

            fullname.value = '';
            email.value=''
            phone.value=''
            password.value=''
            rePassword.value=''
        }
        // updateUser(fullname.value,phone.value)
    }

    render() {
        this.containerBtn.append(this.btnGo.render(), this.btnTurnBack.render())
        this.formContainer.append(this.fullName.render(),
            this.email.render(),
            this.phone.render(),
            this.passWord.render(),
            this.confirnPassWord.render(),
            this.containerBtn
        )

        this.container.append(this.h1, this.formContainer)
        return this.container
    }


}

export default RegisterPage