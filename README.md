React 학생 출석부 프로젝트
React와 TypeScript를 활용하여 개발한 학생 출석 관리 웹 애플리케이션입니다.

1. 프로젝트 소개
학생 정보를 등록하고 날짜별 출석 및 결석 상태를 관리할 수 있는 출석부 프로그램입니다.

2. 개발 환경
React 19
TypeScript
Vite 8
CSS
JavaScript
3. 주요 기능
학생 추가 및 삭제
학생 이름 수정
학생 이름 검색
날짜별 출석 및 결석 관리
전체 학생 수 통계
출석 인원 통계
결석 인원 통계
미확인 인원 통계
LocalStorage를 이용한 데이터 저장
기존 학생 데이터 형식 변환 지원
4. React 주요 학습 기술
useState
useReducer
useEffect
useMemo
useCallback
React.memo
Props 및 TypeScript 타입 관리
컴포넌트 분리 및 재사용
5. 프로젝트 구조

text
src/
├── components/
│   ├── Dashboard.tsx
│   ├── StatCard.tsx
│   ├── Student.tsx
│   ├── StudentForm.tsx
│   └── StudentList.tsx
├── constants/
│   └── ActionTypes.ts
├── reducers/
│   └── studentReducer.ts
├── types/
│   └── Students.ts
├── utils/
│   ├── date.ts
│   ├── studentStatistics.ts
│   ├── studentStorage.ts
│   └── studentValidation.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
6. 프로젝트 실행 방법
프로젝트를 다운로드한 후 터미널에서 다음 명령어를 실행합니다.


bash
npm install
npm run dev
7. 프로젝트 빌드

bash
npm run build
빌드 결과물은 dist 폴더에 생성됩니다.

8. 데이터 저장
학생 데이터는 브라우저의 LocalStorage에 저장됩니다.

9. Git 관리
Git과 GitHub를 활용하여 프로젝트의 버전 관리 및 소스 코드 백업을 진행합니다.

10. Git 협업 실습
Git 브랜치를 활용한 협업 과정을 학습합니다.

feature 브랜치를 이용한 독립적인 기능 개발
GitHub 원격 저장소에 브랜치 push
Pull Request 생성 및 관리
코드 리뷰와 변경 사항 검토
Pull Request를 통한 브랜치 병합