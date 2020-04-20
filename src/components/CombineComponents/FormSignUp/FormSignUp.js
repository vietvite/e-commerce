import React from "react";
import style from "./FormSignUp.module.scss";
import FormInput from "../../BaseComponents/FormInput/FormInput";
import ButtonBackground from "../../BaseComponents/ButtonBackground/ButtonBackground";
import { Mail, Key, Users, Phone } from 'react-feather';
import Checkboxinput from "../../BaseComponents/CheckboxInput/CheckboxInput";

class FormSignUp extends React.Component {
    render() {
        return (
            <div className={style.formSignUp}>
                <h1>ĐĂNG KÝ</h1>
                <form>
                    <div className={style.formGroupBody}>
                        <div className={style.formGroup}>
                            <div className={style.formGroupItem}>
                                <Users />
                            </div>
                            <div className={style.formGroupInfo}>
                                <FormInput placeholder="Nhập họ tên"></FormInput>
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.formGroupItem}>
                                <Mail />
                            </div>
                            <div className={style.formGroupInfo}>
                                <FormInput placeholder="Nhập địa chỉ email"></FormInput>
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.formGroupItem}>
                                <Phone />
                            </div>
                            <div className={style.formGroupInfo}>
                                <FormInput placeholder="Nhập số điện thoại"></FormInput>
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.formGroupItem}>
                                <Key />
                            </div>
                            <div className={style.formGroupInfo}>
                                <FormInput placeholder="Nhập mật khẩu"></FormInput>
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.formGroupItem}>
                            </div>
                            <div className={style.formGroupInfo}>
                                <FormInput placeholder="Nhập lại mật khẩu"></FormInput>
                            </div>
                        </div>
                        <div className={style.formSubcribe}>
                            <Checkboxinput>Đồng ý nhận mail từ XXX</Checkboxinput>
                        </div>
                        <div className={style.btnSubmitWrap}>
                            <ButtonBackground>
                                Đăng kí
                            </ButtonBackground>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormSignUp;

