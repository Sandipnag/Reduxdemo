import { BUY_PRODUCT } from "./productTypes";

const initialState = {
    products:[
        {
            name : 'Lays Salted',
            total:10,
            price:10
        },
        {
            name : 'Lays Chess',
            total:10,
            price:5
        },
        {
            name : 'Cheetos Plain',
            total:10,
            price:10
        },
        {
            name : 'Coke',
            total:50,
            price:90
        },
        {
            name : 'Sprite',
            total:60,
            price:100
        }
    ],
    count:4
} 

const productReducer = (state=initialState,action)=>{

    switch(action.type){
        case BUY_PRODUCT:
            state.products[action.productIndex].total = state.products[action.productIndex].total - 1;
            console.log(state.products[action.productIndex].hasOwnProperty('count'))
            state.products[action.productIndex].count = 
                state.products[action.productIndex].hasOwnProperty('count') ? 
                state.products[action.productIndex].count + 1
                    : 
                1;
            return{
                ...state,
                products: state.products
            }
        default: return state
    }

}

export default productReducer;