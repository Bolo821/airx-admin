export const actionTypes = {
    SET_PRODUCT: 'SET PRODUCT',
    SET_PRODUCT_SEARCH_TEXT: 'SET PRODUCT SEARCH TEXT',
    SET_PRODUCT_CATEGORY_FILTER: 'SET PRODUCT CATEGORY FILTER',
};

export function setProduct(data) {
    return {
        type: actionTypes.SET_PRODUCT,
        payload: data,
    }
}

export function setProductSearchText(data) {
    return {
        type: actionTypes.SET_PRODUCT_SEARCH_TEXT,
        payload: data,
    }
}

export function setProductCategoryFilter(data) {
    return {
        type: actionTypes.SET_PRODUCT_CATEGORY_FILTER,
        payload: data,
    }
}