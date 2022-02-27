import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: sessionStorage.getItem("token") || "",
	email: sessionStorage.getItem("email") || "",
	fbToken: sessionStorage.getItem("fbToken") || "",
};

export const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {
		gotToken: (state, action) => {
			state.email = action.payload.email;
			state.token = action.payload.token;
			sessionStorage.setItem("email", action.payload.email);
			sessionStorage.setItem("token", action.payload.token);
		},
		fbLogin: (state, action) => {
			state.email = action.payload.email;
			state.fbToken = action.payload.fbToken;
			sessionStorage.setItem("email", action.payload.email);
			sessionStorage.setItem("fbToken", action.payload.fbToken);
		},
		logout: (state, action) => {
			state.email = "";
			state.token = "";
			state.fbToken = "";
			sessionStorage.removeItem("email");
			if (sessionStorage.getItem("token")) sessionStorage.removeItem("token");
			if (sessionStorage.getItem("fbToken")) sessionStorage.removeItem("fbToken");
		},
	},
});

export const userActions = userReducer.actions;

export default userReducer.reducer;
