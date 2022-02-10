import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, validatePhone } from "../../../config/validations";
import { login } from "../../../redux/user/userThunks";
import Input from "../../lib-components/Input/Input";
import { RoutesList } from "../../../routes/RoutesList";
import SignInButton from "../../SignInButton/SignInButton";
import LoginWithFacebook from "../LoginWithFacebook/LoginWithFacebook";
import css from "./LoginForm.module.css";

const LoginForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	const [emailPhone, setEmailPhone] = useState("");
	const [password, setPassword] = useState("");

	const onFormSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ email: emailPhone, password }));
	};

	const onEmailPhoneNumberChange = (e) => {
		setEmailPhone(e.target.value);
	};

	const onPasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const isUserLoginFailed = user.email === "incorrect" && user.token === "incorrect";

	useEffect(() => {
		if (user.token && user.email && !isUserLoginFailed) {
			navigate(RoutesList.Home);
		}
	}, [user.token, user.email, isUserLoginFailed, navigate]);

	return (
		<div className={css.container}>
			<form className={css.loginForm} onSubmit={onFormSubmit}>
				{isUserLoginFailed && (
					<div className={css.loginFailed}>
						<b>Incorrect password.</b> Please try again or you can <Link to='#'>Reset your password.</Link>
					</div>
				)}
				<h1>Sign In</h1>
				<Input
					id='inputEmail'
					name='email'
					onChange={onEmailPhoneNumberChange}
					placeholder='Email or phone number'
					type='text'
					validate={(value) => validateEmail(value) || validatePhone(value)}
					value={emailPhone}
					warningMessage='Please enter a valid email or phone number.'
				/>
				<Input
					id='inputPassword'
					isPassword
					name='password'
					onChange={onPasswordChange}
					placeholder='Password'
					type='password'
					validate={validatePassword}
					value={password}
					warningMessage='Your password must contain between 4 and 60 characters.'
				/>
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
