import { useEffect, useState } from "react";

const TITLES = ["Software Engineer", "AI Enthusiast", "Database Developer"];
const TYPE_MS = 80;
const DELETE_MS = 40;
const PAUSE_MS = 1000;

export function TypewriterTitles() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_MS);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % TITLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.substring(0, t.length - 1) : current.substring(0, t.length + 1)
          );
        },
        deleting ? DELETE_MS : TYPE_MS
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  const longest = TITLES.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <div
      className="mt-5 sm:mt-6 font-semibold tracking-tight text-left"
      style={{
        fontFamily: "'Space Grotesk', Inter, sans-serif",
        fontSize: "clamp(1.5rem, 4.5vw, 2.5rem)",
        lineHeight: 1.1,
        letterSpacing: "-0.01em",
      }}
      aria-label={TITLES.join(", ")}
    >
      {/* invisible sizer to prevent layout shift */}
      <span className="relative inline-block">
        <span aria-hidden className="invisible whitespace-pre">
          {longest}
        </span>
        <span className="absolute inset-0 whitespace-pre">
          <span className="text-gradient">{text}</span>
          <span
            className="inline-block align-baseline ml-0.5 text-primary"
            style={{ animation: "typewriter-blink 1s steps(1) infinite" }}
          >
            |
          </span>
        </span>
      </span>
      <style>{`@keyframes typewriter-blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}
