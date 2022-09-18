# 주제: 구글 캘린더 API를 활용한 주간 캘린더

배포링크: https://bcl-abs-calendar.vercel.app

## 사용기술

- React.js
- styled-component

## 요구사항

- [x] 크게 하나의 페이지(주간 일정)로 구성한다.
- [x] 진입 화면에는 주간 일정만 보인다.
- [x] 이전 주, 다음 주 이동이 가능해야 한다.
- [ ] 구글의 calendar api를 사용하여 화면에 일정 표시한다.
- [x] 새로운 일정을 입력하는 화면, 존재하는 일정을 보는 화면은 모달로 구성한다.
- [ ] 생성된 일정은 구글 calendar api를 사용하여 저장한다.
- [x] 존재하는 일정을 수정 하는 화면은 없어도 된다.
- [ ] 새로운 일정이 저장될때 저장의 성공, 실패 여부를 alert으로 알려주어야 한다.
- [x] 일정 내용은 제목, 내용, 종류 3가지는 최소로 입력 가능해야 한다.
- [x] 디자인은 중요하지 않다.
- [x] Responsive는 고려하지 않아도 된다.
- [x] 리액트로 개발해야 한다.

## 파일트리

```
components : 재사용 가능한 컴포넌트 집합
pages : 유저가 보는 실제 콘텐츠
constants : 전역으로 사용되는 상수 집합
global: 전역으로 사용되는 스타일 집합
utils: 모듈화한 함수 집합


├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│
└─src
    │  App.jsx
    │  App.test.js
    │  index.js
    │
    ├─components
    │  │  Day.jsx
    │  │  GoogleAPI.jsx
    │  │  Schedule.jsx
    │  │  Week.jsx
    │  │
    │  └─createScheduleModal
    │          CreateScheduleModal.jsx
    │          Styles.jsx
    │
    ├─constants
    │      index.jsx
    │
    ├─global
    │      global.css
    │      reset.css
    │
    ├─pages
    │  ├─home
    │  │      Home.jsx
    │  │      Styles.jsx
    │  │
    │  └─login
    │          Login.jsx
    │          Styles.jsx
    │
    └─utils
            getDate.jsx
```
