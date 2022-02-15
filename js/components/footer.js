class Footer{
    container;

    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('footer');
        this.container.innerHTML = `<div class="footer-main row">
        <div class="left-footer">
            <p>
                <b>CÔNG TY TNHH THƯƠNG MẠI GEARVN</b> <br>
                <b>EMAIL: CSKH@GEARVN.COM</b> <br>
                <b> HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ</b>: (Làm việc từ 09h00 - 19h00) <br>
                Gọi mua hàng <b>1800 6975</b> <br>
                Hỗ trợ khách hàng <b>1800 6173</b> <br>
                Chính sách bảo hành <br>
                Chính sách thanh toán <br>
                Chính sách giao hàng <br>
                Chính sách bảo mật <br>


            </p>
            <img src="https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png" alt="">
        </div>
        <div class="center-footer">
            <p>
                <b style="color:#428bca">HỆ THỐNG CỬA HÀNG: </b> <br>
                <b>SHOWROOM HCM</b> (Làm việc từ 9h00 - 19h00) <br>
                - Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình. <br>
                <b> SHOWROOM HN </b>(Làm việc từ 9h00 - 19h00) <br>
                - Địa chỉ : 37 Ngõ 121 Thái Hà, Phường Trung Liệt, Quận Đống Đa. <br>

                Mua PC Gaming, laptop gaming, card màn hình, màn hình máy tính, ghế gaming, thiết bị chơi game
                như PS5 hàng đầu Việt Nam bảo hành chính hãng. Mua online nhận nhiều ưu đãi hấp dẫn. <br>
                - Công ty TNHH Thương Mại Gearvn <br>
                - GPKD số 0316517394 do Sở KH và ĐT TP Hồ Chí Minh cấp ngày 01/10/2020 <br>
                - GĐ/Sở hữu website: Nguyễn Thế Anh <br>
            </p>
            <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=65147526-7602-46be-9047-e8c33f9fcbd3"
                alt="">
        </div>
        <div class="right-footer">
            <p>
                <b>FANPAGE</b>
            </p>
        </div>
    </div>`
    }

    render(){
        return this.container;
    }
}

export default Footer

