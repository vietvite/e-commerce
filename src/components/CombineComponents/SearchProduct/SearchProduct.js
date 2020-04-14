import React, { Component } from 'react'
import styles from './SearchProduct.module.scss'
import { Search } from 'react-feather'

export default class SearchProduct extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.textChangeHandler = this.textChangeHandler.bind(this)
  }

  textChangeHandler({ target: { text } }) {
    this.setState({
      text
    })
  }

  render() {
    return (
      <div className={styles.searchForm}>
        <form>
          <input
            value={this.state.text}
            onChange={this.textChangeHandler}
            name='search'
            placeholder='Tìm kiếm' />
          <button type='submit'>
            <Search />
          </button>
        </form>
      </div>
    )
  }
}
