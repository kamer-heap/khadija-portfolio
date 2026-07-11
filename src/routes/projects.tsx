import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Khadija Amer" },
      { name: "description", content: "Backend, systems, and database projects: SaaS activity feed engine, Oracle PL/SQL inventory system, network monitor, log analyzer, KadEdit editor, and more." },
      { property: "og:title", content: "Projects — Khadija Amer" },
      { property: "og:description", content: "Case studies in backend engineering, database design, systems, and C++ tooling." },
    ],
  }),
  component: ProjectsPage,
});

interface Project {
  title: string;
  stack: string[];
  impact: string;
  problem: string;
  solution: string;
  result: string;
  metrics?: string[];
  repo?: string;
  demo?: string;
  feature?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "SaaS Activity Feed Engine",
    stack: ["JavaScript", "MongoDB", "Aggregation Pipelines", "Partial Indexing", "Database Design"],
    impact:
      "Scalable multi-tenant activity feed engine implementing Fan-Out-on-Write architecture for efficient user activity delivery.",
    problem:
      "Modern SaaS platforms require scalable activity feeds that efficiently deliver updates to many users while maintaining query performance.",
    solution:
      "Designed a multi-tenant activity feed engine using a Fan-Out-on-Write architecture, optimized MongoDB aggregation pipelines, and partial indexing to improve feed retrieval efficiency.",
    result:
      "Built a scalable database-driven backend architecture demonstrating NoSQL schema design, indexing strategies, and high-performance feed generation.",
    metrics: [
      "Multi-tenant architecture",
      "Fan-Out-on-Write feed design",
      "MongoDB aggregation pipelines",
      "Partial indexing for optimized query performance",
    ],
    repo: "https://github.com/kamer-heap/saas-activity-feed-engine",
    feature: true,
  },
  {
    title: "Inventory Management System",
    stack: ["Oracle PL/SQL", "SQL", "Database Design", "Stored Procedures", "Triggers", "Views"],
    impact:
      "Normalized Oracle PL/SQL inventory management system with automated business logic and relational database design.",
    problem:
      "Managing inventory efficiently requires maintaining data integrity while automating common business operations.",
    solution:
      "Designed a normalized relational database of 12 interconnected entities and implemented stored procedures, triggers, and views to automate business workflows while enforcing data consistency.",
    result:
      "Delivered a production-style relational database showcasing SQL, Oracle PL/SQL, normalization, and database automation techniques.",
    metrics: [
      "12 normalized database entities",
      "Stored procedures",
      "Database triggers",
      "SQL views",
    ],
    repo: "https://github.com/kamer-heap/inventory-management-system",
  },
  {
    title: "Network Traffic Monitor",
    stack: ["Python", "Flask", "Scapy"],
    impact:
      "Browser-based packet sniffing dashboard for real-time protocol analysis and live port-to-service mapping.",
    problem:
      "Watching live network traffic usually means switching between CLI tools and manually mapping ports to services.",
    solution:
      "Built a Flask dashboard on top of Scapy that captures packets in real time, performs protocol analysis, and maps 20+ common ports to services, with a fallback simulation mode when capture permissions are insufficient.",
    result:
      "A single-pane browser view of live network activity that works both with and without elevated packet-capture privileges.",
    metrics: ["20+ ports mapped", "Real-time protocol analysis", "Graceful capture-permission fallback"],
    repo: "https://github.com/kamer-heap/network-traffic-monitor",
  },
  {
    title: "Log Analyzer",
    stack: ["Python", "CLI", "Web Dashboard"],
    impact:
      "Server log parser that survives real-world log messiness and surfaces traffic patterns and anomalies.",
    problem:
      "Raw server logs are noisy, inconsistent, and full of malformed lines that break naive parsers.",
    solution:
      "Engineered a CLI + web dashboard log analyzer that gracefully handles 38 operational edge cases and tracks status codes, request counts, hourly traffic, anomaly flags, and malformed lines.",
    result:
      "A tool that turns messy access logs into a clean overview of usage patterns and anomalies without crashing on bad input.",
    metrics: ["38+ edge cases handled", "Status code + hourly traffic tracking", "Anomaly flagging"],
    repo: "https://github.com/kamer-heap/log-analyzer",
    demo: "https://kamer-heap.github.io/log-analyzer/web_ui.html",
  },
  {
    title: "KadEdit Text Editor",
    stack: ["C++", "HTML"],
    impact:
      "C++ code editor with a VS Code-inspired browser GUI, built from the data-structure level up.",
    problem:
      "Learning how editors actually work means building one — buffers, undo/redo, and recent-file management from scratch.",
    solution:
      "Implemented dynamic text-line storage via vector strings, a recent-file queue, and stack-based undo/redo history trackers, wrapped in a dark VS Code-inspired browser GUI.",
    result:
      "A working editor that demonstrates DSA choices (vectors, queues, stacks) applied to a realistic product surface.",
    metrics: ["Vector-based line buffer", "Stack-based undo/redo", "Recent-file queue"],
    repo: "https://github.com/kamer-heap/KadEdit",
    demo: "https://kamer-heap.github.io/KadEdit/",
  },
  {
    title: "Chrome Dino Game",
    stack: ["C++"],
    impact:
      "Desktop recreation of the iconic endless runner, tuned for smooth collision detection.",
    problem:
      "Recreating an endless runner means keeping collision and asset loops fast enough to feel responsive at speed.",
    solution:
      "Built the game in C++, optimizing geometric bounding shapes and asset collision engine loops to keep the main loop tight.",
    result:
      "A playable desktop clone of the endless runner with smooth collision behavior and stable frame pacing.",
    repo: "https://github.com/kamer-heap/CHROME-DINO-GAME",
  },
  {
    title: "Mine Sweeper Game",
    stack: ["C++"],
    impact:
      "Grid-based console Minesweeper with recursive reveal, difficulty scaling, and persistent high scores.",
    problem:
      "A faithful Minesweeper needs a correct recursive reveal, persistent scores, and clean difficulty scaling.",
    solution:
      "Built the game in C++ using structural arrays and file handling, adding a custom flagging system, high-score tracking files, dynamic difficulty scaling, and an automated recursive reveal algorithm. Developed with Ayesha Arif.",
    result:
      "A polished console Minesweeper that correctly cascades empty cells, persists scores across runs, and scales with difficulty.",
    metrics: ["Recursive reveal", "Persistent high scores", "Dynamic difficulty"],
    repo: "https://github.com/kamer-heap/Minesweeper-game-",
    demo: "https://kamer-heap.github.io/Minesweeper-game-/",
  },
];

