import Link from "next/link";
import { sitePath } from "./site-path";

export function SiteHeader({ active = "about" }: { active?: "about" | "research" | "news" | "travel" }) {
  return (
    <header className="nav-shell">
      <div className="nav shell">
        <Link className="wordmark" href="/">Chang Cao</Link>
        <nav aria-label="Main navigation">
          <Link className={active === "about" ? "active" : ""} href="/">About Me</Link>
          <Link className={active === "research" ? "active" : ""} href="/research">Research</Link>
          <Link className={active === "news" ? "active" : ""} href="/news">News</Link>
          <Link className={active === "travel" ? "active" : ""} href="/travel">Travel</Link>
          <a href={sitePath("/#contact")}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
