console.log('Hello TypeScript');

// 위의 ts파일 명령어를 실행하기 위해서는 해당 파일을 js파일로 '컴파일'
// tsc 파일명.ts
// >> 같은 이름의 js파일 생성

// 컴파일 된 js파일을 Node.js 런타임 환경에서 실행
// : node 파일명.js

//! ts코드를 실시간으로 js로 컴파일하고 실행
// ts-node 설치
// npm install -g ts-node

console.log('ts-node로 ts파일 실행하기');
// ts-node 파일명.ts

//? ts파일의 경우 컴파일 하지 않을 경우 js로 업데이트되지 않음.