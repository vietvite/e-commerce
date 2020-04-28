import React from 'react'
import FormInput from '../../BaseComponents/FormInput/FormInput'
import styles from './AddressForm.module.scss'
import RedButtonLg from '../../BaseComponents/RedButtonLg/RedButtonLg'
import { PHONENUMBER_REGEX } from '../../../commons'

class AddressForm extends React.Component {
  constructor() {
    super()
    this.state = {
      fullname: '',
      phoneNumber: '',
      email: '',
      provinceOrCity: '',
      districtOrTown: '',
      subDistrictOrVillage: '',
      detailAddress: '',
    }
    this.textChangeHandler = this.textChangeHandler.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  textChangeHandler({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  formSubmit() {
    if (!PHONENUMBER_REGEX.test(this.state.phoneNumber)) {
      return this.props.setError({ phoneNumber: 'Số điện thoại không đúng.' })
    }
    this.props.onSubmit(this.state)
    this.props.setError({})
  }

  componentDidMount() {
    this.setState(Object.assign({}, this.state, this.props))
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
    } = this.state

    const { error = {} } = this.props

    return (
      <form className={styles.addressForm} onSubmit={this.formSubmit}>
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
