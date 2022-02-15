import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import Ads from "../../components/ads.js";
import MainNav from "../../components/mainNav.js";
import ContainerProducts from "../../components/containerProducts.js";

import RegisterPage from "../Register/index.js";

class HomePage {
    container;

    ads;
    header;
    nav;
    body;
    footer;

    

    constructor(){

        this.container = document.createElement('div')
        this.container.classList.add('main')

        this.ads = new Ads()
        this.header = new Header()
        this.nav = new MainNav()
        this.body = new ContainerProducts()
        this.footer = new Footer()


    }

    render(){
        this.container.append(this.header.render(), this.ads.render(), this.nav.render(), this.body.render(), this.footer.render())

        return this.container
    }

    changeScreen(screeen){
        this.container.remove()
        this.body = screeen
        this.container.append(this.header.render(), this.ads.render(), this.nav.render(), this.body.render(), this.footer.render())
    }
}

export default HomePage

