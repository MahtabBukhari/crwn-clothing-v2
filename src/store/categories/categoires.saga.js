import {all, call,put, takeLatest} from 'redux-saga/effects'

import { getCollectionsAndDocuments } from "../../utiles/firebase/firebase.utiles"
import { fetchCategoriesfailed, fetchCategoriesSuccess } from './categories.action';

import { SET_CATEGORIES_TYPES } from './categories.types'





export function* fetchCategoriesAsync(){
    try {
        const gategoriesArray = yield call(getCollectionsAndDocuments,'categories');
       yield put(fetchCategoriesSuccess(gategoriesArray))
    } catch (error) {
        yield put(fetchCategoriesfailed(error))
    }

}

export function* onFetchCategories(){
    yield takeLatest(SET_CATEGORIES_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}

    export function* categoriesSaga(){
        yield all([call(onFetchCategories)])
    }