import { useEffect, useState } from "react";

type User = {
	id: number;
	name: string;
};

const USERS: User[] = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
	{ id: 4, name: "David" },
	{ id: 5, name: "Eve" },
];

export default function SearchUsers() {
	const [inputValue, setInputValue] = useState("");
	const [debouncedQuery, setDebouncedQuery] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedQuery(inputValue);
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [inputValue]);

	const normalizedQuery = debouncedQuery.trim().toLowerCase();

	const filteredList = USERS.filter((user) => {
		if (normalizedQuery === "") return true;
		return user.name.toLowerCase().includes(normalizedQuery);
	});

	return (
		<div>
			<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			<p>Input: {inputValue}</p>
			<p>Debounced Query: {debouncedQuery}</p>

			<ul>
				{filteredList.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}