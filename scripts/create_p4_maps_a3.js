const fs = require('fs');
const path = require('path');
const d3 = require('d3-geo');
const sharp = require('sharp');

const W = 4961; // A3 landscape 300dpi
const H = 3508;
const geo = JSON.parse(fs.readFileSync('/tmp/countries.geojson','utf8'));
const find = (name) => geo.features.find(f => (f.properties.ADMIN || f.properties.name) === name);
const usa = find('United States of America');
const korea = find('South Korea');
const north = find('North Korea');
const japan = find('Japan');
const china = find('China');
const russia = find('Russia');

function esc(s){ return String(s).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
function pathFor(feature, projection){ return d3.geoPath(projection)(feature) || ''; }

const navy = '#123A5B';
const accent = '#D45A2A';
const gold = '#D7A84F';
const bg = '#F7F3EA';
const panel = '#FFFFFF';
const line = '#D9D1C4';

const usProjection = d3.geoAlbersUsa().fitExtent([[245, 965], [2380, 2550]], usa);
const asiaFeature = { type:'FeatureCollection', features:[china, north, korea, japan, russia].filter(Boolean) };
const krProjection = d3.geoMercator().fitExtent([[2845, 890], [4635, 2605]], asiaFeature);
const krOnlyProjection = d3.geoMercator().fitExtent([[3495, 1010], [4410, 2530]], { type:'FeatureCollection', features:[north, korea].filter(Boolean) });

function dot(proj, lon, lat, label, sub, color=accent){
  const [x,y] = proj([lon,lat]);
  return `<g>
    <circle cx="${x}" cy="${y}" r="20" fill="${color}" opacity="0.92"/>
    <circle cx="${x}" cy="${y}" r="42" fill="none" stroke="${color}" stroke-width="5" opacity="0.28"/>
    <text x="${x+48}" y="${y-8}" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="38" font-weight="900" fill="${navy}">${esc(label)}</text>
    <text x="${x+48}" y="${y+35}" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="27" font-weight="650" fill="#5C6570">${esc(sub)}</text>
  </g>`;
}

const usDots = [
  [-122.3,37.8,'서부 AI·플랫폼','AI 모델·금융·표준'],
  [-97.7,30.3,'남부 반도체','설계·제조 투자'],
  [-83.0,42.3,'중서부 제조','전기차·배터리'],
  [-74.0,40.7,'동부 규범·금융','외교·시장·안보'],
].map(d=>dot(usProjection,...d)).join('\n');

const krDots = [
  [126.98,37.56,'수도권','AI·데이터·정책'],
  [127.38,36.35,'충청','반도체·배터리'],
  [129.07,35.18,'동남권','조선·해양물류'],
  [126.85,35.16,'남부권','문화·교육·관광'],
  [128.6,37.7,'동해권','에너지·기후·바이오'],
].map(d=>dot(krOnlyProjection,...d, accent)).join('\n');

const usaPath = pathFor(usa, usProjection);
const koreaPath = pathFor(korea, krOnlyProjection);
const northPath = pathFor(north, krOnlyProjection);
const japanPath = pathFor(japan, krProjection);
const chinaPath = pathFor(china, krProjection);
const russiaPath = pathFor(russia, krProjection);

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#FBF8F0"/><stop offset="1" stop-color="#EFE7DA"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#6B5B45" flood-opacity="0.14"/></filter>
    <marker id="arrow" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto"><path d="M0,0 L16,8 L0,16 z" fill="${accent}" opacity="0.85"/></marker>
    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0H0V80" fill="none" stroke="#E6DED2" stroke-width="2" opacity="0.45"/></pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#grid)" opacity="0.62"/>

  <text x="245" y="205" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="76" font-weight="950" fill="${navy}">P4 지도 자산 — 미국 산업축과 한반도 산업생태계</text>
  <text x="245" y="282" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="38" font-weight="700" fill="#5E6670">미·중 협력 구조는 외교 구호가 아니라 산업적 상호필요에서 출발한다</text>

  <rect x="185" y="430" width="2240" height="2310" rx="54" fill="${panel}" filter="url(#shadow)"/>
  <rect x="2535" y="430" width="2240" height="2310" rx="54" fill="${panel}" filter="url(#shadow)"/>

  <text x="300" y="560" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="54" font-weight="950" fill="${navy}">미국: AI·표준·금융·안보 축</text>
  <text x="300" y="620" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="30" font-weight="700" fill="#606A75">한국이 신뢰 가능한 첨단제조·메모리·배터리·조선 파트너가 되는 공간</text>

  <text x="2650" y="560" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="54" font-weight="950" fill="${navy}">한반도: 15개 미래산업 권역 생태계</text>
  <text x="2650" y="620" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="30" font-weight="700" fill="#606A75">산업·도시·7대분야·선출직 인재를 묶는 디지털 사회계약의 실행 거점</text>

  <path d="${usaPath}" fill="#E9F0F4" stroke="${navy}" stroke-width="7" opacity="0.98"/>
  ${usDots}

  <path d="${chinaPath}" fill="#EFE6DA" stroke="#C7B9A8" stroke-width="4" opacity="0.36"/>
  <path d="${russiaPath}" fill="#EFE6DA" stroke="#C7B9A8" stroke-width="4" opacity="0.28"/>
  <path d="${japanPath}" fill="#EFE6DA" stroke="#C7B9A8" stroke-width="5" opacity="0.52"/>
  <path d="${northPath}" fill="#E3E8E7" stroke="#8C9AA0" stroke-width="5" opacity="0.92"/>
  <path d="${koreaPath}" fill="#FBE4D6" stroke="${accent}" stroke-width="8" opacity="0.98"/>
  ${krDots}

  <path d="M2310 1480 C2600 1170, 2860 1170, 3140 1465" fill="none" stroke="${accent}" stroke-width="12" stroke-linecap="round" opacity="0.82" marker-end="url(#arrow)"/>
  <path d="M3140 1645 C2860 1935, 2600 1935, 2310 1660" fill="none" stroke="${navy}" stroke-width="8" stroke-linecap="round" opacity="0.45" marker-end="url(#arrow)"/>
  <text x="2170" y="1380" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="34" font-weight="900" fill="${accent}" text-anchor="middle">산업적 상호필요</text>
  <text x="2805" y="1835" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="32" font-weight="900" fill="${navy}" text-anchor="middle">공동검증·공급망·표준</text>

  <rect x="320" y="2815" width="4320" height="420" rx="38" fill="#123A5B" opacity="0.96"/>
  <text x="430" y="2918" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="44" font-weight="950" fill="#FFFFFF">새 사회계약의 지도 논리</text>
  <text x="430" y="2992" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="34" font-weight="750" fill="#F7E9D0">① 세계 산업축을 협력 의제로 묶는다  ② 한반도 권역별 산업생태계를 만든다  ③ 7대분야를 초일류 제도 역량으로 바꾼다  ④ 선출직 인재가 권한 구조를 실행한다</text>
  <text x="430" y="3070" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="34" font-weight="750" fill="#F7E9D0">목표: 미·중이 협력하고 한반도가 중심이 되는 안전하고 건강한 디지털 세계</text>

  <text x="245" y="3405" font-family="Pretendard, Apple SD Gothic Neo, Arial" font-size="25" font-weight="650" fill="#7A7064">A3 horizontal landscape · 4961×3508px · generated for masterplan P4 · ${new Date().toISOString().slice(0,10)}</text>
</svg>`;

const outSvg = path.resolve('assets/generated/p4-us-korea-map-a3-v0991.svg');
const outPng = path.resolve('assets/generated/p4-us-korea-map-a3-v0991.png');
fs.writeFileSync(outSvg, svg);
sharp(Buffer.from(svg)).png().toFile(outPng).then(info => {
  console.log('svg', outSvg);
  console.log('png', outPng, info.width, info.height, info.size);
}).catch(err => { console.error(err); process.exit(1); });
