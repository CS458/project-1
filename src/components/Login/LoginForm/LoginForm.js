import React from "react";
import SignInButton from "../../lib-components/SignInButton/SignInButton";

import Input from "../../lib-components/Input/Input";
import LoginWithFacebook from "../LoginWithFacebook/LoginWithFacebook";

import css from "./LoginForm.module.css";
import clsx from "clsx";

const LoginForm = () => {
	return (
		<div className={css.container}>
			<form className={css.loginForm}>
				<h1>Sign In</h1>
				<Input warningMessage='Please enter a valid email or phone number.' placeholder='Email or phone number' type='text' id='inputEmail' name='email' />
				<Input warningMessage='Your password must contain between 4 and 60 characters.' placeholder='Password' type='password' id='inputPassword' name='password' />
				<SignInButton />
				<div className={css.middleContainer}>
					<div className={css.rememberMeContainer}>
						<input type='checkbox' />
						<label className={css.grey}>Remember me</label>
					</div>
					<div className={css.help}>
						<a className={css.grey} href='#'>
							Need help?
						</a>
					</div>
				</div>
				<LoginWithFacebook />
				<div className={css.newToNetflix}>
					New to Netflix?{" "}
					<a href='#' className={css.signUpNow}>
						Sign up now
					</a>
					.
				</div>
				<div className={clsx(css.captchaText, css.darkGrey, css.help)}>
					This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#'>Learn more.</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
