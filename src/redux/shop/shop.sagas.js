import {takeEvery, call, put, all} from "redux-saga/effects";

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.action";

import shopActionTypes from "./shop.types";

export function* fetchCollectionsAync(){

    try{

        const collectionRef = firestore.collection('collections');
        const snapshot= yield collectionRef.get(); 
        const collectionsMap= yield call(convertCollectionsSnapshotToMap, snapshot); 

        yield put(fetchCollectionsSuccess(collectionsMap));
        
    }catch(error){

        yield put(fetchCollectionsFailure(error.message))

    }
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAync
    );
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}