import { takeEvery, put, call, all } from 'redux-saga/effects';
import { getUserData, getUserRepos } from '../utils';
import { GetUserFailure, GetUserReposFailure, GetUserReposSuccess, GetUserSuccess } from './actions';
import { GET_REPO_REQUEST, GET_USER_REQUEST } from './actionTypes';

function* GetUserSaga(action) {
    const {username} = action;
    
    const data = yield call(getUserData, username);
    if(!data.error) {
        yield put(GetUserSuccess(data));
    } else {
        yield put(GetUserFailure("Profile not found"))
    }

}

function* GetRepoSaga(action) {
    const {username, page} = action;

    const data = yield call(getUserRepos, username, page);
    if(!data.error) {
        yield put(GetUserReposSuccess(data.result));
    } else {
        yield put(GetUserReposFailure(data.message))
    }

}


function* userSaga() {
    yield takeEvery(GET_USER_REQUEST, GetUserSaga);
    yield takeEvery(GET_REPO_REQUEST, GetRepoSaga);
}

function* rootSaga() {
    yield all([userSaga()])
}

export default rootSaga;