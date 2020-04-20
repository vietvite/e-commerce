import React from 'react'
import styles from './FormInput.module.scss'

class FormInput extends React.Component {
  render(){
    return(
        <div className={styles.formInput}>   
            <input
            className={styles.tagInput}
            type="text"
            id=""
            placeholder={this.props.placeholder}
            defaultValue=""
            />
        </div>
    )
  }
}
export default FormInput;