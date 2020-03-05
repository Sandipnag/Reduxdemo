import { BUY_PRODUCT } from './productTypes';

export const buyProduct = (index) =>{
    return{
        type : BUY_PRODUCT,
        productIndex:index
    }
}