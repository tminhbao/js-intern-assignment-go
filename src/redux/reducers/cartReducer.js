import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listCarts: JSON.parse(localStorage.getItem('listCarts')) || [],
    totalMoney: JSON.parse(localStorage.getItem('totalMoney')) || 0,
    // listCarts: [],
    // totalMoney: 0
}

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const itemInCart = state.listCarts.find(item => item.id === action.payload.id)
            if (itemInCart) { itemInCart.quantity++ }
            else state.listCarts.push({ ...action.payload, quantity: 1 });
            // Calculate total money
            let totalMoney = 0;
            state.listCarts.forEach((item) => totalMoney += item.quantity * item.price);
            state.totalMoney = totalMoney.toFixed(2);
            saveToLocalStorage(state.listCarts, state.totalMoney);
        },
        incrementQuantity: (state, action) => {
            const item = state.listCarts.find((item) => item.id === action.payload.id);
            item.quantity++;
            // Calculate total money
            let totalMoney = 0;
            state.listCarts.forEach((item) => totalMoney += item.quantity * item.price);
            state.totalMoney = totalMoney.toFixed(2);
            saveToLocalStorage(state.listCarts, state.totalMoney);
        },
        decrementQuantity: (state, action) => {
            const item = state.listCarts.find((item) => item.id === action.payload.id);
            if (item.quantity === 1) {
                const removeItem = state.listCarts.filter((item) => item.id !== action.payload.id);
                state.listCarts = removeItem;
            } else {
                item.quantity--;
            }
            // Calculate total money
            let totalMoney = 0;
            state.listCarts.forEach((item) => totalMoney += item.quantity * item.price);
            state.totalMoney = totalMoney.toFixed(2);
            saveToLocalStorage(state.listCarts, state.totalMoney);
        },
        removeProductFromCart: (state, action) => {
            const removeItem = state.listCarts.filter((item) => item.id !== action.payload.id);
            state.listCarts = removeItem;
            // Calculate total money
            let totalMoney = 0;
            state.listCarts.forEach((item) => totalMoney += item.quantity * item.price);
            state.totalMoney = totalMoney.toFixed(2);
            saveToLocalStorage(state.listCarts, state.totalMoney);
        }
    }
});

export const { addProductToCart, incrementQuantity, decrementQuantity, removeProductFromCart } = cartReducer.actions

export default cartReducer.reducer

const saveToLocalStorage = (listCarts, totalMoney) => {
    localStorage.setItem('listCarts', JSON.stringify(listCarts));
    localStorage.setItem('totalMoney', JSON.stringify(totalMoney));
}