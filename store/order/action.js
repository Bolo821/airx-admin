export const actionTypes = {
    SET_ORDERS: 'SET ORDERS',
    SET_SEARCH_TEXT: 'SET SEARCH TEXT',
    SET_STATUS_FILTER: 'SET STATUS',
};

export function setOrders(data) {
    return {
        type: actionTypes.SET_ORDERS,
        payload: data,
    };
}

export function setSearchText(data) {
    return {
        type: actionTypes.SET_SEARCH_TEXT,
        payload: data,
    }
}

export function setStatusFilter(data) {
    return {
        type: actionTypes.SET_STATUS_FILTER,
        payload: data,
    }
}
