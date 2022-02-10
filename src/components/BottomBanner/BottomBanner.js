import clsx from "clsx";
import React from "react";
import { CONTACT_PHONE_NUMBER, LINKS, SUPPORT_LANGUAGES } from "../../config/constants";
import css from "./BottomBanner.module.css";

const BottomBanner = () => {
	return (
		<div className={css.bottomBanner}>
			Questions? Call
			<a href={"tel:" + CONTACT_PHONE_NUMBER} className={css.bottomPhoneNumber}>
				{CONTACT_PHONE_NUMBER}
			</a>
			<div>
				<ul className={css.bottomContainer}>
					{LINKS.map((link) => (
						<li className={css.bottomList}>
							<a href='#' className={css.bottomLink}>
								{" "}
								{link.name}{" "}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div>
				<select className={clsx("fa", css.languageSelect)}>
					{SUPPORT_LANGUAGES.map((language) => (
						<option>
							&#xf0ac;{"   "}
							{language.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default BottomBanner;
