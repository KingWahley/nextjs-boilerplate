export default function SectionShell({ children, className = "" }) {
  return <section className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</section>;
}
