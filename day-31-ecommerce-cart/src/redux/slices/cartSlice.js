import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		isSidebarVisible: false,
		cartItems: [],
	},

	reducers: {
		addItem: (state, action) => {
			console.log(state, action);
			state.cartItems = [...state.cartItems, action.payload];
		},
		toggleVisibility: state => {
			state.isSidebarVisible = !state.isSidebarVisible;
		},
	},
});

export const { addItem, toggleVisibility } = cartSlice.actions;
export default cartSlice.reducer;
