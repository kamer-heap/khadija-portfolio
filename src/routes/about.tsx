import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowRight, Briefcase, Users, GraduationCap as GradCap, Flag } from "lucide-react";
import { PhysicsSkills } from "../components/PhysicsSkills";
import { ScrollProgressLine } from "../components/ScrollProgressLine";
import khadijaPhoto from "../assets/khadija.png.asset.json";



export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Khadija Amer" },
      { name: "description", content: "Computer Science student at PUCIT building backend systems, databases, networking tools, and intelligent applications." },
      { property: "og:title", content: "About — Khadija Amer" },
      { property: "og:description", content: "BSCS @ PUCIT. Backend, databases, systems, and AI." },
    ],
  }),
  component: AboutPage,
});

interface EduItem {
  side: "left" | "right";
  school: string;
  degree: string;
  period: string;
  body: string;
  badge?: string;
}

const EDUCATION: EduItem[] = [
  {
    side: "right",
    school: "University of the Punjab — PUCIT",
    degree: "BSCS",
    period: "2024 — 2028",
    body: "Core focus: Data Structures & Algorithms, Object-Oriented Programming, Database Design, Operating Systems, Computer Networks, and Oracle PL/SQL. Active member of EMS (Event Management Society) and the Sports Society.",
    badge: "Honhaar Scholar — Fully Funded Academic Merit Scholarship",
  },
  {
    side: "left",
    school: "Punjab Group of Colleges",
    degree: "FSc · Grade A+",
    period: "2 Years",
    body: "Sustained merit-level performance throughout, consistently ranking among the top of the cohort.",
    badge: "Awarded Merit Scholarship",
  },
  {
    side: "right",
    school: "Connoisseur Grammar School",
    degree: "Matriculation (SSC)",
    period: "Completed",
    body: "Ranked 2nd across the entire school cohort. Awarded the Board Merit Shield for academic excellence.",
  },
];

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  body: string;
  Icon: typeof Briefcase;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Teaching Assistant",
    org: "PUCIT — under Dr. Madiha Khalid",
    period: "Sep 2025 — Jan 2026",
    body: "Structured lab materials and supervised laboratory instruction sessions for the ICT course.",
    Icon: GradCap,
  },
  {
    role: "Campus Ambassador",
    org: "LoopLab — LoopVerse 2.0",
    period: "Jan 2026 — Apr 2026",
    body: "Drove registration and community engagement nationwide. Awarded 'Best of the Ambassadors' shield.",
    Icon: Users,
  },
  {
    role: "Campus Ambassador",
    org: "FCIT Developers Club — FDC Summer Bootcamp 2025",
    period: "Jul 2025",
    body: "Managed outreach and student registrations for the FDC Summer Bootcamp 2025.",
    Icon: Briefcase,
  },
  {
    role: "Cricket Coordinator",
    org: "PUCIT Sports Society",
    period: "2025 — 2026",
    body: "Coordinated the PUCIT Winter League 2025 as Cricket Coordinator.",
    Icon: Flag,
  },
];

function AboutPage() {
  const eduRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLOListElement>(null);
  return (

    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <header className="max-w-3xl animate-fade-up order-2 md:order-1">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ about</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight uppercase">
            <span className="text-foreground">THE </span>
            <span className="text-gradient">STORY</span>
            <span className="text-foreground"> SO FAR</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I got into Computer Science because I love figuring out how things work and building solutions that make an impact.
            I'm a Computer Science student at <span className="text-foreground">PUCIT, University of the Punjab</span> (Class of 2028),
            with an interest in <span className="text-foreground">software engineering</span>, <span className="text-foreground">databases</span>,
            {" "}<span className="text-foreground">networking</span>, and <span className="text-foreground">Artificial Intelligence</span>.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me mentoring students as a Teaching Assistant, representing my university as a
            National Campus Ambassador, or organizing events as a Cricket Coordinator. I'm always learning, building, and
            looking for new challenges.
          </p>
        </header>
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-up">
          <div className="avatar-glow h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64">
            <img src={khadijaPhoto.url} alt="Khadija Amer" loading="eager" />
          </div>
        </div>
      </div>


      <section className="mt-20">
        <div className="mb-6">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ tech-stack</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Tools I Use</h2>
        </div>
        <PhysicsSkills />
      </section>

      {/* Experience — vertical timeline */}
      <section className="mt-24">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ experience</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Experience</h2>
        <ol ref={expRef} className="relative ml-3 mt-10 space-y-8">
          <ScrollProgressLine containerRef={expRef} className="left-0" />
          {EXPERIENCE.map((e) => {
            const Icon = e.Icon;
            return (
              <li key={e.role + e.org} className="ml-8">
                <span className="absolute -left-[18px] grid h-9 w-9 place-items-center rounded-full bg-background border border-primary/50 shadow-[0_0_20px_oklch(0.68_0.24_295/0.4)]">
                  <Icon size={16} className="text-primary" />
                </span>
                <div className="glass glow-border rounded-2xl p-6">
                  <p className="text-xs font-mono text-primary uppercase tracking-widest">{e.period}</p>
                  <h3 className="mt-1 text-lg font-display font-semibold">{e.role}</h3>
                  <p className="text-sm text-foreground/90">{e.org}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Education — alternating vertical timeline */}
      <section className="mt-24">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ education</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Academic Journey</h2>

        <div ref={eduRef} className="relative mt-12">
          {/* Scroll-linked center anchor */}
          <ScrollProgressLine
            containerRef={eduRef}
            className="left-4 md:left-1/2 md:-translate-x-1/2"
          />


          <ol className="space-y-12">
            {EDUCATION.map((e, i) => (
              <li
                key={e.school}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${
                  e.side === "left" ? "md:[&>*:first-child]:order-1" : ""
                }`}
              >
                {/* Card */}
                <div
                  className={`pl-12 md:pl-0 ${
                    e.side === "right" ? "md:col-start-2" : "md:col-start-1 md:text-right"
                  }`}
                >
                  <div className="glass glow-border rounded-2xl p-6">
                    <p className="text-xs font-mono text-primary uppercase tracking-widest">{e.period}</p>
                    <h3 className="mt-2 text-lg font-display font-semibold">{e.school}</h3>
                    <p className="mt-1 text-sm text-foreground/90">{e.degree}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.body}</p>
                    {e.badge && (
                      <div className={`mt-4 flex ${e.side === "left" ? "md:justify-end" : "justify-start"}`}>
                        <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-md bg-primary/15 text-primary border border-primary/40 shadow-[0_0_18px_oklch(0.68_0.24_295/0.35)]">
                          ★ {e.badge}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Node */}
                <span
                  className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 grid h-7 w-7 place-items-center rounded-full bg-background border border-primary/60 shadow-[0_0_18px_oklch(0.68_0.24_295/0.6)]"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>

                {/* Spacer */}
                <div className="hidden md:block" aria-hidden style={{ gridColumn: e.side === "right" ? 1 : 2 }}>
                  <span className="sr-only">{i}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">
          <span className="text-foreground">Days I </span>
          <span className="text-gradient">Code</span>
        </h2>
        <div className="mt-8 glass glow-border rounded-2xl p-6 overflow-x-auto">
          <a href="https://github.com/kamer-heap" target="_blank" rel="noreferrer" className="block min-w-[700px]">
            <img
              src="https://ghchart.rshah.org/8b5cf6/kamer-heap"
              alt="GitHub contribution graph for kamer-heap"
              className="w-full"
              loading="lazy"
            />
          </a>
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link to="/projects" className="btn-primary">See the projects <ArrowRight size={16} /></Link>
      </div>
    </div>
  );
}
