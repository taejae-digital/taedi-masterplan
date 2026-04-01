import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "디지털 전환과 사회변혁팀 — 태재미래전략연구원",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, fontFamily: "'Pretendard', sans-serif", background: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
