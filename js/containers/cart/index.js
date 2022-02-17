

class CartPage{

    container
    title
    containerTable
    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add('containerCart')
        this.title = document.createElement('h2')
        this.title.innerText = "Cart"

        this.containerTable = document.createElement('div')
        this.checkCart()
    }
    checkCart(){
        const check = localStorage.getItem('cart')
        if(check == null){
            this.containerTable.innerHTML =`  <p> Không có sản phẩm nào trong giỏ hàng!</p>
            <p><a href="index.html"><i class="ti-back-left"></i>Tiếp tục mua hàng</a></p>`
        }
        else{
            return null
        }
    }

    render(){

        this.container.append(this.title, this.containerTable)
        return this.container
    }
}

export default CartPage