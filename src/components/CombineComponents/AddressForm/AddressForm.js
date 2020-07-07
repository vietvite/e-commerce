import React from 'react'
import FormInput from 'components/FormInput/FormInput'
import styles from './AddressForm.module.scss'
import RedButtonLg from 'components/RedButtonLg/RedButtonLg'
import { PHONENUMBER_REGEX, FULLNAME_REGEX } from '../../../commons'

class AddressForm extends React.Component {
  constructor() {
    super()
    this.textChangeHandler = this.textChangeHandler.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  textChangeHandler({ target: { name, value } }) {
    this.props.setDeliveryInfo({
      [name]: value
    })
  }
  validate(field, regex) {

  }

  formSubmit() {
    if (!this.props.fullname) {
      return this.props.setError({ fullname: 'Chưa nhập họ và tên.' })
    }
    if (!FULLNAME_REGEX.test(this.props.fullname)) {
      return this.props.setError({ fullname: 'Họ và tên phải có ít nhất 5 ký tự.' })
    }
    if (!this.props.phoneNumber) {
      return this.props.setError({ phoneNumber: 'Chưa nhập số điện thoại.' })
    }
    if (!PHONENUMBER_REGEX.test(this.props.phoneNumber)) {
      console.log({ phoneNumber: this.props.phoneNumber });
      console.log(!PHONENUMBER_REGEX.test(this.props.phoneNumber));


      return this.props.setError({ phoneNumber: 'Số điện thoại không đúng.' })
    }
    if (!this.props.provinceOrCity) {
      return this.props.setError({ provinceOrCity: 'Chưa nhập tỉnh / thành phố.' })
    }
    if (!this.props.districtOrTown) {
      return this.props.setError({ districtOrTown: 'Chưa nhập quận / huyện.' })
    }
    if (!this.props.subDistrictOrVillage) {
      return this.props.setError({ subDistrictOrVillage: 'Chưa nhập phường / xã.' })
    }
    if (!this.props.detailAddress) {
      return this.props.setError({ detailAddress: 'Chưa nhập địa chỉ chi tiết.' })
    }
    this.props.onSubmit()
    this.props.setError({})
    this.props.close()
  }

  render() {
    const {
      fullname,
      phoneNumber,
      email,
      provinceOrCity,
      districtOrTown,
      subDistrictOrVillage,
      detailAddress,
    } = this.props

    const { error = {} } = this.props

    return (
      <form className={styles.addressForm} onSubmit={() => this.formSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.label}>Họ và tên: <span>*</span> </div>
          <FormInput
            value={fullname}
            textChangeHandler={this.textChangeHandler}
            tooltipMessage={error.fullname}
            name='fullname'
            type='text'
            placeholder="Họ và tên" />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.label}>Số điện thoại: <span>*</span> </div>
          <FormInput
            value={phoneNumber}
            textChangeHandler={this.textChangeHandler}
            tooltipMessage={error.phoneNumber}
            name='phoneNumber'
            type='text'
            placeholder="Nhập số điện thoại" />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.label}>Địa chỉ email: <span>*</span> </div>
          <FormInput
            disabled={true}
            value={email}
            textChangeHandler={this.textChangeHandler}
            tooltipMessage={error.email}
            name='email'
            type='email'
            placeholder="Nhập địa chỉ email" />
        </div>

        {/* ===================== ADDRESS ===================== */}

        <div className={styles.formGroup}>
          <div className={styles.label}>Tỉnh / Thành phố: <span>*</span> </div>
          <FormInput
            value={provinceOrCity}
            textChangeHandler={this.textChangeHandler}
            tooltipMessage={error.provinceOrCity}
            name='provinceOrCity'
            type='text'
            placeholder="Tỉnh / Thành phố" />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.label}>Quận / Huyện: <span>*</span> </div>
          <FormInput
            value={districtOrTown}
            textChangeHandler={this.textChangeHandler}
            tooltipMessage={error.districtOrTown}
            name='districtOrTown'
            type='text'
            placeholder="Quận / Huyện" />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.label}>Phường / Xã: <span>*</span> </div>
          <FormInput
            value={subDistrictOrVillage}
            textChangeHandler={this.textChangeHandler}
            tooltipMessage={error.subDistrictOrVillage}
            name='subDistrictOrVillage'
            type='text'
            placeholder="Nhập Phường / Xã" />
        </div>

        {/* ===================== END ADDRESS ===================== */}

        <div className={styles.formGroup}>
          <div className={styles.label}>Địa chỉ chi tiết: <span>*</span> </div>
          <FormInput
            value={detailAddress}
            textChangeHandler={this.textChangeHandler}
            tooltipMessage={error.detailAddress}
            name='detailAddress'
            type='text'
            placeholder="Địa chỉ chi tiết" />
        </div>

        <RedButtonLg onClick={this.formSubmit}>Tiếp tục</RedButtonLg>
      </form>
    )
  }
}

export default AddressForm
