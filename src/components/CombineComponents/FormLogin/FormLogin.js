import React from "react";
import style from "./FormLogin.module.scss";
import FormInput from "../../BaseComponents/FormInput/FormInput";
import ButtonBackground from "../../BaseComponents/ButtonBackground/ButtonBackground";
import { Mail, Key } from 'react-feather';
import Checkboxinput from "../../BaseComponents/CheckboxInput/CheckboxInput";

class FormLogin extends React.Component {
    render() {
        return (
            <div className={style.formLogin}>
                <h1>ĐĂNG NHẬP</h1>
                <form>
                    <div className={style.formGroupBody}>
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
                                <Key />
                            </div>
                            <div className={style.formGroupInfo}>
                                <FormInput placeholder="Nhập mật khẩu ">Password</FormInput>
                            </div>
                        </div>
                        <div className={style.formSubcribe}>
                            <Checkboxinput>Đồng ý nhận mail từ XXX</Checkboxinput>
                        </div>
                        <p className={style.formForgot}>Quên mật khẩu ?</p>
                        <div className={style.btnSubmitWrap}>
                            <ButtonBackground>
                                Đăng nhập
                            </ButtonBackground>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormLogin;

