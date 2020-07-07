import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createRootReducer from './redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { NODE_ENV } from './config'
import { loadState, saveState } from './api/sessionStorage'

export const history = createBrowserHistory()

export default function configureStore() {
  const loggerMiddleware = createLogger()
  const getMiddleware = () =>
    NODE_ENV === 'production'
      ? applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerMiddleware(history),
      ) :
      applyMiddleware(
        thunkMiddleware,
        // TODO: delete line below on production
        loggerMiddleware,
        routerMiddleware(history),
      )

  const preloadState = Object.assign({},
    { cart: loadState('cart') },
    { account: loadState('account') },
    { product: loadState('product') },
    { banner: loadState('banner') },
  )

  const store = createStore(
    createRootReducer(history),
    preloadState,
    compose(getMiddleware())
  )

  store.subscribe(() => {
    saveState('cart', store.getState().cart)
    saveState('account', store.getState().account)
    saveState('product', store.getState().product)
    saveState('banner', store.getState().banner)
  })

  return store
}
