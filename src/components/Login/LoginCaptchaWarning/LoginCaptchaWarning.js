import React from "react";

import css from "./LoginCaptchaWarning.module.css";

const LoginCaptchaWarning = () => {
	return (
		<div className={css.container}>
			This page is protected by Google reCAPTCHA to ensure you're not a bot.
			<a className={css.learnMoreLink}>Learn more.</a>
		</div>
	);
};

export default LoginCaptchaWarning;
