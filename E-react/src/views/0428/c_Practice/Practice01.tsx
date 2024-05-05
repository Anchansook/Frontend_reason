import React, { useEffect, useState } from 'react'

//! 사용자 정보 가져오기
// jsonplaceholder에서 users 데이터를 사용
// : 사용자 목록을 비동기적으로 호출

// 각 사용자의 이름과 이메일을 표시

type User = {
  id :number;
  name :string;
  email :string;
}

export default function Practice01() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  async function fetchUsers() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // const filteredUsers = data.filter((user :any) => user.id === 1);
      
      setUsers(data);
      // setUsers(filteredUsers);
      setLoading(false);

    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>사용자를 로딩중입니다.</div>
  }

  if (error) {
    return <div>Error: ${error}</div>
  }

  return (
    <div>
      <h3>Users 사용자 데이터 표시</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h2>사용자 이름: {user.name}</h2>
            <p>사용자 이메일: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
