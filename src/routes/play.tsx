import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Gamepad2 } from "lucide-react";

const MINESWEEPER_URL = "https://kamer-heap.github.io/Minesweeper-game-/";

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title: "Play — Khadija Amer" },
      { name: "description", content: "Take a break — play Minesweeper, built by Khadija Amer." },
      { property: "og:title", content: "Play — Khadija Amer" },
      { property: "og:description", content: "Take a break — play Minesweeper, built by Khadija Amer." },
    ],
  }),
  component: PlayPage,
});

function PlayPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-32 pb-24">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl text-center animate-fade-up">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ take a break</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gradient">
            Play a Game
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Enough scrolling — clear the board and see if you can beat my Minesweeper.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={MINESWEEPER_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-game"
              aria-label="Play Minesweeper"
            >
              <span className="btn-game-icon">
                <Gamepad2 size={16} />
              </span>
              Play Game
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}