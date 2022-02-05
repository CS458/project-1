import React from "react";
import css from "./LoginNewMembers.module.css";

const LoginNewMembers = () => {
	return (
		<div className={css.container}>
			New to Netflix? <span className={css.signUpLink}>Sign up now</span>
		</div>
	);
};

export default LoginNewMembers;
