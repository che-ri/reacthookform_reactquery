# reacthookform_reactquery

> 패키지

-   react
-   react-hook-form
-   react-query
-   json-server

<br/>

> 실행

-   yarn db
-   yarn start

<br/>

## Work

> react-query

-   데이터를 React-query만으로 관리한다
-   error처리를 ErrorBoundary로 해결한다. (ErrorBoundary는 직접 만든다.)
-   loading는 React.Suspense을 활용한다.

> react-hook-form

-   validation이 가능하도록 만든다.
-   react-hook-form의 리렌더링 최소화 장점을 살린다.
-   재사용가능한 컴포넌트로 만들어서 사용한다.

> UI/UX

-   홈에서 사이트의 정체성을 드러낸다.
-   좌상단에는 사이트ID가 있으며, 클릭시 홈으로 돌아갈 수 있어야한다.
-   위치를 알 수 있도록 상단에 페이지이름을 명시한다.
-   header에 현재 활성화중인 페이지 표시

> Extra

-   전역 에러처리 + 지역 에러처리를 한다.
-   전역 로딩처리 + 지역 로딩처리를 한다.
