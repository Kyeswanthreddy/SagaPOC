import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* buyMobile() {
    yield delay(4000);
    yield put({type: 'BUY_MOBILE_SUCCESS'});
}

export function* watchUser() {
    // yield takeEvery('BUY_MOBILE', buyMobile)
    yield takeLatest('BUY_MOBILE', buyMobile)
}

