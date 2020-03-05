import { combineReducers }  from 'redux';
import productReducer from './product/productReducer';

const rootReducer = combineReducers({
    productStore:productReducer
});

export default rootReducer;