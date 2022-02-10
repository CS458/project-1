import { httpApi } from "../../api/httpClient";
import { httpConfig } from "../../api/httpConfig";
import { userActions } from "./userSlice";

export const login = (req) => async (dispatch, getState) => {
	try {
		console.log(req);
		const { data } = await httpApi.post(httpConfig.endpoints.userOperations.login, req, { headers: { "Content-Type": "application/json" } });
		dispatch(userActions.gotToken(data));
	} catch (e) {
		console.error(e);
		dispatch(userActions.gotToken({ email: "incorrect", token: "incorrect" }));
	}
};
