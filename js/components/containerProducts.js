import SectionProduct from "./perProducts.js";
import * as _noti from "../common/notify.js"
// import { getProducts } from "../firebase/store.js";
import db from "../firebase/index.js";


class ContainerProducts {
    container;

    containerTitle
    title

    containerProducts



    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('content-main')


        this.containerTitle = document.createElement('div')
        this.containerTitle.classList.add('about-products', 'row')
        this.title = document.createElement('span')
        this.title.classList.add('text-on-products')
        this.title.innerText = ` PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC`


        this.containerProducts = document.createElement('div')
        this.containerProducts.classList.add('section-deal')
        this.containerProducts.id = 'lists-deal-hot'


        this.getProducts()
    }

    // numberFormat(num){
    //     let fmt = new Intl.NumberFormat()
    //     return fmt.format(num)
    // }

    getProducts() {
        db.collection("products")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots

                    if (querySnapshot.docs.length === 0) {
                        return null;
                    }

                    const newProduct = new SectionProduct(
                        doc.data().fullname,
                        doc.data().price,
                        doc.data().urlImg
                    )
                    this.containerProducts.append(newProduct.render())
                    return {
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
    render() {

        this.containerTitle.append(this.title)
        this.container.append(this.containerTitle, this.containerProducts)
        return this.container
    }
}

export default ContainerProducts