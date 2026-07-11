import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowRight, Linkedin, Github, ChevronDown, Code2, Server, Brain, GraduationCap, Rocket, Search } from "lucide-react";
import { NetworkScene, useScrollProgress } from "../components/NetworkScene";
import { StarsBackground } from "../components/StarsBackground";
import { TypewriterTitles } from "../components/TypewriterTitles";


const LINKEDIN_URL = "https://www.linkedin.com/in/khadija-amer-7821a8334";
const GITHUB_URL = "https://github.com/kamer-heap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khadija Amer — Computer Science Student · Software Engineering · Systems · AI" },
      { name: "description", content: "Computer Science student building backend systems, databases, networking tools, and intelligent applications." },
      { property: "og:title", content: "Khadija Amer — Computer Science Student · Software Engineering · Systems · AI" },
      { property: "og:description", content: "Computer Science student building backend systems, databases, networking tools, and intelligent applications." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(sceneRef);

  return (
    <>
      <section ref={sceneRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-background">
            <NetworkScene scrollProgress={progress} />
          </div>

          {/* Layered typography — hero greeting */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none px-6"
            style={{ opacity: 1 - progress * 1.4 }}
          >
            <div className="text-left">
              <h1
                aria-label="Hi there! I'm Khadija Amer"
                className="select-none font-black tracking-tight"
                style={{
                  fontFamily: "'Space Grotesk', Inter, sans-serif",
                  fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="block text-foreground">Hi there!</span>
                <span className="block text-foreground">
                  I'm <span className="text-gradient name-glow">Khadija Amer</span>
                </span>

              </h1>
              <TypewriterTitles />
            </div>
          </div>


          <div
            className="absolute inset-x-0 bottom-[8%] flex flex-col items-center gap-5 px-6 pointer-events-none"
            style={{ opacity: 1 - progress * 1.4 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
              <Link to="/projects" className="btn-primary">
                Explore My Work <ArrowRight size={16} />
              </Link>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn-ghost">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-ghost">
                <Github size={16} /> GitHub
              </a>
            </div>
            <div className="mt-2 flex flex-col items-center gap-1 text-xs text-muted-foreground/70 animate-float">
              <span>scroll</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 overflow-hidden">
        <StarsBackground className="absolute inset-0 w-full h-full pointer-events-none -z-10" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { k: "Software Engineering", v: "Backend Development", sub: "Python · JavaScript · SQL", Icon: Code2 },
              { k: "Systems", v: "Operating Systems · Networking", sub: "Databases · REST APIs", Icon: Server },
              { k: "Intelligent Applications", v: "Artificial Intelligence", sub: "Automation · Problem Solving", Icon: Brain },
            ].map(({ k, v, sub, Icon }) => (
              <div key={k} className="glass glow-border rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30">
                    <Icon size={16} />
                  </div>
                  <p className="text-xs font-mono text-primary uppercase tracking-widest">{k}</p>
                </div>
                <p className="mt-3 text-xl font-display font-semibold">{v}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>

          {/* Currently */}
          <div className="mt-16">
            <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ currently</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">What I'm doing now</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {[
                { k: "Learning", v: "Machine Learning", Icon: GraduationCap },
                { k: "Building", v: "AI Projects", Icon: Rocket },
                { k: "Seeking", v: "Software Engineering Internship", Icon: Search },
              ].map(({ k, v, Icon }) => (
                <div key={k} className="glass glow-border rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30">
                      <Icon size={16} />
                    </div>
                    <p className="text-xs font-mono text-primary uppercase tracking-widest">{k}</p>
                  </div>
                  <p className="mt-3 text-lg font-display font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/about" className="btn-ghost">
              Read my story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
