import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import {persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    blackList:['user']
}


const persistedReducer = persistReducer(persistConfig,rootReducer)
const middleWare = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWare))

export const store = createStore(persistedReducer,undefined,composeEnhancers)
export const persistor = persistStore(store)


