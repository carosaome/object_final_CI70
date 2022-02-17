import ButtonComponent from "../../components/button.js";
import InputComponent from "../../components/input.js";

import { checkEmail, checkPassword, checkName, checkPhone } from "../../common/validator.js"
import { getCurrentUser } from "../../firebase/auth.js";
import {createUser, getUserByEmail, updateUser} from "../../firebase/store.js"

class UserAcountPage
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
    btnTurnBack

    constructor() {
        

        this.container = document.createElement('div')
        this.container.classList.add('register-main')

        this.h1 = document.createElement('h1')
        this.h1.classList.add('register-header')
        this.h1.innerText = 'Your Ac'

        this.formContainer = document.createElement('form')
        this.formContainer.id = 'form-1'
        this.formContainer.addEventListener('submit', this.handleSubmit)
        this.fullName = new InputComponent('ti-user',
            'register-firstName',
            'text', 'fullname',
            'register-input',
            'FullName')

        const user = localStorage.getItem('emailLogined')
        
        console.log(getCurrentUser())

        this.inputEmail = new InputComponent('ti-email',
            'register-email-V',
            'text', 'email',
            'register-input',
            'Email')

        this.inputEmail.setAttribute('value', user)
        this.inputEmail.setAttribute('disabled', true)
        
        this.phone = new InputComponent('ti-headphone-alt',
            'register-phoneNumber',
            'text', 'phone',
            'register-input',
            'Phone')
        this.address = new InputComponent('ti-lock',
            'register-passWord',
            'text', 'address',
            'register-input',
            'Address')
      

        this.containerBtn = document.createElement('div')
        this.containerBtn.classList.add('register-button')
        this.btnGo = new ButtonComponent('', 'btn-register', 'register-button-main', 'Update')
        this.btnTurnBack = new ButtonComponent('', '', 'register-button-turnBack', 'Turn Back')
        this.fetchUserByEmail()
    }

    fetchUserByEmail= async()=>{
        const email = localStorage.getItem('emailLogined')
       
        const userStore = await   getUserByEmail(email)
        if (userStore) {
            this.userId = userStore.id;
      
            this.fullName.setAttribute("value", userStore.fullname);
            this.phone.setAttribute("value", userStore.phone);
            this.address.setAttribute("value", userStore.address);
      
          } else {
            this.userId = "";
          }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const user = localStorage.getItem('emailLogined')
        
        const { fullname, email, phone, address,  } = e.target;


        let isError = false;
        if (checkEmail(email.value) !== null) {
            // loi
            this.inputEmail.setError(checkEmail(email.value));
            isError = true;
        } else {
            this.inputEmail.setError("");
        }

        if (checkName(fullname.value) !== null) {
            this.fullName.setError(checkName(fullname.value));
            isError = true;
        } else {
            this.fullName.setError("");
        }

        if (checkPhone(phone.value) !== null) {
            this.phone.setError(checkPhone(phone.value));
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
            // createNewAccout(email.value, password.value)
            console.log(email.value, phone.value, address.value)

            // createUser(user, fullname.value, phone.value, address.value)
            // fullname.value = '';
            // phone.value=''
            // address.value=''
        }
        // updateUser(fullname.value,phone.value)
        if (this.userId) {
            await updateUser(
              this.userId,
              user,
              fullname.value,
              phone.value,
              address.value
            );
          } else {
             createUser(
              user,
              fullname.value,
              phone.value,
              address.value
            );
          }
    }

     
    render() {
        this.containerBtn.append(this.btnGo.render(), this.btnTurnBack.render())
        this.formContainer.append(this.fullName.render(),
            this.inputEmail.render(),
            this.phone.render(),
            this.address.render(),
            this.containerBtn
        )

        this.container.append(this.h1, this.formContainer)
        return this.container
    }


}

export default UserAcountPage
