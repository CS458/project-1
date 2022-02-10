import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//TODO: DELETE THIS COMPONENT IF NOT NEEDED
// PURELY A TEST COMPONENT FOR NOW. ONLY TO SERVE AS EXAMPLE

export const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/login");
		// dispatch(getTodos({ page: 1 }));
	}, [navigate]);

	return <div></div>;
};
