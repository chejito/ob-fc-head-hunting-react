import { compose, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "../reducers/rootReducer"
import createSagaMiddleware from 'redux-saga'
import { watcherLogin } from "../sagas/sagas"

export const createAsyncAppStore = () => {

  const sagaMiddleware = createSagaMiddleware()

  let store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      composeWithDevTools()
    )
  )
  
  sagaMiddleware.run(watcherLogin)

  return store
}