export default function FadeInNoScript() {
  return (
    <noscript>
      <style>
        {`
          .FadeIn {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            will-change: auto !important;
          }
        `}
      </style>
    </noscript>
  )
}
