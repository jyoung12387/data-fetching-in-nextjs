import { useEffect, useState } from "react";

export default function Home() {
	// set state initially to an empty array
	// that way we can use conditional rendering to check
	// if the array has a length of 0
	const [todos, setTodos] = useState([]);

	// standard useEffect to fetch data from api
	// put it it's own funciton so we can use async await syntax
	// make sure to call the funciton
	useEffect(() => {
		const fetchTodos = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/todos");
			const data = await res.json();
			setTodos(data);
		};
		fetchTodos();
	}, []);

	// This will render the page with a quick loading message
	// before the data is fetched.
	return (
		<div>
			{/* conditional rendering. checking to see if the array.length === 0
      if so, page will render without data */}

			{todos.length === 0 ? (
				<div>Loading...</div>
			) : (
				todos.map((todo) => (
					<div key={todo.id}>
						<p>
							{todo.id}: {todo.title}
						</p>
					</div>
				))
			)}
		</div>
	);
}
