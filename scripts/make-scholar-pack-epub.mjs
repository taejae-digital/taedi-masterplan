import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { execFileSync } from 'child_process';

const root = process.cwd();
const easyScript = fs.readFileSync(path.join(root, 'scripts/render-scholar-pack-fable-easy.mjs'), 'utf8');
const bookScript = fs.readFileSync(path.join(root, 'scripts/render-scholar-pack-book.mjs'), 'utf8');
const citedSrc = easyScript.match(/const cited=([\s\S]*?);\n\n\/\/ ============ 후보/)[1];
const candidatesSrc = easyScript.match(/const candidates=([\s\S]*?);\n\nconst G=/)[1];
const baseCited = vm.runInNewContext('(' + citedSrc + ')');
const baseCandidates = vm.runInNewContext('(' + candidatesSrc + ')');
const promotedFnSrc = bookScript.match(/function promotedScholars\(\) \{([\s\S]*?)\n\}\n\nconst promoted/)[0].replace(/\n\nconst promoted[\s\S]*$/,'');
const promoted = vm.runInNewContext(`${promotedFnSrc}; promotedScholars();`);
const allCited = [...baseCited, ...promoted];
const remainingCandidates = baseCandidates.filter(c => !['요하이 벤클러', '에드워드 글레이저', '앨리슨 고프닉'].includes(c[0]));

const imgDirs = [path.join(root, 'drafts/scholar-images-parallel'), path.join(root, 'drafts/scholar-images')];
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function findImg(en) {
  for (const d of imgDirs) {
    if (!fs.existsSync(d)) continue;
    for (const ext of ['.jpg', '.jpeg', '.png', '.webp']) {
      const p = path.join(d, slug(en) + ext);
      if (fs.existsSync(p)) return p;
    }
  }
  return '';
}

function esc(s) { return String(s || '').replace(/\|/g, '\\|'); }
function mdPara(s) { return String(s || '').replace(/\s+/g, ' ').trim() + '\n'; }
function scholarMd(s, i) {
  const img = findImg(s.en);
  return `# ${String(i + 1).padStart(2, '0')} ${s.ko}\n\n` +
    `${img ? `![${s.ko}](${img})\n\n` : ''}` +
    `*${s.en}*  \n${s.axisNo} · ${s.axis}  \n${s.place} — ${s.field}\n\n` +
    `## 누구인가\n\n${mdPara(s.bio)}\n` +
    `## 학파 — 학문적 배경\n\n${mdPara(s.school)}\n` +
    `## 핵심 주장의 전개\n\n${mdPara(s.claim1)}\n${mdPara(s.claim2)}\n` +
    `## 처음 읽는 사람을 위한 용어 풀이\n\n` +
    s.glossary.map(g => `- **${g[0]}**: ${g[1]}`).join('\n') + '\n\n' +
    `## 학계 내 위치와 논쟁\n\n${mdPara(s.position)}\n` +
    `## 마스터플랜과의 연결\n\n${mdPara(s.connect)}\n` +
    `## 핵심 개념\n\n` +
    s.concepts.map(c => `- **${c[0]}**: ${c[1]}`).join('\n') + '\n\n' +
    `## 읽을 자료\n\n` +
    s.readings.map(r => `- **${r[0]}**: ${r[1]}`).join('\n') + '\n\n' +
    `## 논쟁 지점\n\n` +
    (Array.isArray(s.debates) ? s.debates : [s.debates]).map(d => `- ${d}`).join('\n') + '\n\n' +
    `## 자문 질문\n\n> ${s.ask}\n\n`;
}

