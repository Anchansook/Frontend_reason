
/*
! 음식 주문 시스템

- 메뉴 목록 조회하기
  : GET /restaurants/{id}/menu

- 새 메뉴 항목 추가하기
  : POST /restaurants/{id}/menu

- 메뉴 항목 수정
  : PUT /restaurants/{id}/menu/{itemId}

- 메뉴 항목 삭제
  : DELETE /restaurants/{id}/menu/{itemId}

- 주문하기
  : POST /restaurants/{id}/orders

- 주문 상태 업데이트 (준비 중, 배달 중, 배달 완료)
  : PUT /restaurants/{id}/orders/{orderId}
*/