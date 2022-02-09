import React from "react";
import { LINKS, SUPPORT_LANGUAGES, CONTACT_PHONE_NUMBER } from "../../config/constants";

const BottomBanner = () => {
	return (
		<div className='bottomBanner'>
			Questions? Call
			<a href={"tel:" + CONTACT_PHONE_NUMBER} className='bottomPhoneNumber'>
				{CONTACT_PHONE_NUMBER}
			</a>
			<div>
				<ul className='bottomContainer'>
					{LINKS.map((link) => (
						<li className='bottomList'>
							<a href='#' className='bottomLink'>
								{" "}
								{link.name}{" "}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div>
				<select className='fa languageSelect'>
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
