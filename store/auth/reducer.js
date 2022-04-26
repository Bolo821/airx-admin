import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    currentUser: null,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false },
            };
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            }
        default:
            return state;
    }
}

export default reducer;
