import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification } from 'antd';

import { actionTypes, loginSuccess, logOutSuccess, setCurrentUser, registerSuccess } from './action';

import { auth } from '../firebase';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};
const modalRegisterSuccess = (type) => {
    notification[type]({
        message: 'Successfully registered.',
        description: 'You have successfully registered.',
    });
};
const modalFail = (type) => {
    notification[type]({
        message: 'Failed to login',
        description: 'Your information is not correct.',
    });
};
const modalRegisterFail = (type) => {
    notification[type]({
        message: 'Failed to sign up',
        description: 'Sorry, but something went wrong. Try again.',
    });
};

const modalWarning = (type) => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};

async function checkUser(payload) {
    const res = await auth.signInWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
            modalSuccess('success');
            return {user: userCredential.user};
        })
        .catch((error) => {
            modalFail('error');
            return {user: null};
        });
    return res;
}

async function addUser(data) {
    const res = await auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
            modalRegisterSuccess('success');
            return {user: userCredential.user};
        })
        .catch((error) => {
            modalRegisterFail('error');
            return {user: null};
        });
    return res;
}

function* loginSaga({ payload }) {
    try {
        const res = yield call(checkUser, payload);
        if(res.user) {
            yield put(setCurrentUser(res.user));
            yield put(loginSuccess());
        }
    } catch (err) {
        console.log(err);
    }
}

function* registerSaga({ data }) {
    try {
        const res = yield call(addUser, data);
        if(res.user) {
            yield put(setCurrentUser(res.user));
            yield put(registerSuccess());
        }
    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
