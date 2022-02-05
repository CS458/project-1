import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { RoutesList } from "./RoutesList";

export const RoutesContainer = () => {
	return (
		<Routes>
			<Route path={RoutesList.Home} element={<Home />} />
			<Route path={RoutesList.Login} element={<Login />} />
		</Routes>
	);
};
