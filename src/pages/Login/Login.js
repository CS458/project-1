import React from "react";

import BottomBanner from "../../components/BottomBanner/BottomBanner";
import LoginForm from "../../components/LoginForm/LoginForm";
import NetflixLogo from "../../components/NetflixLogo/NetflixLogo";

export const Login = () => {
	return (
		<div className='container'>
			<div className='upperSubContainer'>
				<NetflixLogo />
				<LoginForm />
			</div>
			<div className='bottomSubContainer'>
				<BottomBanner />
			</div>
		</div>
	);
};
