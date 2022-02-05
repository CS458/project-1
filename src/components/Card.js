import React from "react";

import css from "./Card.module.css";

const Card = (props) => {
	const { children } = props;
	return <div className={css.container}>{children}</div>;
};

export default Card;
