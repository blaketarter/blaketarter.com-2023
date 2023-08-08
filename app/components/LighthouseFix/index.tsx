export default function LighthouseFix() {
  return (
    <span
      aria-hidden={true}
      style={{
        opacity: 0.01,
        userSelect: "none",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="this-is-for-google-ligthouse-lcp"
    >
      Test
    </span>
  )
}
