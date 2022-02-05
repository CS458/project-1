import { httpApi } from "../../api/httpClient";
import { todoActions } from "./todoSlice";

export const getTodos = (req) => async (dispatch, getState) => {
	console.log(getState());
	const { data } = await httpApi.get("/todos", req);
	dispatch(todoActions.gotTodos(data));
};
