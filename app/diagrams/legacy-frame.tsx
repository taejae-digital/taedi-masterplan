export function LegacyFrame({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      style={{
        width: "420mm",
        height: "297mm",
        border: "none",
        background: "#fff",
      }}
    />
  );
}
