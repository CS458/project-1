import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [],
};

export const todoReducer = createSlice({
	name: "todos",
	initialState,
	reducers: {
		gotTodos: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const todoActions = todoReducer.actions;

export default todoReducer.reducer;
