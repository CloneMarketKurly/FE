# 마켓컬리 클론코딩
## 프로젝트 소개

![](../../Desktop/Desktop_image/springlogo.png)
## MarketKurly clone Project - BackEnd
<div align="center">
<img width="940" alt="스크린샷 2022-04-20 오후 11 17 02" src="https://user-images.githubusercontent.com/98807506/164251304-7d922bbe-4bbd-4370-ba77-e3df065655ab.png">
 </div>

## 🤖 구현 기능
* 회원가입 : 회원가입 유효성 검사
* 로그인 : 로그인 유효성 검사
* 메인 페이지  
* 상세 페이지 : 후기 버튼 클릭시 위치 이동
* 후기 : CRUD, 이미지 전송
* 도움이 됐어요 : 좋아요 기능
* 장바구니 기능

## 🗓 프로젝트 기간
- 2022년 4월 15일 ~ 2022년 4월 21일
- 배포 : 2022년 4월 21일
- 유튜브 링크 : https://www.youtube.com/watch?v=-p60vltmd_g

## 👥 팀 소개
#### `Frontend`
 <a href="https://github.com/JIEUN24" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=최지은 &color=61dafb&style=for-the-badge&>"/></a>
 <a href="https://github.com/GYMMX" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=React&message=김가경 &color=61dafb&style=for-the-badge&>"/></a>

#### `Backend`
<a href="https://github.com/ksanacloud" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=이현재 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/EunheaSong" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=송은혜 &color=08CE5D&style=for-the-badge&>"/></a>
<a href="https://github.com/hyun-woong" target="_blank"><img height="40"  src="https://img.shields.io/static/v1?label=Spring&message=심현웅 &color=08CE5D&style=for-the-badge&>"/></a>


**[(Front-end github)](https://github.com/CloneMarketKurly/BE)**

## 📜 기술스택
<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Create React App-09D3AC?style=flat-square&logo=Create React App&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>

## 🏹 Trouble Shooting
- FormData를 보낼때 데이터 전달이 안되는 상황 발생
→ 서버에 FormData를 보낼 때 FormData를 감싸고 있는 { }를 지우니 해결

- 후기 수정하기 부분에서 useSelector을 이용하여 포스트 상세페이지 정보를 가져왔는데 find함수를 이용해 후기의 Id값과 params의 commentId값이 같은 것을 반환해야하는데 반환하지 못하는 문제 발생
→ 서버에서 받아온 제이슨 형식 데이터 안의 후기 ID값은 보기엔 숫자형태처럼 보이지만 숫자가 아니었기에 ===가 아닌 ==을 써서 해결

- 회원가입 유효성검사
→ 기존 정규식이 유효성 검사의 역할을 제대로 하지 못해, 정규식을 분리하여 조건을 걸어 사용하니 해결 됨.

- 장바구니 페이지에서 useSelector로 장바구니 리스트를 불러와 price 정보를 빼내는 과정에서 for문을 돌렸을 때 useSelector를 해 오기 전, 장바구니 리스트 반복문이 먼저 실행되어 오류 발생
→ for문 대신 map함수를 사용하여 똑같이 반복문을 돌리는데 [장바구니리스트.map()]을 [장바구니리스트 && 장바구니리스트.map()]으로 써서 문제 해결

## 🔨 API 설계 

<img width="984" alt="스크린샷 2022-04-20 오후 11 00 57" src="https://user-images.githubusercontent.com/98807506/164247995-de2e99fd-cf5a-46ea-80fa-5fd28344592c.png">
<img width="1040" alt="스크린샷 2022-04-20 오후 11 01 10" src="https://user-images.githubusercontent.com/98807506/164248017-4a7f6595-769f-415c-b672-b8257b829b0f.png">

## 🐳  ERD
![스크린샷 2022-04-20 오후 10 16 54](https://user-images.githubusercontent.com/98807506/164242191-692527fa-a6c4-4805-9dea-c906b7219b87.png)