import { addProductsToCart } from "../firebase/store.js";
import ButtonComponent from "./button.js";


class SectionProduct {
    container;
    hover;

    ContainerOrderbox
    urlImg
    orderBox
    btnOrder
    a

    containerNamePrice
    nameProduct
    priceProdcut

    nameOrder
    priceOrder
    imgOrder
    idOrder
    amoutOrder
    constructor(name, price, img, id) {
        this.container = document.createElement('div')
        this.container.classList.add('products-sections', 'section')


        this.hover = document.createElement('div')
        this.hover.classList.add('hover-order')


        this.ContainerOrderbox = document.createElement('div')
        this.ContainerOrderbox.classList.add('contain-orderbox')
        this.urlImg = document.createElement('img')
        this.urlImg.src = img
        this.orderBox = document.createElement('div')
        this.orderBox.classList.add('oder-box')
        this.a = document.createElement('a')
        this.a.classList.add('font-in-orderbox')
        this.a.innerText = 'Click để xem chi tiết'
        this.btnOrder = new ButtonComponent('', '', 'btn-in-oderbox', 'Order', this.handleOrderProduct)


        this.containerNamePrice = document.createElement('div')
        this.nameProduct = document.createElement('span')
        this.nameProduct.classList.add('name-products')
        this.nameProduct.innerText = name
        this.priceProdcut = document.createElement('p')
        this.priceProdcut.classList.add('price-offical')
        this.priceProdcut.innerText = this.numberFormat(price) +'₫'

        this.nameOrder = name
        this.priceOder = price
        this.imgOrder = img
        this.idOrder = id
        this.amoutOrder = 1
    }

    saveDataIntoLocalStorage = (  value ) => {
        let listCarts = localStorage.getItem('cart')
        let data
        if (listCarts == null) {
            data = []
        }
        else{
            data = JSON.parse(listCarts)
        }
        data.push(value)
        localStorage.setItem('cart', JSON.stringify(data))
    }

    handleOrderProduct = () => {
        let idCart = localStorage.getItem('idCart')
        let name = this.nameOrder
        let price = this.priceOder
        let img = this.imgOrder
        let idProduct = this.idOrder
        let amoutProduct = this.amoutOrder
    
        let check = localStorage.getItem('emailLogined')
        if(check == null){
            alert('Vui lòng đăng nhập để mua hàng')
        }
        else
        addProductsToCart(idCart, name, price, amoutProduct, img, idProduct )
        
    }

    numberFormat(num) {
        let fmt = new Intl.NumberFormat()
        return fmt.format(num)
    }
    render() {
        this.containerNamePrice.append(this.nameProduct, this.priceProdcut)
        this.orderBox.append(this.a, this.btnOrder.render())
        this.ContainerOrderbox.append(this.urlImg, this.orderBox)
        this.hover.append(this.ContainerOrderbox, this.containerNamePrice)
        this.container.append(this.hover)
        return this.container
    }
}

export default SectionProduct