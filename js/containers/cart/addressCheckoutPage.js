

class AddressCheckoutPage{
    container
    constructor(){
        this.container = document.createElement('div')
        this.container.innerHTML = `<select name="calc_shipping_provinces" required="">
        <option value="">Tỉnh / Thành phố</option>
      </select>
      <select name="calc_shipping_district" required="">
        <option value="">Quận / Huyện</option>
      </select>
      <input class="billing_address_1" name="" type="hidden" value="">
      <input class="billing_address_2" name="" type="hidden" value="">`

    }
}
export default AddressCheckoutPage