import React from 'react'

const example = [
  {
    id: 0,
    name: '이용주'
  },
  {
    id: 1,
    name: '정재형'
  }
]

export default function State03() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {

  };

  const handleInputChange = () => {

  };

  return (
    <>
      <h5 style={{}}>
        여러 개의 입력 상태 관리
      </h5>
      <form onSubmit={handleSubmit}></form>
      <input 
        type="text"
        placeholder='아이디'
        name='id'
        onChange={handleInputChange}
        value={id}
      />
      <input 
        type="text"
        placeholder='비밀번호'
        name='password'
        onChange={handleInputChange}
        value={password}
      />
    </>
  )
}
