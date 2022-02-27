import React from "react";
import css from "./SignInButton.module.css";

const SignInButton = () => {
	return (
		<button className={css.signInButton} type='submit' id='signIn'>
			Sign In
		</button>
	);
};

export default SignInButton;
