import { actionTypes } from './action';

export const initState = {
    orders: [],
    searchText: '',
    statusFilter: '',
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        case actionTypes.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
        case actionTypes.SET_STATUS_FILTER:
            return {
                ...state,
                statusFilter: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;
