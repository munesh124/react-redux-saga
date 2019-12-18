import { takeLatest, put, call, all } from "redux-saga/effects";


function* changeName() {
  yield takeLatest("CHANGE_NAME", function* operateData(action) {
    yield put({ type: "CHANGE_NAME_STARTED" });
    try {
      const DATA = yield call(action.payload);
      yield put({ type: "CHANGE_NAME_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "CHANGE_NAME_FAILED" });
    }
  });
}



const rootSaga = function* rootSaga() {
  yield all([changeName()])
}

export default rootSaga