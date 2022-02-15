class ContainerProducts{
    container;

    constructor(){
        this.container = document.createElement('div')
        this.container.classList.add('content-main')
        this.container.innerHTML = `<div class=" about-products row">
        <span class="text-on-products"> Deal Hot Trong Tháng</span>
    </div>

    <div id="lists-deal-hot" class="section-deal">

    </div>

    <div class=" about-products row">
        <span class="text-on-products"> PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</span>
    </div>

    <div id="lists-pc" class="section-deal">

    </div>

    <div class=" about-products row">
        <span class="text-on-products">LAPTOP GAMING - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC </span>
    </div>



    <div id="lists-laptop" class="section-deal">

    </div>
    <div class=" about-products row">
        <span class="text-on-products">THẾ GIỚI PHỤ KIỆN PC </span>
    </div>
    <div id="lists-gear" class="section-deal">

    </div>`
    }

    render(){
        return this.container
    }
}

export default ContainerProducts