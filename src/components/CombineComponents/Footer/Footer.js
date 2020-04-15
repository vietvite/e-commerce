import React from "react";
import style from "./Footer.module.scss"
import { Send, PhoneCall} from 'react-feather';


class Footer extends React.Component {
    render() {
        return (
            <footer className={style.footerSection}>
                <div className={style.footerHead}>        
                    <div className={style.footerHeadLeft}>
                        Sàn thương mại điện tử xuyên biên giới hàng đầu Việt Nam
                        <br/>
                        Giấy phép số 0xxxxxxxxxx.
                    </div>
                    <div className={style.footerHeadRight}>
                        <a className={style.certifyItem} href="/">
                            <img src="https://st-fe-v2.fado.vn/desktop/dist/images/icons/bo-cong-thuong.png?v=3.0.79.6" alt="cerrtifyItem"/>
                        </a>
                        <a className={style.certifyItem} href="/">
                            <img src="https://st-fe-v2.fado.vn/desktop/dist/images/icons/safe-web.png" alt="cerrtifyItem"/>
                        </a>
                        <a className={style.certifyItem} href="/">
                            <img src="https://st-fe-v2.fado.vn/desktop/dist/images/icons/chong-hang-gia.png" alt="cerrtifyItem"/>
                        </a>
                    </div>
                </div> 

                <div className={style.footerBody}>
                    <div className={style.footerBodyLeft}>
                        <div className={style.footerAddressItem}>
                            <div className={style.footerTitle}>
                                Trụ sở giao dịch tại TP.Hồ Chí Minh
                            </div>
                            <div className={style.footerAddress}>         
                                Số 28 X, Phường XX, Quận XXX, TP. HCM                
                            </div>
                            <div className={style.footerPhone}>
                                <a class={style.footerPhoneBtn} href="/">
                                    <PhoneCall/>
                                    <span class={style.footerPhoneNumber}>1900 xxx xxx</span>
                                </a>
                            </div>
                        </div>
                        <div className={style.footerAddressItem}>
                            <div className={style.footerTitle}>
                                Chi nhánh tại TP.Hà Nội
                            </div>
                            <div className={style.footerAddress}>         
                                Số 28 X, Phường XX, Quận XXX, TP.Hà Nội               
                            </div>
                            <div className={style.footerPhone}>
                                <a class={style.footerPhoneBtn} href="/">
                                    <PhoneCall/>
                                    <span class={style.footerPhoneNumber}>1900 xxx xxx</span>
                                </a>
                            </div>
                        </div>
                        <div className={style.footerAddressItem}>
                            <div className={style.footerTitle}>
                                Chi nhánh tại TP.Đà Nẵng
                            </div>
                            <div className={style.footerAddress}>         
                                Số 28 X, Phường XX, Quận XXX, TP.Đà Nẵng              
                            </div>
                            <div className={style.footerPhone}>
                                <a class={style.footerPhoneBtn} href="/">
                                    <PhoneCall/>
                                    <span class={style.footerPhoneNumber}>1900 xxx xxx</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={style.footerBodyCenter}>
                        <div className={style.footerDesInfo}>
                            <div class={style.footerTitle}>Tên doanh nghiệp: CÔNG TY CỔ PHẦN XXX VIỆT NAM</div>
                            <div>
                                Địa chỉ công ty: X, Phường X, Thành phố Huế, Việt Nam
                            </div>
                        </div>
                        <div className={style.footerDesInfo}>
                            <div className={style.footerTitle}>
                                Mua hàng chưa bao giờ dễ đến thế
                            </div>
                            <div className={style.footerContents}>
                                XXX.vn được ra đời nhằm cung cấp cho quý khách hàng dịch vụ mua sắm trực tiếp 
                                tốt nhất tại Việt Nam ,vận chuyển đến tận tay quý khách hàng một cách nhanh 
                                chóng, an toàn với chi phí tiết kiệm nhất.<br/>
                                Tại XX.vn quý khách được xem báo giá trực tiếp giá trị món hàng hay ship hàng một cách nhanh chóng 
                                chỉ với vài thao tác click chuột, không cần phải chờ đợi báo giá.<br/>
                                Thanh toán bằng nhiều hình thức rất tiện lợi, có thể trực tiếp quản lý và theo dõi trạng thái đơn hàng của mình.
                                Với giao diện thân thiện,dễ sử dụng, XXX.vn phục vụ khách hàng 24/24  và tin đăng của bạn sẽ được bảo vệ an toàn nhất.<br/>
                                Tại đây, người bán khi đăng kí làm thành viên của xxx.vn đều có quyền ngang nhau, được tự do xây dựng gian hàng và đăng tải những tin đăng có nội dung phong phú,đẹp mắt. Ngược lại, người mua luôn có nhiều lựa chọn để có được hàng hóa tốt nhất.<br/>
                                XXX.vn không ngừng nâng cấp,cải tiến,mong muốn những dịch vụ của mình sẽ đem đến cho quý khách hàng mọi thông tin bạn cần bất cứ lúc nào, ở bất kỳ đâu với chất lượng cao nhất.<br/>
                                Xin chân thành cảm ơn.<br/>
                            </div>
                        </div>
                        <div className={style.footerServices}>
                            <div className={style.footerTitle}>Dành cho khách hàng</div>
                            <div className={style.footerServicesInfo}>
                                <a href="/">Câu hỏi thường gặp</a>
                                <a href="/">Chính sách đổi trả</a>
                                <a href="/">Cách thức giao nhận</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.footerBodyRight}>
                        <div className={style.registerMail}>
                            <div className={style.footerTitle}>
                                Đăng kí nhận tin ưu đãi
                            </div>
                            <div className={style.registerMailDes}> 
                                Đừng bỏ lỡ sự kiện nóng hổi và triệu chương trình giảm giá siêu hấp dẫn sẽ được Fado cập nhật đến quý khách hàng tuần.
                            </div>
                            <form id="register-mail-form" class={style.registerMailForm}>
                                <input type="email"  name="email" placeholder="Nhập email nhận tin"/>
                                <button type="submit" name="submit">
                                    <Send />
                                </button>
                            </form>
                        </div>
                        <div className={style.footerPartner}>
                            <div className={style.footerTitle}>
                                Đối tác thương mại
                            </div>
                            <div className={style.footerLinkList}>
                                <a class={style.footerLinkItemFooterPartnerLinkItem} href="/" target="_blank">
                                    <img src="https://st-fe-v2.fado.vn/desktop/dist/images/logo/fptshop-fado.png" alt="FPTShop"/>
                                </a>
                                <a class={style.footerLinkItemFooterPartnerLinkItem} href="/" target="_blank">
                                    <img src="https://st-fe-v2.fado.vn/desktop/dist/images/logo/alibaba.png" alt="Alibaba"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className={style.footerFoot}>
                    <div className={style.footerTitle}>
                        Hình thức thanh toán
                    </div>
                    <div className={style.imgBankcard}><img src='bankcard.jpg' alt="bankcard" /></div>
                </div>  
            </footer>
        );

    }

}
export default Footer;

