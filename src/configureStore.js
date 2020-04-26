import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createRootReducer from './redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { isDev } from './config'
import { loadState, saveState } from './api/sessionStorage'

export const history = createBrowserHistory()

export default function configureStore() {
  const loggerMiddleware = createLogger()
  const getMiddleware = () =>
    isDev ? applyMiddleware(
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

  const preloadState = loadState()

  const store = createStore(
    createRootReducer(history),
    preloadState,
    compose(getMiddleware())
  )

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}
