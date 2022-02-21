import db from "../firebase/index.js";

class SubButton {


    container;
    icon;
    text;
    app;

    numProduct;

    check
    constructor(icon, text, cb, num) {
        this.check = localStorage.getItem('emailLogined')
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

        if (num && this.check) {
            this.container.style.position = 'relative'
            this.numProduct = document.createElement('div')
            this.numProduct.classList.add('num-product-cart')
            this.container.append(this.numProduct)
        }

    }

    getProducts = async () => {
        let emailUser = localStorage.getItem('emailLogined')
        const cart = await db.collection("cart")
            .where("userEmail", "==", emailUser)


            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        this.numProduct.innerText = change.doc.data().items.length


                    }
                    if (change.type === "modified") {
                        this.numProduct.innerText = change.doc.data().items.length

                    }
                    if (change.type === "removed") {
                        console.log("Removed : ", change.doc.data());
                    }
                });
            });
    }

    render() {
        this.container.append(this.icon, this.text)

        return this.container
    }
}

export default SubButton