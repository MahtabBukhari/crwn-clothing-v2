import {compose, createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import {persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig={
    key:'root',
    storage,
    // blackList:['user']    instead of blocking one or more state to store in the local storage
    whitelist:['cart'] // we allow only the one or more state to store in the local storage that needs it
}


const persistedReducer = persistReducer(persistConfig,rootReducer)
const middleWare = [logger,thunk]

const composeEnhancers = compose(applyMiddleware(...middleWare))

export const store = createStore(persistedReducer,undefined,composeEnhancers)
export const persistor = persistStore(store)


