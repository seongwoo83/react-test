import { useEffect, useState } from "react";

type User = {
	id: number;
	name: string;
};

function fetchUsers(shouldFail = false): Promise<User[]> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldFail) {
				reject(new Error("Failed to fetch users"));
				return;
			}

			resolve([
				{ id: 1, name: "Alice" },
				{ id: 2, name: "Bob" },
				{ id: 3, name: "Charlie" },
			]);
		}, 1000);
	});
}

export default function UserList() {
	const [isLoading, setIsLoading] = useState(true);
	const [userList, setUserList] = useState<User[]>([]);
	const [isError, setIsError] = useState(false);

	const fetchingData = async () => {
		setIsLoading(true);
		setIsError(false);

		try {
			const users = await fetchUsers();
			setUserList(users);
		} catch {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchingData();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return (
			<div>
				<div>에러가 발생했습니다.</div>
				<button onClick={fetchingData}>Retry</button>
			</div>
		);
	}

	return (
		<div>
			{userList.map((user) => {
				return <div key={user.id}>{user.name}</div>;
			})}
		</div>
	);
}
