import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createRootReducer from './redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { isDev } from './config'

export const history = createBrowserHistory()

export default function configureStore(preloadState) {
  const loggerMiddleware = createLogger()

  const getMiddleware = () =>
    isDev ? applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history),
    ) :
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
      )

  return createStore(
    createRootReducer(history),
    preloadState,
    compose(getMiddleware())
  )
}
