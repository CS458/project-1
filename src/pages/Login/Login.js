import React from "react";

import BottomBanner from "../../components/BottomBanner/BottomBanner";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import NetflixLogo from "../../components/NetflixLogo/NetflixLogo";

import css from "./Login.module.css";

export const Login = () => {
	return (
		<div className={css.container}>
			<div className={css.upperSubContainer}>
				<NetflixLogo />
				<LoginForm />
			</div>
			<div className={css.bottomSubContainer}>
				<BottomBanner />
			</div>
		</div>
	);
};
