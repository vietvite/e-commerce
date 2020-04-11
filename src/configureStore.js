import { createStore } from 'redux'
import rootReducers from './redux'

const store = createStore(rootReducers)

export default store