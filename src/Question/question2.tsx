import { useState } from "react";

type UserType = {
	id: number;
	name: string;
};

const USERS: UserType[] = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
	{ id: 4, name: "David" },
	{ id: 5, name: "Eve" },
];

export default function UserList() {
	const [queryString, setQueryString] = useState<string>("");

	const inputQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQueryString(e.target.value);
	};

	const normalizedQuery = queryString.trim().toLowerCase();
	const filteredList = USERS.filter((user) => {
		user.name.toLowerCase().includes(normalizedQuery);
	});

	return (
		<div>
			<h1>User List</h1>
			<input
				placeholder="검색어를 입력하세요"
				value={queryString}
				onChange={inputQuery}
			/>
			<ul>
				{filteredList.length > 0 ? (
					filteredList.map((listItem) => {
						return <li key={listItem.id}>{listItem.name}</li>;
					})
				) : (
					<li>No User Found</li>
				)}
			</ul>
		</div>
	);
}
