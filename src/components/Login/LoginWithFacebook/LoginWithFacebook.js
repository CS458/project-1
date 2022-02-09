import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import css from "./LoginWithFacebook.module.css";

const LoginWithFacebook = (props) => {
	const [login, setLogin] = useState(false);
	const [data, setData] = useState({});

	const responseFacebook = (response) => {
		console.log(response);
		setData(response);
		if (response.accessToken) {
			setLogin(true);
		} else {
			setLogin(false);
		}
	};

	return (
		<FacebookLogin
			appId='448552373619838'
			autoLoad
			fields='name,email,picture'
			scope='public_profile, user_friends'
			callback={responseFacebook}
			render={(renderProps) => {
				return (
					<div className={css.container} onClick={renderProps.onClick}>
						<i className={css.facebookIcon} height='20' />
						<span className={css.link}>Login with Facebook</span>
					</div>
				);
			}}
		/>
		// <Button onClick={renderProps.onClick}>This is my custom FB button</Button>
	);
};

export default LoginWithFacebook;
