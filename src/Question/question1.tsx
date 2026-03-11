import { useRef, useState } from "react";

type Todo = {
	id: number;
	content: string;
};

export default function TodoApp() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [todoString, setTodoString] = useState<string>("");
	const todoId = useRef<number>(0);

	const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputText = e.currentTarget.value;
		setTodoString(inputText);
	};

	const addTodoItem = () => {
		const trimmedText = todoString.trim();
		if (trimmedText === "") return;
		// if (todoString === "") return;
		const newTodoItem = {
			id: todoId.current,
			content: todoString,
		};
		setTodos((prevTodos) => [...prevTodos, newTodoItem]);
		setTodoString("");
		todoId.current++;
	};

	const deleteTodoItem = (targetId: number) => {
		const deletedTodos = todos.filter((todo) => todo.id !== targetId);
		setTodos(deletedTodos);
	};

	return (
		<div>
			<h1>Todo List</h1>

			<input onChange={changeInput} value={todoString} />
			{/* <input onChange={changeInput} /> */}
			<button onClick={addTodoItem}>Add</button>

			<ul>
				{todos.map((todo) => {
					return (
						<li className="todoItem" key={todo.id}>
							{/* <div className="todoItem" key={todo.id}> */}
							{todo.content}
							<button
								className="todoDelete"
								onClick={() => deleteTodoItem(todo.id)}
							>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
