import changeScreen from "../changscreen.js"
// import CartPage from "../containers/cart.js";
import LoginPage from "../containers/Login/index.js";

class IconCart {

    container;
    img
    text
    numberProduct

    cartPage
    constructor(cb) {
        this.container = document.createElement('a')
        this.container.classList.add('container-icon-cart')
        this.container.addEventListener('click', cb)

        this.img = document.createElement('img')
        this.img.classList.add('img-icon-cart')
        this.img.src = "https://theme.hstatic.net/1000026716/1000440777/14/ak5.png?v=23974"


        this.text = document.createElement('span')
        this.text.classList.add('text-icon-cart')
        this.text.innerText = "CART"


        this.numberProduct = document.createElement('div')
        this.numberProduct.classList.add('numberProduct-icon-cart')

        this.cartPage = new LoginPage()
    }

    changeCartPage = () => {
        changeScreen(this.cartPage)
    }
    getProducts = () => {
        let emailUser = localStorage.getItem('emailLogined')
        let num = []
        db.collection("cart").where("emailUser", "==", emailUser)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    
                    if (querySnapshot.docs.length === 0) {
                        return null;
                    }
                    
                    num.push(doc.data().id)
                    
                    console.log(num)
                   

                    return {
                        num,
                      
                        id: querySnapshot.docs[0].id,
                        ...querySnapshot.docs[0].data(),            // convert data
                    };
                });

            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                _noti.error(errorCode, errorMessage);
            });;
    }
    render(){
        this.container.append(this.img, this.text, this.numberProduct)
        return this.container
    }

    
}

export default IconCart