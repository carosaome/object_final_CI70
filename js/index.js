import HomePage from "./containers/Main/index.js"
import RegisterPage from "./containers/Register/index.js"


const c1 = new HomePage()
 const c2 = new RegisterPage()


const app = document.getElementById('main')


app.appendChild(c1.render())


function changeScreen(screeen){

    if(screeen){
        app.innerHTML = ''
        app.append(screeen.render())
    }
}

export default changeScreen
