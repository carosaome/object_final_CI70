import ButtonComponent from "../../components/button.js"
import SectionProductInCart from "../../components/perProductsCart.js"
import * as _noti from "../../common/notify.js"
import db from "../../firebase/index.js"
import changeScreen from "../../changscreen.js"
import LoginPage from "../Login/index.js"
import AddressCheckoutPage from "./addressCheckoutPage.js"
class CartPage {

    container
    title

    containerTable
    imgInTable
    nameInTable

    containerPrice
    priceIntable

    containerBtn
    btnAdd
    p
    btnSub


    sumPrice

    btnDeleteItem
    numProductCart

    btnConfirm

    addressPage
    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('containerCart')
        this.title = document.createElement('h2')
        this.title.innerText = "GIỎ HÀNG"

        this.containerTable = document.createElement('div')
        this.sumPrice = document.createElement('span')

        // this.getProducts()
        // console.log(this.getProducts())
        this.addressPage = new AddressCheckoutPage

        this.btnConfirm = new ButtonComponent('', '', 'register-button-turnBack', 'Thanh toan', this.changeAddressPage)
        this.getProducts()
    }


    changeAddressPage = () => {
        changeScreen(this.addressPage)
    }
    getProducts = async () => {
        let emailUser = localStorage.getItem('emailLogined')
        const cart = await db.collection("cart")
            .where("userEmail", "==", emailUser)


            .onSnapshot((snapshot) => {
                let sumPrice = 0
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("add: ", change.doc.data().items);
                        const carts = change.doc.data().items
                        if (carts.length > 0) {
                            carts.forEach(item => {
                                const newProduct = new SectionProductInCart(

                                    item.img,
                                    item.name,
                                    item.price,
                                    item.amout,
                                    item.id
                                )
                                sumPrice += item.price * item.amout
                                this.sumPrice.innerText = sumPrice.toLocaleString() + '₫'

                                this.containerTable.append(newProduct.render())
                                return carts.length
                            });
                            this.containerTable.style.maxWidth = '770px'
                            this.container.append(this.title, this.containerTable, this.sumPrice, this.btnConfirm.render())

                            // this.container.append(this.btnConfirm.render())
                        }
                        else {
                            this.container.append(this.title, this.containerTable)
                            
                            this.btnConfirm.render().remove()
                            this.containerTable.innerHTML = `  <p> Không có sản phẩm nào trong giỏ hàng!</p>
                        <p><a href="index.html"><i class="ti-back-left"></i>Tiếp tục mua hàng</a></p>`
                        }
                    }
                    if (change.type === "modified") {
                        let x = document.querySelector('.num-product-cart')
                        console.log(x);
                        localStorage.setItem('length', change.doc.data().items.length)
                        console.log("Modified : ", change.doc.data().items);

                        this.containerTable.innerHTML = ''
                        const carts = change.doc.data().items
                        if (carts.length > 0) {
                            carts.forEach(item => {
                                const newProduct = new SectionProductInCart(

                                    item.img,
                                    item.name,
                                    item.price,
                                    item.amout,
                                    item.id
                                )
                                sumPrice += item.price * item.amout
                                this.sumPrice.innerText = sumPrice.toLocaleString() + '₫'

                                this.containerTable.append(newProduct.render())
                                return carts.length
                            });

                            this.containerTable.style.maxWidth = '770px'
                            // this.container.append(this.btnConfirm.render())
                            this.container.append(this.title, this.containerTable, this.sumPrice, this.btnConfirm.render())

                        }
                        else {
                            this.containerTable.style.maxWidth = '100%'
                            this.btnConfirm.render().remove()
                            this.sumPrice.remove()
                            this.containerTable.innerHTML = `  <p> Không có sản phẩm nào trong giỏ hàng!</p>
                        <p><a href="index.html"><i class="ti-back-left"></i>Tiếp tục mua hàng</a></p>`

                        }

                    }
                    if (change.type === "removed") {
                        console.log("Removed : ", change.doc.data());
                    }
                });
            });
    }
    render() {


        return this.container
    }
}

export default CartPage