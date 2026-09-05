"use client";

import { useState } from "react";
import { news } from "../../content/news/items";

const filters = ["All", "Education", "Research", "Industry", "Award", "Social Activities"] as const;

export function NewsTimeline() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visibleNews = filter === "All" ? news : news.filter((item) => item.type === filter);

  return (
    <div className="news-timeline-wrap">
      <div className="news-toolbar">
        <p className="eyebrow">TIMELINE</p>
        <label className="news-select">
          <span>Filter by</span>
          <select value={filter} onChange={(event) => setFilter(event.target.value as (typeof filters)[number])}>
            {filters.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
      </div>
      <div className="news-timeline">
        {visibleNews.map((item) => (
          <article key={`${item.date}-${item.title}`}>
            <div className="timeline-marker" aria-hidden="true"><span /></div>
            <time>{item.date}</time>
            <h2>{item.title}</h2>
            <span className={`news-type type-${item.type.toLowerCase().replaceAll(" ", "-")}`}>{item.type}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
