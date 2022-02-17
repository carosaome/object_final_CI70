
import MainNav from "../../components/mainNav.js";
import ContainerProducts from "../../components/containerProducts.js";


class HomePage {
    container;

    nav;
    body;
   



    constructor() {

        this.container = document.createElement('div')


        this.nav = new MainNav()
        this.body = new ContainerProducts()



    }

    render() {
        this.container.append(this.nav.render(),
            this.body.render())

        return this.container
    }

  
}

export default HomePage

