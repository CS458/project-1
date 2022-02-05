import React from "react";
import css from "./LoginWithFacebook.module.css";

const LoginWithFacebook = (props) => {
	return (
		<div className={css.container}>
			<i className={css.facebookIcon} height='20' />
			<span className={css.link}>Login with Facebook</span>
		</div>
	);
};

export default LoginWithFacebook;
