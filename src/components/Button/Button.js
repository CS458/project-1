import React from "react";

import css from "./Button.module.css";

const Button = (props) => {
	const { text } = props;
	return <button className={css.primaryButton}>{text}</button>;
};

export default Button;