const ADDITIONAL_PROJECTS: Project[] = [
  {
    title: "Buffer Overflow Exploitation",
    stack: ["Python", "pwntools", "x64dbg"],
    impact:
      "Automated framework for reproducing classic memory-corruption exploits and documenting mitigation bypasses.",
    problem:
      "Learning exploit development requires a repeatable harness for offset calculation, injection, and mitigation analysis.",
    solution:
      "Built a Python framework that computes EIP offsets via cyclic patterns, performs shellcode injection, and documents ASLR, DEP, and stack-canary bypasses.",
    result:
      "A reusable research harness that turns manual exploit-dev steps into an automated, documented workflow.",
  },
  {
    title: "Infix Engine",
    stack: ["C++"],
    impact:
      "Expression parser, verifier, and evaluator with structural algorithm optimizations.",
    problem:
      "Coursework expression evaluation is usually toy-level; a real engine needs verification and optimized structural handling.",
    solution:
      "Implemented parsing, verification, and evaluation of infix expressions in C++, with algorithmic optimizations across the pipeline.",
    result:
      "A compact engine used as a reusable component for CS coursework and demos.",
    repo: "https://github.com/kamer-heap/infix-engine",
    demo: "https://kamer-heap.github.io/infix-engine/",
  },
];

function ProjectsPage() {
  const total = PROJECTS.length + ADDITIONAL_PROJECTS.length;
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      <header className="max-w-3xl">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ projects</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gradient">
          Projects Matrix
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Backend, database, and systems builds — each with a clear problem, solution, and result,
          shipped with source and, where applicable, a live demo.
        </p>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} total={total} />
        ))}
      </div>

      <section className="mt-24">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.3em]">/ additional-projects</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Additional Projects &amp; Research</h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          Earlier security-research and systems experiments that inform the current work.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ADDITIONAL_PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={PROJECTS.length + i} total={total} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ p, index, total }: { p: Project; index: number; total: number }) {
  return (
    <article
      className={`glass glow-border rounded-2xl p-7 flex flex-col ${p.feature ? "md:col-span-2" : ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-display font-bold">{p.title}</h2>
        <span className="text-xs font-mono text-muted-foreground shrink-0">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{p.impact}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span
            key={t}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
          >
            {t}
          </span>
        ))}
      </div>

      <dl className="mt-5 space-y-3 text-sm leading-relaxed flex-1">
        <div>
          <dt className="text-[10px] font-mono uppercase tracking-widest text-primary">Problem</dt>
          <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-mono uppercase tracking-widest text-primary">Solution</dt>
          <dd className="mt-1 text-muted-foreground">{p.solution}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-mono uppercase tracking-widest text-primary">Result</dt>
          <dd className="mt-1 text-muted-foreground">{p.result}</dd>
        </div>
      </dl>

      {p.metrics && p.metrics.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.metrics.map((m) => (
            <li
              key={m}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border"
            >
              {m}
            </li>
          ))}
        </ul>
      )}

      {(p.repo || p.demo) && (
        <div className="mt-6 pt-5 border-t border-border/40 flex flex-wrap items-center gap-3">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-secondary/60 border border-border hover:border-primary/60 hover:text-primary transition"
            >
              <Github size={15} /> View Code
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg btn-primary"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
