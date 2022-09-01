# 🚇 지하철 좌석 실시간 정보 공유 웹 서비스, "너낼역" 

### 서비스 소개 

<img src="https://user-images.githubusercontent.com/81161750/187938375-e22d1cbf-6286-4ef9-b055-3128f50e05e3.png"  width="900" height="500"/>

지하철 좌석 실시간 정보 공유 웹 서비스! </br>
대중교통에서 매일 1시간 27분을 보내는 한국인, </br>
언제까지 눈치 싸움으로 자리를 차지하실 건가요?</br>
너낼역이 이제 지하철 실시간 좌석 정보를 제공합니다!</br>

한국인들은 유용한 지하철 좌석 실시간 정보 공유 경험을 통해 지하철 이용의 스트레스를 최소화 할 것 입니다. </br>

지하철 ‘좌석’ 현황 정보를 이용자들이 주도적으로 공유할 수 있는 서비스를 고안, </br>
이는 지하철 이용에 있어 수동적이었던 승객들에게 주도성을 양도한다는 점에서</br>
이전에는 존재하지 않았던 가치를 제공하는 전복적 서비스라고 볼 수 있습니다. </br>

기존의 지하철 이용에서의 승객들의 스트레스와 갈등을 해결하는 </br>
커뮤니티를 조성한다는 점에서 새로운 서비스입니다. </br>



[영상 보러가기 ](https://youtu.be/SMZjkCxMtDY)



## 🚇 프론트엔드 팀원 소개

<table border="" cellspacing="0" cellpadding="0" width="100%">
    <tr width="100%">
        <td align="center"><a href= "https://github.com/dy6578ekdbs">정다윤</a></td>
        <td  align="center"><a href= "https://github.com/miinjoo">김민주</a></td>
        <td  align="center"><a href= "">허윤</a></td>
    </tr>
    <tr width="100%">
       <td  align="center">
        <p> 좌석 선택 & 공유 기능 구현</p>
        <p> 로그인&로그아웃 기능 구현</p></td>
      <td  align="center">
      <p> eye 충전&사용 기능 구현</p>
        </td>
      <td  align="center">미정</td>
   </tr>
</table>

<br> 

## 🚇 개발 일정

- 기획 : 2022 7월 5일 ~
- 개발 : 2022 7월 14일 ~
- 배포 : 2022년 8월 19일

<br> 

</br> 

## 🚇 프로젝트 시작

```
npm install
npm start
```

</br>

## 🚇 기술 스택

- Frontend : <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/ReduxPersist-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white">  
- Package Manager : <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white">
- Code Formmater : <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=React&logoColor=white">
- Depoly : <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white">

</br>

## 🚇 라이브러리

```
"@reduxjs/toolkit": "^1.8.3",
"axios": "^0.27.2",
"node-sass": "^7.0.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-redux": "^8.0.2",
"react-router-dom": "^6.3.0",
"react-scripts": "5.0.1",
"redux": "^4.2.0",
"redux-persist": "^6.0.0",
"styled-components": "^5.3.5",
```

<br> 

## 🚇 기능 구현
1. 로그인 유지 - redux-toolkit, redux-persist
2. 로그인, 회원가입 - JWT 토큰 인증 방식 
3. eye 충전, 사용

</br>

## 🚇 프로젝트 구조

### 프로젝트 구성
<이미지 첨부 예정> 

### 폴더 구조
```
📂 src
├─ 📂 components  ▶️ 컴포넌트
├─ 📂 images  ▶️ svg 파일 모음
├─ 📂 pages  ▶️ 조건에 따라 라우팅되는 페이지
├─ 📂 style  ▶️ 공통적으로 사용되는 스타일 값
├─ 📂 api  ▶️ api 사용을 위한 axios 함수 모음
├─ 📂 store  ▶️ 로그인 유지를 위한 userSlice
└─ 📂 data ▶️ 샘플 데이터

```
