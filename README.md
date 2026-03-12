## React Live Coding Practice Repository

### Question 1
#### Todo List

**Require**<br>
	1.	사용자가 입력창에 할 일을 입력할 수 있다.<br>
	2.	Add 버튼을 누르면 리스트에 추가된다.<br>
	3.	각 Todo 항목 옆에는 삭제 버튼이 있다.<br>
	4.	삭제 버튼을 누르면 해당 Todo가 제거된다.<br>
	5.	입력창이 비어있으면 추가되지 않는다.

---

### Question 2
#### Searchable User List

**Require**<br>
	1.	아래와 같은 유저 목록이 주어진다.<br>
	2.	사용자는 검색 input에 이름을 입력할 수 있다.<br>
	3.	입력한 검색어를 기준으로 이름에 검색어가 포함된 유저만 화면에 보여준다.<br>
	4.	검색어가 비어 있으면 전체 유저 목록을 보여준다.<br>
	5.	검색 결과가 없으면 "검색 결과가 없습니다." 문구를 보여준다.<br>
	<br>
```javascript
const USERS = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];
```
---

### Question 3
#### Asynchronous Loading User List

**Require**<br>
	1.	컴포넌트가 처음 마운트되면 유저 목록을 비동기로 불러온다.<br>
	2.	데이터를 불러오는 동안 "Loading..." 문구를 보여준다.<br>
	3.	데이터를 성공적으로 불러오면 유저 이름 목록을 보여준다.<br>
	4.	에러가 발생하면 "에러가 발생했습니다." 문구를 보여준다.<br>
	5.	Retry 버튼을 누르면 다시 요청할 수 있다.<br>

---

### Question 4
#### Debouncing Search

**Require**<br>
	1.	검색 input이 있다.<br>
	2.	사용자가 input에 값을 입력할 수 있다.<br>
	3.	사용자가 입력할 때마다 바로 검색하지 않고, 마지막 입력 후 500ms가 지나면 검색어를 반영한다.<br>
	4.	반영된 검색어를 기준으로 유저 목록을 필터링해서 보여준다.<br>
	5.	검색어가 비어 있으면 전체 목록을 보여준다.<br>
