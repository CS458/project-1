import React from "react";
import Button from "../../Button/Button";

import Input from "../../Input/Input";
import LoginCaptchaWarning from "../LoginCaptchaWarning/LoginCaptchaWarning";
import LoginFormHelp from "../LoginFormHelp/LoginFormHelp";
import LoginNewMembers from "../LoginNewMembers/LoginNewMembers";
import LoginWithFacebook from "../LoginWithFacebook/LoginWithFacebook";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
	return (
		<div className={css.container}>
			<form className={css.login}>
				<h1 className={css.heading}>Sign In</h1>
				<Input type='text' name='email' placeholder='Email or phone number' warningMessage={"Please enter a valid email or phone number."} />
				<Input type='password' name='password' placeholder='Password' warningMessage={"Your password must contain between 4 and 60 characters."} />
				<Button text='Sign In' />
				<LoginFormHelp />
				<LoginWithFacebook />
				<LoginNewMembers />
				<LoginCaptchaWarning />
			</form>
		</div>
	);
};
