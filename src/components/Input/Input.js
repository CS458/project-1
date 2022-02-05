import React from "react";

import css from "./Input.module.css";

const Input = (props) => {
	const { type, name, placeholder, warningMessage } = props;
	return (
		<div className={css.inputText}>
			<input type={type} name={name} placeholder={placeholder} />
			<div className={css.warningInput}>{warningMessage}</div>
		</div>
	);
};

export default Input;
