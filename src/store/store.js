import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import {persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware  from 'redux-saga'
import {rootSaga}  from './root-saga'


const persistConfig={
    key:'root',
    storage,
    // blackList:['user']    instead of blocking one or more state to store in the local storage
    whitelist:['cart'] // we allow only the one or more state to store in the local storage that needs it
}

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig,rootReducer)
const middleWare = [logger,sagaMiddleware]

const composeEnhancers = compose(applyMiddleware(...middleWare))

export const store = createStore(persistedReducer,undefined,composeEnhancers)

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)


