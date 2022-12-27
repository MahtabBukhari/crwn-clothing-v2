import {all,call} from 'redux-saga/effects'
import { categoriesSaga } from './categories/categoires.saga'


export function* rootSaga(){

    yield all([call(categoriesSaga)])
}