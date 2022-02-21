import HomePage from "./containers/Main/index.js"


import Header from "./components/header.js"
import Footer from "./components/footer.js"
import Ads from "./components/ads.js"
import RegisterPage from "./containers/Register/index.js"
import MessageUserPage from "./containers/UserAcount/message.js"

const header = new Header()
const footer = new Footer()
const ads = new Ads()
const body = new HomePage()
const message = new MessageUserPage()

const containerHeader = document.getElementById('header')
const containerAds = document.getElementById('ads')
const containerFooter = document.getElementById('footer')
const messageUser = document.getElementById('messageUser')

containerHeader.append(header.render())
containerAds.append(ads.render())
containerFooter.append(footer.render())
messageUser.append(message.render())


function changeScreen(screeen){

    if(screeen){
        containerBody.innerHTML = ''
        containerBody.append(screeen.render())
    }
}



class MainPage{
    body;
    containerBody;

    constructor(){
        this.body = new HomePage()
        
        this.containerBody = document.getElementById('body')
        
    }

    render(){
        this.containerBody.append(this.body.render())
        return this.containerBody
    }

   
}

const app = new MainPage()
app.render()

export default MainPage