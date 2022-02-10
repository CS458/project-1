import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/user/userThunks";
import { RoutesList } from "../../routes/RoutesList";
import css from "./Home.module.css";

export const Home = () => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!user.token || !user.email || user.email === "incorrect" || user.token === "incorrect") {
			navigate(RoutesList.Login);
		}
	}, [navigate, user.email, user.token]);

	return (
		<div className={css.container}>
			<h1>Login Successful</h1>
			<Link to={RoutesList.Login} onClick={() => dispatch(logout())}>
				Logout
			</Link>
		</div>
	);
};
