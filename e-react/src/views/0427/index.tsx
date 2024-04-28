import React from 'react'
import StateProps01 from './a_State.Props/StateProps01'
import StateProps02 from './a_State.Props/StateProps02'
import UseRef from './b_useRef/UseRef'
import UseRef02 from './b_useRef/UseRef02'
import Arr01 from './c_Array/Arr01'
import Arr02 from './c_Array/Arr02'

const images = [
  'https://cdn.pixabay.com/photo/2024/01/15/21/16/dog-8510901_640.jpg',
  'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_640.jpg',
  'https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_640.jpg',
  'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_640.jpg',
  'https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_640.jpg'
];

export default function Index() {
  return (
    <div>
      <h1 style={{backgroundColor: 'pink'}}>0427</h1>

      <h2>1. 컴포넌트 트리 안의 상태</h2>
      <StateProps01 />
      <StateProps02 />

      <h2>2. 변경 가능한 참조 객체 생성</h2>
      <UseRef />
      <UseRef02 images={images} />

      <h2>3. 배열 렌더링</h2>
      <Arr01 />
      <Arr02 />

    </div>
  )
}

