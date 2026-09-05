import { SiteHeader } from "../SiteHeader";
import { projects } from "../../content/research/projects";
import { publications } from "../../content/research/publications";

function formatAuthors(authors: string) {
  return authors.split("C. Cao").map((part, index, parts) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && <strong className="author-self">C. Cao</strong>}
    </span>
  ));
}

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader active="research" />
      <section className="direct-page shell">
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual visual-${index + 1}`}><span>{["◉", "✦", "∞"][index]}</span></div>
              <p className="eyebrow">PROJECT {String(index + 1).padStart(2, "0")}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section publications shell">
        <div className="preview-heading"><div><p className="eyebrow">ALL WORK</p><h2>Publications</h2></div></div>
        {publications.map((publication) => (
          <article key={publication.title} className="publication">
            <strong>{publication.year}</strong>
            <div>
              <span className="publication-label">{publication.category}</span>
              <h3>{publication.title}</h3>
              <p>{formatAuthors(publication.authors)}</p>
              <small>{publication.venue}</small>
            </div>
            <div>{publication.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>)}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
