import { Checkbox } from "@mui/material";
import React from "react";
import css from "./LoginFormHelp.module.css";

const LoginFormHelp = (props) => {
	return (
		<div className={css.container}>
			<Checkbox label='Remember Me' />
			<a className={css.needHelp} href='#'>
				Need help?
			</a>
		</div>
	);
};

export default LoginFormHelp;
