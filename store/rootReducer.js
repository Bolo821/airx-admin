import { combineReducers } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';
import order from './order/reducer';
import product from './product/reducer'

export default combineReducers({
    auth,
    app,
    order,
    product,
});
