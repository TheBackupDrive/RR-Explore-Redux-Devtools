import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    name: 'BackupDrive'
}

export const grocerySlice = createSlice({
    name: 'grocery',
    initialState,
    reducers: {
        addGroceryItem: (state, action) => {
            state.groceries.push({id: `id-${Date.now()}`, name: action.payload, bought: false })
        },
        buyGroceryItem: (state, action) => {
            const item = state.groceries.find(({id}) => id ===action.payload);
            const itemIndex = state.groceries.indexOf(item);
            item.bought = true;
            state.groceries.splice(itemIndex, 1);
            state.bought.push(item);
        },
        clearGroceryList: state=> {
            state.groceries.length = 0;
        },
        clearBoughtGroceries: state => {
            state.bought.length = 0;
        }
    }
})

export const {
    addGroceryItem,
    buyGroceryItem,
    clearBoughtGroceries,
    clearGroceryList
} = grocerySlice.actions;

export default grocerySlice.reducer; 