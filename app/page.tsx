import Link from "next/link";
import { InteractivePeople, TravelMap } from "./InteractiveWorld";
import { SiteHeader } from "./SiteHeader";
import { profile } from "../content/about/profile";
import { projects } from "../content/research/projects";
import { news } from "../content/news/items";
import { sitePath } from "./site-path";

function PreviewHeading({ eyebrow, title, href }: { eyebrow: string; title: string; href: string }) {
  return <div className="preview-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><Link className="more-link" href={href} aria-label={`Explore more ${title}`}>Explore more <span>→</span></Link></div>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell" id="top">
        <div className="hero-copy"><div><p className="eyebrow">{profile.eyebrow}</p><h1>Curious about how technology can <em>feel.</em></h1></div><div><p className="lede">{profile.intro} </p></div></div>
        <InteractivePeople />
      </section>

      <section className="home-block shell" id="about">
        <div className="about-home"><div className="profile-photo">{profile.photo ? <img src={sitePath(profile.photo)} alt="Chang Cao" /> : <><span>CC</span><small>Profile photo</small></>}</div><div><p className="eyebrow">ABOUT ME</p><h2>I study what makes interaction feel human.</h2><p className="role">{profile.role}</p><p><br />I am currently working under the supervision of <a className="body-link" href={profile.supervisor.url} target="_blank" rel="noreferrer">{profile.supervisor.name}</a> at the <a className="body-link" href={profile.group.url} target="_blank" rel="noreferrer">{profile.group.name}</a>. {profile.about}</p><a className="text-link" href={`mailto:${profile.email}`} target="_blank" rel="noreferrer">Say hi through an email <span>↗</span></a></div></div>
      </section>

      <section className="home-block shell">
        <PreviewHeading eyebrow="SELECTED WORK" title="Research" href="/research" />
        <div className="project-grid">{projects.map((project, index) => <Link href="/research" className="project-card" key={project.title}><div className={`project-visual visual-${index + 1}`}><span>{["◉", "✦", "∞"][index]}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></Link>)}</div>
      </section>

      <section className="home-block shell">
        <PreviewHeading eyebrow="LATEST" title="News" href="/news" />
        <div className="news-preview">{news.slice(0, 2).map((item) => <Link href="/news" key={item.date + item.title}><strong>{item.date}</strong><div><p>{item.title}</p><small>{item.type}</small></div><span>→</span></Link>)}</div>
      </section>

      <section className="home-block shell">
        <PreviewHeading eyebrow="ONE OF THE THINGS I LOVE THE MOST" title="Travel" href="/travel" />
        <p className="fun-intro">Where else do you think I should visit at least once in my life?</p><TravelMap />
      </section>

      <footer className="home-block shell contact" id="contact"><div><p className="eyebrow">CONTACT</p><h2>Let’s connect.</h2></div><div className="contact-row"><a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer">{profile.email}</a><div className="socials"><a href={profile.scholar}>Google Scholar ↗</a><a href={profile.linkedin}>LinkedIn ↗</a></div></div></footer>
    </main>
  );
}
