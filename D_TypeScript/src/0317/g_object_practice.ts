{
//! 문제1
// 다음 객체 타입을 정의하고, 해당 타입을 가진 객체를 하나 생성
// person: 객체는 name(문자열), age(숫자), hobby(문자열, 선택적)속성을 가져야 한다.
const person: {
  name: string;
  age: number;
  hobby?: string;
} = {
  name: '이용주',
  age: 30,
  // hobby: '맛집찾기' - 선택적 프로퍼티
};

//! 문제2
// readonly를 사용하여 car객체 타입을 정의하고, model(읽기 전용, 문자열)과 year(숫자)속성을 포함하는 객체를 생성
// + model속성에 다른 값을 할당하려고 할 때 발생하는 오류를 설명
const car: {
  readonly model: string;
  year: number;
} = {
  model: 'bmw',
  year: 1995 
};

// car.model = 'oudi'; - Error -> 읽기 전용 속성이므로 'model'에 할당할 수 없습니다.
console.log(car.model);
}
