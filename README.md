## Styles

### Week7

1. 상단 네비게이션 바, 푸터를 랜딩 페이지와 동일한 스타일과 규칙으로 만듭니다. (week 1 ~ 3 요구사항 참고)
2. Static, no image, Hover 상태 디자인을 보여주는 카드 컴포넌트를 만듭니다.
3. Hover 상태에서 이미지가 기본 크기의 130%로 변합니다.
4. 카드 컴포넌트를 클릭하면 해당 링크로 새로운 창을 띄워서 이동합니다.
5. Tablet에서 카드 리스트가 화면의 너비 1124px를 기준으로 이상일 때는 3열로 작을 때는 2열로 배치됩니다.
6. Tablet, Mobile에서 좌우 최소 여백은 32px 입니다.

### Week8

1. 반응형을 위한 스타일코드들을 리팩토링 합니다.

## API & Logic

### Week7

1. 상단 네비게이션 바에 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sample/user”를 활용합니다.
2. 상단 네비게이션 바에 프로필 영역의 데이터가 없는 경우 “로그인” 버튼이 보이도록 만듭니다.
3. 폴더 소유자, 폴더 이름 영역, 링크들에 대한 데이터는 “/api/sample/folder”를 활용합니다.
4. 커스텀 hook을 만들어 사용합니다.(선택)
5. shared 페이지는 외부 유저에게 자신의 폴더 데이터 하나를 공유할 때 유저가 보게되는 화면 입니다.
6. 카드 컴포넌트에서 createdAt 데이터 기준으로 현재 Date와 차이에 따라 아래와 같은 규칙으로 설정해 주세요.
   - 2분 미만은 “1 minute ago”
   - 59분 이하는 “OO minutes ago”
   - 60분 이상은 “1 hour ago”
   - 23시간 이하는 “OO hours ago”
   - 24시간 이상은 “1 day ago”
   - 30일 이하는 “OO days ago”
   - 31일 이상은 “1 month ago”
   - 11달 이하는 “OO months ago”
   - 12달 이상은 “1 year ago”
   - OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”

### Week8

1. useEffect 훅의 내부로직과 디펜던스를 올바르게 수정합니다.
2. api와 util함수들을 디렉토리를 따로 생성해 관리를 쉽게 합니다.
3. GNB의 네이밍을 더 목적에 맞게 수정합니다.
4. 시간경과 함수의 하드코딩이 된 부분을 더 명확하고 깔끔하게 수정합니다.
5. 시간경과 함수의 조건문을 수정합니다.