import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import rootReducer from '../reducers'

const middleware = [
  thunkMiddleware,
  loggerMiddleware()
]

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
  return store
}

export default configureStore
