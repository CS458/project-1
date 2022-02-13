import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import css from "./LoginWithFacebook.module.css";
import { userActions } from "../../../redux/user/userSlice";

const LoginWithFacebook = (props) => {
	const dispatch = useDispatch();

	const responseFacebook = (response) => {
		// console.log(response);
		if (response.accessToken) {
			dispatch(userActions.fbLogin({ email: response.email, fbToken: response.accessToken }));
		} else {
			dispatch(userActions.logout());
		}
	};

	return (
		<FacebookLogin
			autoLoad
			appId='448552373619838'
			fields='name,email,picture'
			scope='public_profile, email, user_friends'
			callback={responseFacebook}
			render={(renderProps) => {
				return (
					<div className={css.container} onClick={renderProps.onClick}>
						<i className={css.facebookIcon} />
						<span className={css.link}>Login with Facebook</span>
					</div>
				);
			}}
		/>
	);
};

export default LoginWithFacebook;