let md = `---\ntitle: "학자 학습자료: Scholar Learning Pack — Book Edition"\nauthor: "Taejae Future Consensus Institute"\nlang: ko-KR\nrights: "TAEJAE FUTURE CONSENSUS INSTITUTE"\n---\n\n`;
md += `# 표지\n\n**학자 학습자료**  \n*Scholar Learning Pack — EPUB Edition*\n\n마스터플랜의 문장 뒤에 놓인 학문적 계보를 책처럼 읽기 위한 전자책판이다. 인용 학자 13명을 중심으로, “누구인가 — 어느 학파에서 왔는가 — 무엇을 주장했는가 — 어떤 비판을 받는가 — 마스터플랜과 어떻게 연결되는가”를 줄글로 이어 읽는다.\n\nTAEJAE FUTURE CONSENSUS INSTITUTE\n\n`;
md += `# 서문 — 왜 학자 학습자료를 책처럼 읽어야 하는가\n\n마스터플랜은 단순한 정책 아이디어 모음이 아니라 하나의 인과 구조다. AI·데이터·컴퓨팅이 생산비를 낮추고, 생산의 단위가 조직에서 개인으로 내려오며, 개인은 더 이상 평균적 시민·평균적 노동자로만 설명되지 않는다. 이 변화는 경제질서의 전환이고, 동시에 정치질서의 전환이며, 끝내 사회계약의 전환이다. 이 구조를 설득하려면 한두 명의 유명 학자를 인용하는 것으로는 부족하다. 각 주장이 어느 학문 전통에서 나왔는지, 어떤 비판을 받는지, 서로 어디서 충돌하는지까지 알아야 한다.\n\n그래서 이 자료는 요약 카드가 아니라 독서용 책의 형식으로 다시 짰다. 브린욜프슨을 읽을 때는 생산성 역설과 보완재 경제학을 알아야 하고, 서스킨드를 읽을 때는 노동경제학의 루틴화 가설을 알아야 한다. 마추카토는 슘페터와 폴라니의 계보 위에 있고, 아세모글루는 노스의 제도경제학을 권력 이론으로 급진화했다. 주보프는 빅테크 비판가이기 전에 일터의 컴퓨터화를 연구한 조직사회학자였고, 플로리디는 윤리학자가 아니라 정보철학 전체를 새로 세우려 한 사람이다.\n\n`;
md += `# 읽기 지도\n\n## O1 · 경제질서 — 생산의 주인이 바뀐다\n\n브린욜프슨, 서스킨드, 마추카토, 앤더슨, 벤클러를 함께 읽는다. AI가 생산비를 낮출 때 개인과 공동체가 생산자가 되는 조건, 공공 인프라와 개방형 협업의 설계를 다룬다.\n\n## O2 · 정치질서 — 권력의 자리가 바뀐다\n\n아세모글루, 벤지오, 플로리다, 글레이저를 함께 읽는다. 기술 방향의 민주적 조정, AI 안전 검증, 도시의 학습 밀도와 권력 재배치를 다룬다.\n\n## O3 · 사회계약 — 보장의 내용이 바뀐다\n\n주보프, 플로리디, 오스트롬, 고프닉을 함께 읽는다. 플랫폼 권력, 정보환경, 공유지 규칙, 정체성 발견의 생활 기반을 다룬다.\n\n`;
md += `# 마스터플랜의 인과 사슬\n\n첫째, 기술은 생산비를 낮춘다. 그러나 브린욜프슨이 말하듯 기술은 혼자 작동하지 않는다. 조직 재설계, 데이터, 인재, 제도가 함께 바뀌어야 생산성이 오른다. 둘째, 일의 의미가 바뀐다. 서스킨드는 일자리가 단지 소득 장치가 아니라 의미와 지위를 배분해 왔다고 본다. AI가 고용의 형태를 흔들면, 사회는 소득과 의미를 다시 묶어야 한다. 셋째, 국가는 시장을 보정하는 데서 멈출 수 없다. 마추카토가 말하듯 공공 투자는 아직 없는 시장의 방향을 만든다.\n\n넷째, 권력은 기술 안에 들어간다. 아세모글루는 기술의 이익이 자동으로 공유되지 않으며, 권력과 제도가 방향을 정한다고 말한다. 벤지오는 최첨단 AI의 안전이 기업 자율에 맡겨질 수 없다고 경고한다. 다섯째, 개인의 정체성은 정보환경 안에서 형성된다. 주보프와 플로리디는 데이터와 추천과 인터페이스가 인간의 선택지를 배열하는 권력임을 보여 준다. 마지막으로 오스트롬과 고프닉은 보장의 단위를 생활 세계로 끌어내린다. 공유지는 규칙이 있어야 지속되고, 정체성은 지시가 아니라 탐색의 환경 속에서 자란다.\n\n`;
md += allCited.map((s, i) => scholarMd(s, i)).join('\n');
md += `# 부록 — 확장 독서 후보\n\n인용 학자 13명을 둘러싼 논쟁을 넓히기 위한 후보군이다. 자문·세미나 초청 후보이자, 인용 학자들이 받는 비판의 출처이기도 하다.\n\n`;
remainingCandidates.forEach((c, i) => {
  md += `## ${String(i + 1).padStart(2, '0')} ${c[0]}\n\n*${c[1]}*  \n${c[2]}\n\n${mdPara(c[3])}\n**마스터플랜 활용 —** ${c[4]}\n\n`;
});

const outMd = path.join(root, 'drafts/scholar-learning-pack-epub.md');
const outCss = path.join(root, 'drafts/scholar-learning-pack-epub.css');
const outEpub = path.join(root, 'archive/pdf/scholar-learning-pack-v0.11.5-book-optimized.epub');
fs.writeFileSync(outMd, md);
fs.writeFileSync(outCss, `
body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif; line-height: 1.72; color: #20242b; }
h1 { font-size: 1.7em; line-height: 1.28; margin: 1.2em 0 .55em; color: #15171c; }
h2 { font-size: 1.15em; margin: 1.15em 0 .45em; border-bottom: 1px solid #ddd7ca; padding-bottom: .25em; color: #15171c; }
p { margin: 0 0 .92em; }
blockquote { border-left: .28em solid #b58a1e; margin: 1em 0; padding: .2em 0 .2em .9em; color: #333840; font-weight: 600; }
ul { padding-left: 1.35em; }
li { margin: .35em 0; }
img { max-width: 42%; height: auto; display: block; margin: .6em auto 1em; border-radius: 999px; }
em { color: #6a6f78; }
strong { color: #15171c; }
`, 'utf8');
execFileSync('pandoc', [outMd, '-f', 'markdown+smart', '-t', 'epub3', '--toc', '--toc-depth=2', '--split-level=1', '--css', outCss, '--metadata', 'title=학자 학습자료: Scholar Learning Pack — Book Edition', '--metadata', 'author=Taejae Future Consensus Institute', '--metadata', 'lang=ko-KR', '-o', outEpub], { stdio: 'inherit' });
console.log('MD written:', outMd);
console.log('CSS written:', outCss);
console.log('EPUB written:', outEpub);
console.log('Chapters:', allCited.length + 4 + 1);
console.log('Scholars:', allCited.map(s => s.ko).join(', '));
