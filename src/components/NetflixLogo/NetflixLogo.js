import React from "react";
import css from "./NetflixLogo.module.css";
import netflixLogo from "../../assets/netflix-logo.png";

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
