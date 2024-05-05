import React from 'react'

export default function JSX03() {
  const url = 'https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_640.jpg';

  const baseUrl = 'https://cdn.pixabay.com/photo/';

  const dog = {
    date: '2018/05/11/',
    description: '08/11/',
    imageId: 'dog-3389729_640',
    name: '강아지',
    thema: {
      backgroundColor: 'gray',
      color: 'pink'
    },
    imageThema: {
      width: '200px',
      height: '150px',
    }
  }

  return (
    <div style={dog.thema}>
      <p>{dog.name}'s Picture</p>
      {/* JS의 표현식을 중괄호 내에서 작성 */}
      <img 
      src={baseUrl + dog.date + dog.description + dog.imageId + '.jpg'} 
      alt={dog.name} 
      width={dog.imageThema.width} 
      height={dog.imageThema.height} />
      <hr />
    </div>
  )
}
