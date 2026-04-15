'use client';

import { useEffect, useState } from 'react';

interface NarrativeIndex {
  filename: string;
  version: string;
  slug: string;
}

interface NarrativeFile {
  filename: string;
  version: string;
  slug: string;
  content: string;
}

export default function NarrativePage() {
  const [index, setIndex] = useState<NarrativeIndex[]>([]);
  const [files, setFiles] = useState<NarrativeFile[]>([]);
  const [selected, setSelected] = useState('');
  const [showDiff, setShowDiff] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState(false);
  const [error, setError] = useState('');

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  useEffect(() => {
    fetch(`${basePath}/data/narratives-index.json`)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((data: NarrativeIndex[]) => {
        setIndex(data);
        if (data.length > 0) setSelected(data[0].version);
      })
      .catch(err => setError(`인덱스 로드 실패: ${err.message}`))
      .finally(() => setLoading(false));
  }, []);

  // 선택된 버전 + 이전 버전 content 로드
  useEffect(() => {
    if (!selected || index.length === 0) return;
    const idx = index.findIndex(f => f.version === selected);
    const toLoad = [index[idx], idx + 1 < index.length ? index[idx + 1] : null].filter(Boolean) as NarrativeIndex[];
    setLoadingContent(true);
    Promise.all(
      toLoad.map(item =>
        fetch(`${basePath}/data/narratives/${item.slug}.json`).then(r => {
          if (!r.ok) throw new Error(`HTTP ${r.status} for ${item.slug}`);
          return r.json();
        })
      )
    ).then(results => {
      setFiles(results);
    })
    .catch(err => setError(`콘텐츠 로드 실패: ${err.message}`))
    .finally(() => setLoadingContent(false));
  }, [selected, index]);

  const current = files.find(f => f.version === selected);
  const idxInIndex = index.findIndex(f => f.version === selected);
  const prevVersion = idxInIndex >= 0 && idxInIndex + 1 < index.length ? index[idxInIndex + 1].version : null;
  const previous = prevVersion ? files.find(f => f.version === prevVersion) : null;

  if (loading) return <div style={{ padding: 40, fontFamily: 'sans-serif' }}>로딩 중...</div>;
  if (error) return <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#dc2626' }}>{error}</div>;
  if (index.length === 0) return <div style={{ padding: 40 }}>파일 없음</div>;
  if (loadingContent || !current) return <div style={{ padding: 40 }}>콘텐츠 로딩 중...</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'Asta Sans, Pretendard, sans-serif' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 32px' }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#0f172a', margin: 0 }}>태재디지털팀 네러티브</h1>
          <p style={{ color: '#64748b', marginTop: 8, fontSize: 14 }}>개인의 시대 · 버전 히스토리</p>
        </div>

        {/* Controls */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', marginBottom: 28, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>버전</label>
            <select
              value={selected}
              onChange={e => { setSelected(e.target.value); setShowDiff(false); }}
              style={{ fontSize: 14, padding: '8px 12px', borderRadius: 8, border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer', minWidth: 260 }}
            >
              {index.map(f => (
                <option key={f.version + f.filename} value={f.version}>{f.version} — {f.filename}</option>
              ))}
            </select>
          </div>

          {previous && (
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: '#475569' }}>
                <input
                  type="checkbox"
                  checked={showDiff}
                  onChange={e => setShowDiff(e.target.checked)}
                  style={{ width: 16, height: 16, cursor: 'pointer' }}
                />
                이전 버전과 비교 <span style={{ color: '#94a3b8' }}>({previous.version})</span>
              </label>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          {showDiff && previous ? (
            <DiffView oldText={previous.content} newText={current.content} />
          ) : (
            <MarkdownView content={current.content} />
          )}
        </div>
      </div>
    </div>
  );
}

function MarkdownView({ content }: { content: string }) {
  const lines = content.split('\n');
  return (
    <div style={{ padding: '40px 48px', lineHeight: 1.8, color: '#1e293b' }}>
      {lines.map((line, i) => {
        if (line.startsWith('# ')) return <h1 key={i} style={{ fontSize: 26, fontWeight: 700, marginTop: 24, marginBottom: 12, color: '#0f172a' }}>{line.slice(2)}</h1>;
        if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: 20, fontWeight: 700, marginTop: 28, marginBottom: 8, color: '#1e293b' }}>{line.slice(3)}</h2>;
        if (line.startsWith('### ')) return <h3 key={i} style={{ fontSize: 16, fontWeight: 700, marginTop: 20, marginBottom: 6, color: '#334155' }}>{line.slice(4)}</h3>;
        if (line.startsWith('> ')) return <blockquote key={i} style={{ borderLeft: '4px solid #3b82f6', paddingLeft: 16, margin: '12px 0', color: '#475569', fontStyle: 'italic' }}>{line.slice(2)}</blockquote>;
        if (line.startsWith('---')) return <hr key={i} style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '24px 0' }} />;
        if (line === '') return <div key={i} style={{ height: 12 }} />;
        return <p key={i} style={{ margin: '4px 0', fontSize: 15 }}>{line}</p>;
      })}
    </div>
  );
}

