import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrement, increment } from "../../redux/counter/counterSlice";

//TODO: DELETE THIS COMPONENT IF NOT NEEDED
// PURELY A TEST COMPONENT FOR NOW. ONLY TO SERVE AS EXAMPLE

export const Home = () => {
	const count = useSelector((state) => state.counter.value);
	const todos = useSelector((state) => state.todo.list);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		navigate("/login");
		// dispatch(getTodos({ page: 1 }));
	}, [dispatch]);

	return (
		<div>
			<Button aria-label='Increment value' onClick={() => dispatch(increment())} variant='outlined'>
				Increment
			</Button>
			<p style={{ padding: "10px" }}>{count}</p>
			<Button aria-label='Decrement value' onClick={() => dispatch(decrement())} variant='outlined'>
				Decrement
			</Button>
			<div>
				{todos.map((todo) => (
					<div key={todo.id}>{todo.title}</div>
				))}
			</div>
		</div>
	);
};
