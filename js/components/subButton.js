import db from "../firebase/index.js";

class SubButton {


    container;
    icon;
    text;
    app;

    numProduct;

    constructor(icon, text, cb, num) {
        this.getProducts()
        this.app = document.getElementById('body')
        this.container = document.createElement('a')
        this.container.style.cursor = 'pointer'
        if (cb) {
            this.container.addEventListener('click', cb)
        }
        this.icon = document.createElement('i')
        this.icon.classList.add(icon)
        this.text = document.createElement('span')
        this.text.innerText = text

        if (num) {
            this.container.style.position = 'relative'
            this.numProduct = document.createElement('div')
            this.numProduct.classList.add('num-product-cart')

            this.container.append(this.numProduct)
        }

    }

    getProducts = async() => {
        let emailUser = localStorage.getItem('emailLogined')
        let num = 0
        const cart = await db.collection("cart")
            .where("userEmail", "==", emailUser)
            .get()

            this.numProduct.innerText = cart.docs[0].data().items.length
    }

    render() {
        this.container.append(this.icon, this.text)

        return this.container
    }
}

export default SubButton