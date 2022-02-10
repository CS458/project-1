import React from "react";
import netflixLogo from "../../assets/netflix-logo.png";
import css from "./NetflixLogo.module.css";

const NetflixLogo = () => {
	return (
		<div>
			<a href='#'>
				<img src={netflixLogo} className={css.netflixLogo} />
			</a>
		</div>
	);
};

export default NetflixLogo;
