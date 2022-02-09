import React from "react";

const Input = (props) => {
	const { warningMessage, placeholder, type, id, name } = props;

	return (
		<div className='inputText'>
			<input type={type} id={id} name={name} placeholder={placeholder} onfocus='inputOnFocus(this)' onblur='inputOnBlur(this)' />
			<div className='warning-input' id='warningEmail'>
				{warningMessage}
			</div>
		</div>
	);
};

export default Input;
