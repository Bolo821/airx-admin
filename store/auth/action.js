export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    SET_CURRENT_USER: 'SET CURRENT USER',
    REGISTER_SUCCESS: 'REGISTER SUCCESS',
    REGISTER_REQUEST: 'REGISTER REQUEST',
};

export function login(payload) {
    return { type: actionTypes.LOGIN_REQUEST, payload };
}

export function loginSuccess() {
    return { type: actionTypes.LOGIN_SUCCESS };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}

export function setCurrentUser(data) {
    return { type: actionTypes.SET_CURRENT_USER, payload: data };
}

export function register(data) {
    return {
        type: actionTypes.REGISTER_REQUEST,
        data: data,
    }
}
export function registerSuccess() {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    }
}
