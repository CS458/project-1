import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
	email: "",
	fbToken: "",
};

export const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {
		gotToken: (state, action) => {
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
		fbLogin: (state, action) => {
			state.email = action.payload.email;
			state.fbToken = action.payload.fbToken;
		},
		logout: (state, action) => {
			state.email = "";
			state.token = "";
			state.fbToken = "";
		},
	},
});

export const userActions = userReducer.actions;

export default userReducer.reducer;
