import React from "react";
import ButtonOutline from "../../BaseComponents/ButtonOutline/ButtonOutline";
import ButtonTransparent from "../../BaseComponents/ButtonTransparent/ButtonTransparent";

export default function AuthGroupButton(props) {
  const openFormSignIn = () => {
    props.toggleFormModal(1);
  };
  const openFormSignUp = () => {
    props.toggleFormModal(2);
  };

  return (
    <>
      <ButtonTransparent toggleFormModal={openFormSignIn}>
        Đăng nhập
      </ButtonTransparent>
      <ButtonOutline toggleFormModal={openFormSignUp}>Đăng ký</ButtonOutline>
    </>
  );
}
