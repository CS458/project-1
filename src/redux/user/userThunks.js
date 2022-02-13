import { httpApi } from "../../api/httpClient";
import { httpConfig } from "../../api/httpConfig";
import { userActions } from "./userSlice";

export const login = (req) => async (dispatch, getState) => {
	try {
		const { data } = await httpApi.post(httpConfig.endpoints.userOperations.login, req, { headers: { "Content-Type": "application/json" } });
		console.log(data);
		dispatch(userActions.gotToken({ ...data, email: req.email }));
	} catch (e) {
		console.error(e);
		dispatch(userActions.gotToken({ email: "incorrect", token: "incorrect" }));
	}
};
