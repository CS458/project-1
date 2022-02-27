import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userActions } from "../../redux/user/userSlice";
import { RoutesList } from "../../routes/RoutesList";
import css from "./Home.module.css";

export const Home = () => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if ((!user.token || !user.email || user.email === "incorrect" || user.token === "incorrect") && !user.fbToken) {
			navigate(RoutesList.Login);
		}
	}, [navigate, user.email, user.fbToken, user.token]);

	return (
		<div className={css.container}>
			<h1 id='loginMsg'>Login Successful {user.fbToken && <span>(Logged in with Facebook)</span>}</h1>
			<Link to={RoutesList.Login} onClick={() => dispatch(userActions.logout())} id='logoutBtn'>
				Logout
			</Link>
		</div>
	);
};
