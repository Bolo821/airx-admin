import { actionTypes } from './action';

export const initState = {
    products: [],
    searchText: '',
    categoryFilter: '',
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        case actionTypes.SET_PRODUCT_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
        case actionTypes.SET_PRODUCT_CATEGORY_FILTER:
            return {
                ...state,
                categoryFilter: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;
