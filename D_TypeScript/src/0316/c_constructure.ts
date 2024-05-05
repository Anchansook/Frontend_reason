//! 1. 타입스크립트 프로젝트 디렉토리 구조

//? src(source)
// : 소스 코드를 저장
// : 모든 타입스크립트 파일(.ts)을 해당 폴더 내에 작성

//? node_modules
// : 프로젝트에서 사용하는 모든 NPM패키지를 저장

//? package.json
// : 프로젝트의 메타데이터와 사용하는 npm패키지의 목록을 저장

/*
  name: 프로젝트의 이름입니다.
  version: 프로젝트의 현재 버전입니다.
  description: 프로젝트에 대한 간단한 설명입니다.
  main: 프로젝트의 엔트리 포인트입니다. 이 파일은 프로젝트를 시작할 때 Node.js가 처음으로 실행하는 파일입니다.
  scripts: 프로젝트에서 사용할 스크립트를 정의하는 곳입니다. 예를 들어, 테스트를 실행하거나 프로젝트를 빌드하는 등의 커맨드를 정의할 수 있습니다.
  dependencies: 프로젝트에서 사용하는 패키지의 목록과 버전 정보입니다. 이 패키지들은 프로젝트의 실행에 필요한 패키지입니다.
  devDependencies: 프로젝트의 개발에만 필요한 패키지의 목록과 버전 정보입니다. 이 패키지들은 테스팅, 빌드, 문서 생성 등의 개발 작업에 사용됩니다.
*/

//? tsconfig.json
// : 타입스크립트 컴파일러의 설정을 저장

/*
  compilerOptions: 컴파일러 옵션을 설정하는 객체입니다. 이 객체에는 여러 하위 옵션이 있습니다.
  target: 컴파일된 코드가 실행될 ECMAScript 버전을 지정합니다. 예를 들어, "ES5", "ES2015" 등을 지정할 수 있습니다.
  module: 사용할 모듈 시스템을 지정합니다. 예를 들어, "CommonJS", "ES2015", "AMD" 등을 지정할 수 있습니다.
  outDir: 컴파일된 자바스크립트 파일이 위치할 디렉토리를 지정합니다.
  strict: 모든 엄격한 타입-체킹 옵션을 활성화합니다.
  esModuleInterop: ES 모듈과의 상호 운용성을 활성화합니다.
  include: 컴파일에 포함될 파일 또는 디렉토리의 리스트입니다.
  exclude: 컴파일에서 제외될 파일 또는 디렉토리의 리스트입니다.

  ? dist
  : 컴파일된 자바스크립트 파일(.js)를 저장
    타입스크립트 컴파일러를 실행하면 src 폴더의 ts파일들이 해당 폴더로 컴파일되어 이동
*/
