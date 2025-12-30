import { createSlice } from "@reduxjs/toolkit";
import  {type PayloadAction } from "@reduxjs/toolkit";


export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

type CartState = {
    items:CartItem[];
    lastAddedItem: CartItem | null;

};
const initialState:CartState={
    items:[],
    lastAddedItem: null
};


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {
        addItemToCart(state, action:PayloadAction<{id: string, title: string, price: number}>) {
            const newItem = state.items.findIndex((item)=>item.id===action.payload.id);
            if (newItem>=0) {
                state.items[newItem].quantity++;
                state.lastAddedItem = state.items[newItem];
    }else{
        const newItem = { ...action.payload, quantity: 1 };
    state.items.push(newItem);
    state.lastAddedItem = newItem;
    }
    
},
        removeItemFromCart(state, action:PayloadAction<{id:string,title: string}>) {
            const existingItemIndex = state.items.findIndex((item)=>item.id===action.payload.id);

            if(state.items[existingItemIndex].quantity===1){
                state.items.splice(existingItemIndex,1);
                
            }else{
                state.items[existingItemIndex].quantity--;
            }   
        }
}});

export const{addItemToCart, removeItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;