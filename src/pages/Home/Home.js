import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { decrement, increment } from "../../redux/counter/counterSlice";
import css from "./Home.module.css";

export const Home = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className={css.container}>
			<Button aria-label='Increment value' onClick={() => dispatch(increment())} variant='outlined'>
				Increment
			</Button>
			<p style={{ padding: "10px" }}>{count}</p>
			<Button aria-label='Decrement value' onClick={() => dispatch(decrement())} variant='outlined'>
				Decrement
			</Button>
		</div>
	);
};
