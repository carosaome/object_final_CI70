import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";

import { checkEmail, checkNumber, checkName, checkPhone } from "../../common/validator.js"
import { getCurrentUser } from "../../firebase/auth.js";
import {createProduct} from "../../firebase/store.js"

class AdminPage

 {
    container;
    h1;
    userId;

    formContainer;
    fullName;
    inputEmail;
    phone;
    address;
    confirnPassWord;
    containerBtn;
    btnGo
    

    constructor() {
        

        this.container = document.createElement('div')
        this.container.classList.add('register-main')

        this.h1 = document.createElement('h1')
        this.h1.classList.add('register-header')
        this.h1.innerText = 'Tạo sản phẩm'

        this.formContainer = document.createElement('form')
        this.formContainer.id = 'form-1'
        this.formContainer.addEventListener('submit', this.handleSubmit)
        this.fullName = new InputComponent('ti-user',
            'register-firstName',
            'text', 'fullname',
            'register-input',
            'Tên')

        
        console.log(getCurrentUser())

    
        this.phone = new InputComponent('ti-headphone-alt',
            'register-phoneNumber',
            'text', 'phone',
            'register-input',
            'Giá thành')
        this.address = new InputComponent('ti-lock',
            'register-passWord',
            'text', 'address',
            'register-input',
            'Hình ảnh')
      

        this.containerBtn = document.createElement('div')
        this.containerBtn.classList.add('register-button')
        this.btnGo = new ButtonComponent('', 'btn-register', 'register-button-main', 'Tạo sản phẩm')
    }

  

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = localStorage.getItem('emailLogined')
        
        const { fullname, phone, address,  } = e.target;


        let isError = false;
       

        if (checkName(fullname.value) !== null) {
            this.fullName.setError(checkName(fullname.value));
            isError = true;
        } else {
            this.fullName.setError("");
        }

        if (checkNumber(phone.value) !== null) {
            this.phone.setError(checkNumber(phone.value));
            isError = true;
        } else {
            this.phone.setError("");
        }


        if (checkName(address.value) !== null) {
            this.address.setError(checkName(address.value));
            isError = true;
        } else {
            this.address.setError("");
        }

 

        if(!isError){
            createProduct(fullname.value, phone.value, address.value)
            // createUser(user, fullname.value, phone.value, address.value)
            fullname.value = '';
            phone.value=''
            address.value=''
        }
        // updateUser(fullname.value,phone.value)
       
    }

     
    render() {
        this.containerBtn.append(this.btnGo.render())
        this.formContainer.append(this.fullName.render(),
            this.phone.render(),
            this.address.render(),
            this.containerBtn
        )

        this.container.append(this.h1, this.formContainer)
        return this.container
    }


}

export default AdminPage

