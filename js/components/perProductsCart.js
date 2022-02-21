import ButtonComponent from "./button.js"

import {deleteProductInCart, addProductInCart, subProductInCart} from "../firebase/store.js"
class SectionProductInCart

 {


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

    idProduct

    check

    constructor(urlImg,name,price,amout,id) {

        this.containerTable = document.createElement('div')
        this.containerTable.classList.add('cart-item')

        this.imgInTable = document.createElement('img')
        this.imgInTable.classList.add('cart-item-img')
        this.imgInTable.src = urlImg
        this.nameInTable = document.createElement('span')
        this.nameInTable.classList.add('cart-item-name')
        this.nameInTable.innerText = name

        this.containerPrice = document.createElement('div')
        this.containerPrice.classList.add('cart-item-price')
        this.priceIntable = document.createElement('p')
        this.priceIntable.classList.add('cart-item-price-sale')
        this.priceIntable.innerText = this.numberFormat(price) + '₫'

        this.containerBtn = document.createElement('span')
        this.containerBtn.classList.add('cart-item-number')
        this.btnSub = new ButtonComponent('', '', 'cart-item-number-btn', '-', this.handleSubItem)
        this.p = document.createElement('p')
        this.p.classList.add('cart-item-number-text')
        this.p.innerText = amout
        this.btnAdd = new ButtonComponent('', '', 'cart-item-number-btn', '+', this.handleAddItem)

        this.sumPrice = document.createElement('p')
        this.sumPrice.classList.add('cart-item-sum-money')

        this.btnDeleteItem = new ButtonComponent('', '', 'cart-item-delete-btn', 'x', this.handleDelteItem)

        this.idProduct = id

        this.check = amout;
    }
    
    numberFormat(num) {
        let fmt = new Intl.NumberFormat()
        return fmt.format(num)
    }
    handleDelteItem =() =>{
        deleteProductInCart(this.idProduct)
    }
    handleAddItem = () =>{
        addProductInCart(this.idProduct)
    }
    handleSubItem = () =>{
        if(this.check <= 1){
            deleteProductInCart(this.idProduct)


        }
        else{

            subProductInCart(this.idProduct)
        }

    }
    render() {
        this.containerBtn.append(this.btnSub.render(), this.p, this.btnAdd.render())
        this.containerPrice.append(this.priceIntable)
        this.containerTable.append(this.imgInTable,
                this.nameInTable,
                this.containerPrice,
                this.containerBtn,
                this.sumPrice,
                this.btnDeleteItem.render()
            )
        return this.containerTable
    }
}

export default SectionProductInCart

