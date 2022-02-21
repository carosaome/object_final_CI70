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
        this.title.innerText = "Cart"

        this.containerTable = document.createElement('div')
        this.containerTable.style.maxWidth = '770px'
        this.sumPrice = document.createElement('span')

        this.checkCart()
        // this.getProducts()
        // console.log(this.getProducts())
        this.addressPage = new AddressCheckoutPage

        this.btnConfirm = new ButtonComponent('', '', 'btn-checkout-cart', 'Thanh toan', this.changeAddressPage)
    }
    checkCart() {
        const check = localStorage.getItem('cart')
        if (check == null) {
            this.containerTable.innerHTML = `  <p> Không có sản phẩm nào trong giỏ hàng!</p>
            <p><a href="index.html"><i class="ti-back-left"></i>Tiếp tục mua hàng</a></p>`
            this.container.append(this.title, this.containerTable)
        }
        else {
            this.container.append(this.title)
            this.getProducts()
        }
    }

    changeAddressPage = () => {
        changeScreen(this.addressPage)
    }
    getProducts = async () => {
        let emailUser = localStorage.getItem('emailLogined')
        let sumPrice = 0
        let num = 0
        const cart = await db.collection("cart")
            .where("userEmail", "==", emailUser)
            .get()
        if (cart) {
            const carts = cart.docs[0].data().items
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
        }
        // .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //           console.log(cart)

        //         if (querySnapshot.docs.length === 0) {
        //             return null;
        //         }

        //         num = num +1

        //         console.log(num)
        //         sumPrice += +(doc.data().price);

                // const newProduct = new SectionProductInCart(

                //     doc.data().img,
                //     doc.data().name,
                //     doc.data().price,
                //     doc.data().amout,
                //     doc.data().id
                // )
                // this.containerTable.append(newProduct.render())
                // this.sumPrice.innerText = sumPrice.toLocaleString() + '₫'

        //         return {
        //             num,
        //             sumPrice,
        //             id: querySnapshot.docs[0].id,
        //             ...querySnapshot.docs[0].data(),            // convert data
        //         };
        //     });

        // }


        // )
        // .catch((error) => {
        //     let errorCode = error.code;
        //     let errorMessage = error.message;
        //     _noti.error(errorCode, errorMessage);
        // });;
    }
    render() {


        this.container.append(this.containerTable, this.sumPrice, this.btnConfirm.render())
        return this.container
    }
}

export default CartPage