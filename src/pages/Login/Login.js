import React from "react";
import { LoginForm } from "../../components/Login/LoginForm/LoginForm";
import { LoginHeader } from "../../components/Login/LoginHeader/LoginHeader";
import css from "./Login.module.css";

export const Login = () => {
	return (
		<div className={css.container}>
			<LoginHeader />
			<LoginForm />
		</div>
	);
};
