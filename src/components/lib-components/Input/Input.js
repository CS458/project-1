import React from "react";
import css from "./Input.module.css";

const Input = (props) => {
	const { warningMessage, placeholder, type, id, name } = props;

	return (
		<div className={css.inputText}>
			<input type={type} id={id} name={name} placeholder={placeholder} onfocus='inputOnFocus(this)' onblur='inputOnBlur(this)' />
			<div className={css.warningInput} id='warningEmail'>
				{warningMessage}
			</div>
		</div>
	);
};

export default Input;
