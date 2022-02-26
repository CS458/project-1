import { userActions } from "./userSlice";
import { REGISTERED_USER } from "../../config/constants";
export const login = (req) => async (dispatch, getState) => {
	try {
		const data = await new Promise((resolve, reject) => {
			setTimeout(() => {
				if ((req.email === REGISTERED_USER.email || req.email === REGISTERED_USER.phone) && req.password === REGISTERED_USER.password) {
					resolve({ token: "fake-jwt-token" });
					console.log("resolve called");
				} else {
					reject(new Error("Login failed"));
					console.log("reject called");
				}
			}, [1000]);
		});
		dispatch(userActions.gotToken({ ...data, email: req.email }));
	} catch (e) {
		console.error(e);
		dispatch(userActions.gotToken({ email: "incorrect", token: "incorrect" }));
	}
};
