import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Gamepad2, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-6xl px-6 transition-all ${scrolled ? "" : ""}`}>
        <nav className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass" : ""}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-sm shadow-[var(--shadow-glow)]">
              KA
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-foreground bg-secondary/60" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                  className="nav-link px-3 py-1.5 rounded-lg transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="ml-1">
              <Link
                to="/play"
                className="btn-game btn-game-compact"
                aria-label="Play Game"
              >
                <span className="btn-game-icon">
                  <Gamepad2 size={14} />
                </span>
                Play Game
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg text-foreground hover:bg-secondary/60 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`glass absolute top-20 right-4 left-4 rounded-2xl p-4 shadow-[var(--shadow-elegant)] transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          <ul className="flex flex-col gap-1 text-base">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-foreground bg-secondary/60" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                  className="block px-4 py-3 rounded-lg transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/play"
                onClick={() => setOpen(false)}
                className="btn-game btn-game-compact w-full justify-center"
                aria-label="Play Game"
              >
                <span className="btn-game-icon">
                  <Gamepad2 size={14} />
                </span>
                Play Game
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
