import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/counter/counterSlice";
import css from "./Home.module.css";

export const Home = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className={css.container}>
			<button aria-label='Increment value' onClick={() => dispatch(increment())}>
				Increment
			</button>
			<span>{count}</span>
			<button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
				Decrement
			</button>
		</div>
	);
};
