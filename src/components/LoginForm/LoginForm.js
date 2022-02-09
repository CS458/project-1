import React from "react";
import SignInButton from "../../lib-components/SignInButton/SignInButton";
import fbIcon from "../../assets/facebook-icon.png";
import Input from "../../lib-components/Input/Input";

const LoginForm = () => {
	return (
		<div className='login-div'>
			<form className='login'>
				<h1>Sign In</h1>
				<Input warningMessage='Please enter a valid email or phone number.' placeholder='Email or phone number' type='text' id='inputEmail' name='email' />
				<Input warningMessage='Your password must contain between 4 and 60 characters.' placeholder='Password' type='password' id='inputPassword' name='password' />
				<SignInButton />
				<div className='middleContainer'>
					<div>
						<input type='checkbox' />
						<label className='grey'>Remember me</label>
					</div>
					<div className='help'>
						<a className='grey' href='#'>
							Need help?
						</a>
					</div>
				</div>
				<div className='loginWithFacebook'>
					<img src={fbIcon} height='20' />
					<a href='#' className='darkGrey facebookLoginLink'>
						Login with Facebook
					</a>
				</div>
				<div className='newToNetflix'>
					New to Netflix?{" "}
					<a href='#' className='signUpNow'>
						Sign up now
					</a>
					.
				</div>
				<div className='captchaText darkGrey help'>
					This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#'>Learn more.</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
