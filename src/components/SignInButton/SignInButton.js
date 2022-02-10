import React from "react";
import css from "./SignInButton.module.css";

const SignInButton = () => {
	return (
		<button className={css.signInButton} type='submit'>
			Sign In
		</button>
	);
};

export default SignInButton;