function DiffView({ oldText, newText }: { oldText: string; newText: string }) {
  const oldLines = oldText.split('\n');
  const newLines = newText.split('\n');

  // LCS 기반 단순 diff
  const diff = computeDiff(oldLines, newLines);

  return (
    <div style={{ fontSize: 13, fontFamily: 'monospace', overflowX: 'auto' }}>
      <div style={{ padding: '12px 20px', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: 32, fontSize: 12 }}>
        <span style={{ color: '#ef4444' }}>■ 삭제</span>
        <span style={{ color: '#22c55e' }}>■ 추가</span>
        <span style={{ color: '#94a3b8' }}>이전 → 현재</span>
      </div>
      {diff.map((chunk, i) => {
        if (chunk.type === 'same') {
          return (
            <div key={i} style={{ padding: '2px 20px', color: '#64748b', background: '#fff', lineHeight: 1.6 }}>
              {chunk.line}
            </div>
          );
        }
        if (chunk.type === 'removed') {
          return (
            <div key={i} style={{ padding: '2px 20px', background: '#fef2f2', color: '#dc2626', borderLeft: '3px solid #ef4444' }}>
              - {chunk.line}
            </div>
          );
        }
        if (chunk.type === 'added') {
          return (
            <div key={i} style={{ padding: '2px 20px', background: '#f0fdf4', color: '#16a34a', borderLeft: '3px solid #22c55e' }}>
              + {chunk.line}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

type DiffChunk = { type: 'same' | 'added' | 'removed'; line: string };

function computeDiff(oldLines: string[], newLines: string[]): DiffChunk[] {
  // 간단한 Myers diff (최대 500줄 제한)
  const maxLines = 500;
  const a = oldLines.slice(0, maxLines);
  const b = newLines.slice(0, maxLines);

  const result: DiffChunk[] = [];
  let i = 0, j = 0;

  while (i < a.length || j < b.length) {
    if (i >= a.length) {
      result.push({ type: 'added', line: b[j++] });
    } else if (j >= b.length) {
      result.push({ type: 'removed', line: a[i++] });
    } else if (a[i] === b[j]) {
      result.push({ type: 'same', line: a[i] });
      i++; j++;
    } else {
      // 다음 동일 라인 찾기
      const lookAhead = 8;
      let foundA = -1, foundB = -1;
      outer:
      for (let d = 1; d <= lookAhead; d++) {
        for (let ai = i; ai < Math.min(i + d, a.length); ai++) {
          for (let bj = j; bj < Math.min(j + d, b.length); bj++) {
            if (a[ai] === b[bj]) { foundA = ai; foundB = bj; break outer; }
          }
        }
      }
      if (foundA === -1) {
        result.push({ type: 'removed', line: a[i++] });
        result.push({ type: 'added', line: b[j++] });
      } else {
        while (i < foundA) result.push({ type: 'removed', line: a[i++] });
        while (j < foundB) result.push({ type: 'added', line: b[j++] });
      }
    }
  }
  return result;
}
