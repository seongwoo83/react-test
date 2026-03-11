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
```javascript
const initialUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];
```
<br>
1. 검색기능 - name기준 필터링<br>
2. 삭제기능 - user옆의 삭제 버튼 클릭 시 삭제<br>
3. 검색결과 미존재 시 - No User Found 출력<br>
4. 반드시 사용<br>
	•	useState<br>
	•	filter<br>
	•	controlled input<br>
