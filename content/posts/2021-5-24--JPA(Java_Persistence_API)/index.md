---
title: JPA(Java Persistence API)
category: "자바API"
cover: title.jpg
author: JunMock Kim
---
## JPA(Java Persistence API)

> 위키백과 - JPA

```text
자바 퍼시스턴스 API또는 자바 지속성 API(Java Persistence API, JPA)는 자바 플랫폼 SE와 자바 플랫폼 EE를 사용하는 응용프로그램에서 관계형 데이터베이스의 관리를 표현하는 자바 API이다.
```


MyBatis 와 같은 SQL맵퍼(ORM이 아니다.)를 이용한 데이터 베이스 쿼리를 사용하였을때 SQL을 다루는 시간이 증가.

테이블 모델링에 집중하고 객체를 테이블에 맞추어 데이터 전달 역할만 하는 개발을 피하자.

객체 지향적인 프로그래밍을 하고 JPA가 이를 관계형 데이터베이스에 맞게 SQL을 대신 생성.

SQL에 종속정인 개발을 하지 않아도 된다.

### JPA의 장점

- CRUD쿼리를 직접 작성할 필요가없다.
- 객체지향 프로그래밍을 쉽게 할 수 있다.
  - 부모-자식 관계 표현
  - 1:N관계 표현
  - 상태와 행위를 한 곳에서 관리하는 등
- Object와 RDB사이의 페러다임 불일치 해결

### JPA의 구현체

- Hibernate
