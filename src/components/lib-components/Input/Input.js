import React, { useState } from "react";
import css from "./Input.module.css";

const Input = (props) => {
	const { warningMessage, placeholder, type, id, name, validate, value, onChange, isPassword, checked } = props;
	const [isValid, setIsValid] = useState(true);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const onBlur = (e) => {
		if (!validate) return;
		setIsValid(validate(e.target.value));
	};

	const resolveInputTextType = () => {
		if (type === "password") {
			return isPasswordVisible ? "text" : "password";
		}
		return type;
	};

	return (
		<div className={css.inputText}>
			<div className={css.inputContainer}>
				<input
					type={resolveInputTextType()}
					id={id}
					name={name}
					placeholder={placeholder}
					onBlur={onBlur}
					style={{ borderBottom: isValid ? "none" : "2px solid #e87c03", borderTopRightRadius: isPassword ? "0px" : "5px", borderBottomRightRadius: isPassword ? "0px" : "5px" }}
					value={value}
					onChange={onChange}
					checked={checked}
				/>
				{isPassword ? (
					<div onClick={() => setIsPasswordVisible(!isPasswordVisible)} style={{ borderBottom: isValid ? "none" : "2px solid #e87c03" }}>
						{isPasswordVisible ? "HIDE" : "SHOW"}
					</div>
				) : null}
			</div>

			{!isValid ? (
				<div className={css.warningInput} id='warningEmail'>
					{warningMessage}
				</div>
			) : null}
		</div>
	);
};

export default Input;
