import { useEffect, useRef, useState, type ReactNode } from "react";

/* Faixa decorativa de onda contínua */
export function WaveStrip() {
  const wave = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="44" viewBox="0 0 240 44">
  <path d="M0 15 C 30 -1, 30 31, 60 15 S 90 31, 120 15 S 150 31, 180 15 S 210 31, 240 15" fill="none" stroke="#0D2B52" stroke-width="3" stroke-linecap="round"/>
  <path d="M0 31 C 30 15, 30 47, 60 31 S 90 47, 120 31 S 150 47, 180 31 S 210 47, 240 31" fill="none" stroke="#5BAEE6" stroke-width="3" stroke-linecap="round"/>
  <circle cx="60" cy="23" r="3.2" fill="#e2171c"/>
  <circle cx="180" cy="23" r="3.2" fill="#e2171c"/>
</svg>`);

  return (
    <div
      aria-hidden="true"
      className="h-11 w-full bg-card"
      style={{
        backgroundImage: `url("data:image/svg+xml,${wave}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "240px 44px",
      }}
    />
  );
}

/* Blob numerado ao lado do título */
const blobShapes = ["blob-a", "blob-b", "blob-c"];
const blobColors = ["bg-navy text-cream", "bg-red text-cream", "bg-sky text-navy"];

export function SectionHeading({ index, title }: { index: number; title: string }) {
  const shape = blobShapes[index % blobShapes.length];
  const color = blobColors[index % blobColors.length];
  return (
    <div className="flex items-center gap-4 min-[940px]:flex-col min-[940px]:items-start min-[940px]:gap-3">
      <span
        aria-hidden="true"
        className={`grid size-14 shrink-0 place-items-center font-display text-2xl sm:size-16 sm:text-3xl ${shape} ${color}`}
      >
        {index + 1}
      </span>
      <h2 className="text-3xl leading-tight text-navy sm:text-4xl">{title}</h2>
    </div>
  );

}

export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

type CardTone = "white" | "navy" | "red" | "sky";

const toneBody: Record<CardTone, string> = {
  white: "bg-card text-navy",
  navy: "bg-navy text-cream",
  red: "bg-red text-cream",
  sky: "bg-sky text-navy",
};

const toneTop: Record<CardTone, string> = {
  white: "bg-sky",
  navy: "bg-sky",
  red: "bg-navy",
  sky: "bg-red",
};

export function Card({
  title,
  tone = "white",
  children,
}: {
  title?: string;
  tone?: CardTone;
  children: ReactNode;
}) {
  return (
    <div className="card-soft" style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className={`h-1.5 w-full ${toneTop[tone]}`} aria-hidden="true" />
      <div className={`space-y-3 p-5 sm:p-7 ${toneBody[tone]}`}>
        {title ? <h3 className="text-2xl leading-tight sm:text-[1.7rem]">{title}</h3> : null}
        {children}
      </div>
    </div>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[1.02rem] leading-relaxed">{children}</p>;
}

export function Bullets({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[1.02rem] leading-relaxed">
      <span
        aria-hidden="true"
        className="mt-2 size-2.5 shrink-0 blob-b bg-red"
        style={{ backgroundColor: "var(--red)" }}
      />
      <span>{children}</span>
    </li>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-semibold underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
    >
      {children}
    </a>
  );
}

export function LinkPill({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={label}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
        } catch {
          /* área de transferência indisponível */
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
      className="inline-flex shrink-0 items-center rounded-full bg-red px-4 py-1.5 text-xs font-semibold tracking-wide text-cream uppercase transition-transform hover:-translate-y-0.5"
    >
      {copied ? "copiado!" : "copiar"}
    </button>
  );
}
