import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
	email: "",
};

export const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {
		gotToken: (state, action) => {
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		logout: (state, action) => {
			state.email = "";
			state.token = "";
		},
	},
});

export const userActions = userReducer.actions;

export default userReducer.reducer;
