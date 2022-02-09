import React from "react";
import netflixLogo from "../../assets/netflix-logo.png";

const NetflixLogo = () => {
	return (
		<div className='logo'>
			<a href='#'>
				<img src={netflixLogo} className='netflixLogo' />
			</a>
		</div>
	);
};

export default NetflixLogo;
