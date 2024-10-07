# <개인 프로젝트> 리그 오브 레전드(LOL) 정보 앱 만들기

### [ Vercel 배포링크 바로가기 ](https://lol-dex-next-app.vercel.app/)

## 📖 목차

1. [프로젝트 소개](#👨‍🏫-프로젝트-소개)
2. [Getting Started](#Getting-Started)
3. [개발기간](#⏲️-개발기간)
4. [프로젝트 파일 구조](#📜-프로젝트-파일-구조)
5. [주요기능](#💜-주요기능)
6. [기술스택](#📚️-기술스택)
7. [Trouble Shooting](#trouble-shooting)

## 👨‍🏫 프로젝트 소개

- 주제 : 리그 오브 레전드(LoL)의 챔피언, 아이템, 무료 챔피언 로테이션 정보를 보여주는 웹 애플리케이션 만들기
- 내용 : Next.js와 TypeScript를 사용하여, Riot Games의 API와 Data Dragon을 활용하여 LoL의 다양한 데이터를 조회하고 화면에 표시하고, 사용자와 상호작용하는 웹 애플리케이션을 만드는 방법을 연습할 수 있다.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## ⏲️ 개발기간

- 2024.10.02(수) ~ 2024.10.08(화)

## 📜 프로젝트 파일 구조

```
📦public
 ┗ 📂images
 ┃ ┣ 📜blood_moon_sivir.jpg
 ┃ ┣ 📜icon.jpg
 ┃ ┣ 📜sivir.jpg
 ┃ ┗ 📜snowstorm_sivir.jpg
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┗ 📜ChampionDetail.tsx
 ┣ 📂types
 ┃ ┣ 📜champion.ts
 ┃ ┣ 📜championRotation.ts
 ┃ ┗ 📜item.ts
 ┗ 📂utils
      ┗ 📜serverApi.ts
```

## 💜 주요기능

#### 1. Next.js와 TypeScript를 사용하여 프로젝트를 생성

#### 2. 데이터 Fetching

- types/ 디렉토리에 필요한 타입들을 정의
- Server Actions를 활용하여 /champions, /items, /rotation 등의 데이터 페칭을 서버 컴포넌트 내에서 직접 처리
- Route Handlers는 클라이언트 사이드 렌더링(CSR)에서만 사용하는 /api/rotation 엔드포인트 하나만 유지
- fetch를 사용하여 외부 API를 호출하고, 적절한 에러 처리를 수행

#### 3. 각 페이지 구현 및 렌더링 방식 적용

- 챔피언 목록 페이지 (/champions): ISR 방식으로 구현하고, 챔피언 목록을 표시
- 챔피언 상세 페이지 (/champions/[id]): 동적 렌더링 방식으로 구현하고, 챔피언의 상세 정보를 표시, 동적 메타데이터를 생성
- 챔피언 로테이션 페이지 (/rotation): 클라이언트 사이드 렌더링으로 구현하고, 로테이션 정보를 표시
- 아이템 목록 페이지 (/items): SSG 방식으로 구현하고, 아이템 목록을 표시

#### 4. 레이아웃 및 네비게이션 구성

- 글로벌 레이아웃을 설정
- 네비게이션 메뉴를 추가하여 페이지 간 이동을 가능하게 함.

#### 5. 최종 점검 및 배포

- 최종 결과물에 any타입은 허용하지 않도록 타입 정의
- vercel로 배포

## 📚️ 기술스택

### ✔️ Language

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### ✔️ Version Control(버전관리)

Git을 이용한 분산버전관리(DVCS)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE(통합개발환경)

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### ✔️ Library

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### ✔️ Framework

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)

### ✔️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Trouble Shooting

### 1. 무료 챔피언 로테이션 정보 불러오기

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

### 1) 문제발생

로테이션 API를 통해 불러온 데이터(rotation)는 숫자 배열로 이루어져 있다.
freeChampionIds의 배열 속 숫자가 getChampions()해 온 데이터의 key 값과 같을 때, 해당 챔피언 데이터만 반환해주면 된다.

```ts
rotation {
  freeChampionIds: [숫자배열],
  freeChampionIdsForNewPlayers: [숫자배열],
  maxNewPlayerLevel: 10
}
```

```ts
champions [
  {
    id: 'Pyke',
    key: '555',
    name: '파이크',
    title: '핏빛 항구의 학살자',
    blurb: '빌지워터 학살의 부두에서 유명한 작살잡이였던 파이크는 거대한 자울치의 뱃속에서 죽음을 맞이할 운명이었지만… 살아 돌아왔다. 이제, 그는 옛 고향의 음습한 골목과 뒷길을 소리 없이 누비며, 타인을 이용하여 부를 쌓은 자들에게 그가 얻은 초자연적인 힘으로 빠르고 잔혹한 최후를 선사한다. 괴물을 사냥한다고 자부했던 도시는 이제 괴물에게 사냥당하고 있다.',
    info: { attack: 9, defense: 3, magic: 1, difficulty: 7 },
     ...
  },
{},{},…,{}
]
```

처음 작성한 코드는 아래와 같다.
그런데 이렇게 작성해서 filteredChampions를 콘솔로 확인해보니 빈배열이 나왔다.

```ts
const strFreeChampionIds = freeChampionIds.map((num) => String(num));
const filteredChampions = champions.filter((champion) =>
  freeChampionIds.includes(champion.key)
);
```

### 2) 원인추론

rotation에서 우리가 필요한 정보는 freeChampionIds라는 안에 바로 숫자가 들어있는 배열이다.
champions에서 비교해야하는 숫자는 배열안에, 객체 안에 'key'라는 키의 value값이다.
champions에서 필요한 내용을 불러오는 과정에서 rotation과 동일하게 생각했기 때문에 아무리 filter와 includes를 사용해도 결과가 빈 배열이 나왔던 것 같다.

### 3) 해결방법

배열메서드인 [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)와 [includes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)를 사용하는 것은 동일하나,
champions의 숫자인 key를 불러오기 위해 배열에서 객체를 접근하기 위해 **[Object.values()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values)**를 사용했다.
형변환(champion.key는 string이고, rotation의 key는 number로 [Number()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)를 사용)하여

**test라는 함수는 freeChampionIds에 들어있는 숫자와 일치하는 key의 챔피언 정보의 객체만 불러오게 된다.**

### 4) 결과 (CSR 방법으로 변경하기 전 코드)

![](https://github.com/user-attachments/assets/51eab5a9-2d97-4225-96dc-c65419ab2cce)

 <br>
</div>
</details>

### 2. 파비콘(Favicon) 이미지파일 위치

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

### 1) 문제발생

yarn build를 해도 파비콘 설정이 반영되지 않음.

```ts
export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "리그 오브 레전드 정보를 나타내는 next.js로 만든 앱입니다.",
  icons: { icon: "../public/icon.jpg" },
};
```

### 2) 원인추론

로컬 이미지를 담을 'public'폴더를 src폴더 하위폴더로 설정해둠.

### 3) 해결방법

'public'폴더를 src폴더와 동등한 위치로 이동하고, 'public'폴더 내에 'image'폴더를 생성하고 그 안에 이미지 파일을 저장함.

### 4) 결과

```ts
export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "리그 오브 레전드 정보를 나타내는 next.js로 만든 앱입니다.",
  icons: { icon: "/images/icon.jpg" },
};
```

(꼭 기존 프로젝트에 존재하던 Favicon.ico파일은 삭제할 것. 삭제하지 않으면 우선으로 반영되어 배포 시 반영이 안됨.)

 <br>
</div>
</details>

### 3. any타입 유무 확인

<details>
<summary>펼쳐보기</summary>
<div markdown="1">

### 1) 문제발생

로테이션 페이지에서,
빌드 시점 후로는 타입에러가 없었으나, vercel로 배포할 때 빌드 시 any타입에 대한 에러가 발생함.

### 2) 원인추론

타입을 확실하게 지정해주지 않아 rotation이나 champions의 데이터가 빈배열이 나올 수도 있기 때문에 타입 선언을 확실하게 해줘야 함.

### 3) 해결방법

마우스 커서를 올려 any타입이 나올 수도 있는 부분에 대하여 타입 선언을 했다.

### 4) 결과

![타입선언부분](https://github.com/user-attachments/assets/1518e3c0-d102-48fa-99b9-a2e41b76af3e)

 <br>
</div>
</details>
