import React, { useState } from "react";
import css from "./Input.module.css";

const Input = (props) => {
	const { warningMessage, placeholder, type, id, name, validate } = props;
	const [isValid, setIsValid] = useState(true);

	const onBlur = (e) => {
		if (!validate) return;
		setIsValid(validate(e.target.value));
	};

	return (
		<div className={css.inputText}>
			<input type={type} id={id} name={name} placeholder={placeholder} onBlur={onBlur} style={{ borderBottom: isValid ? "none" : "2px solid #e87c03" }} />
			{!isValid ? (
				<div className={css.warningInput} id='warningEmail'>
					{warningMessage}
				</div>
			) : null}
		</div>
	);
};

export default Input;
