# PDF 생성 가이드

마스터플랜 페이지를 A3 가로 PDF로 출력하는 방법.

## 전제

- Node.js + puppeteer 설치되어 있음 (이미 `node_modules` 에 있음).
- 개발 서버가 `http://localhost:3000` 에서 실행 중이어야 함.

```bash
# dev 서버 실행 (백그라운드)
yarn dev
# 또는 이미 떠 있는지 확인:
lsof -i :3000 -t
```

## 새 버전 PDF 만들기

### 1. 스크립트 생성

기존 `make_v099_pdf.js` 를 복사해서 버전만 바꿔라. 절대 처음부터 짜지 마라.

```bash
cp make_v099_pdf.js make_v100_pdf.js
```

그리고 `make_v100_pdf.js` 안의 두 곳만 수정:

```js
await page.goto('http://localhost:3000/mp/v0.10.0', { ... });   // 라우트
await page.pdf({ path: '/Users/will_ryu/workspace/consulting/taejae/taedi-masterplan/narrative/masterplan-v0.10.0.pdf', ... });   // 출력 경로 (절대경로)
```

라우트 형식은 `/mp/v{semver}` — 예: `/mp/v0.9.9`, `/mp/v0.10.0`.

### 2. 실행

```bash
node make_v100_pdf.js
```

성공하면 `narrative/masterplan-v{version}.pdf` 생성됨.

## 표준 옵션 (수정 금지)

`make_v{version}_pdf.js` 의 다음 옵션은 그대로 유지하라:

- viewport: `{ width: 1600, height: 1131 }` — A3 가로 비율
- format: `'A3'`, landscape: `true`, printBackground: `true`
- margin: 전부 `'0'`
- waitUntil: `'networkidle0'`, timeout: `90000`
- `await new Promise(r => setTimeout(r, 3000));` — 폰트·이미지 로딩 대기

## 흔한 삽질

- **PDF 가 빈 페이지로 나옴** → dev 서버가 안 떠 있음. `yarn dev` 먼저.
- **이미지가 안 나옴** → networkidle0 대기가 짧을 수 있음. setTimeout 시간을 늘려라.
- **A3 가 아닌 A4 로 나옴** → format/landscape 옵션 확인.
- **`Cannot find module 'puppeteer'`** → 프로젝트 루트에서 실행하라 (`cd taedi-masterplan`).
- **버전 번호 안 바꾸고 그냥 실행** → 다른 버전 PDF 가 덮어쓰여진다. URL 과 path 둘 다 바꿨는지 재확인.

## 일괄 정리

오래된 `make_v*_pdf.js` 가 너무 많다. 새 PDF 생성 후 옛 스크립트는 삭제해도 됨 (`git rm make_v0XX_pdf.js`). 현재 활용되는 것은 최신 1–2개.
