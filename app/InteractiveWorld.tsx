"use client";

import { useEffect, useState } from "react";
import { places } from "../content/travel/places";
import { locationToPoint } from "../content/travel/coordinates";

const avatarGroups = {
  People: ["🧑🏻", "🧑🏼", "🧑🏽", "🧑🏾", "🧑🏿", "👩🏻", "👩🏼", "👩🏽", "👩🏾", "👩🏿", "👨🏻", "👨🏼", "👨🏽", "👨🏾", "👨🏿", "👵🏽", "👴🏻", "🧕🏾", "👳🏽‍♂️", "🧑🏻‍🦽"],
  Animals: ["🐕", "🐈", "🐇", "🦊", "🐼", "🐻", "🐸", "🐧", "🦜", "🦋", "🐙", "🐢"],
  Others: ["🤖", "👽", "👻", "🫧", "☀️", "🌙", "☁️", "✨", "🌱", "🪩"],
};
const thoughts = ["👋", "💡", "✨", "☕", "🤔", "😊", "💬", "🎵"];

type Person = { id: number; emoji: string; x: number; y: number; thought?: string };

export function InteractivePeople() {
  const [selected, setSelected] = useState("🧑🏻");
  const [group, setGroup] = useState<keyof typeof avatarGroups>("People");
  const [people, setPeople] = useState<Person[]>([
    { id: 1, emoji: "👩🏽", x: 18, y: 68, thought: "👋" },
    { id: 2, emoji: "🤖", x: 72, y: 57, thought: "💡" },
    { id: 3, emoji: "🧑🏿", x: 49, y: 76 },
    { id: 4, emoji: "🐕", x: 86, y: 77 },
  ]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPeople((current) =>
        current.map((person) => ({
          ...person,
          x: Math.max(6, Math.min(92, person.x + (Math.random() - 0.5) * 14)),
          y: Math.max(26, Math.min(82, person.y + (Math.random() - 0.5) * 8)),
          thought: Math.random() > 0.7 ? thoughts[Math.floor(Math.random() * thoughts.length)] : undefined,
        })),
      );
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  function addPerson(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setPeople((current) => [
      ...current,
      {
        id: Date.now(),
        emoji: selected,
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: Math.max(28, ((event.clientY - rect.top) / rect.height) * 100),
        thought: "👋",
      },
    ]);
  }

  return (
    <div className="people-stage" onClick={addPerson} role="application" aria-label="Interactive emoji social space. Choose a character and click in the space to add it.">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="avatar-picker" onClick={(event) => event.stopPropagation()}>
        <span>Drop someone into the space</span>
        <div className="picker-tabs">
          {(Object.keys(avatarGroups) as Array<keyof typeof avatarGroups>).map((name) => (
            <button key={name} onClick={() => setGroup(name)} className={group === name ? "active" : ""}>{name}</button>
          ))}
        </div>
        <div className="avatar-row">
          {avatarGroups[group].map((avatar) => (
            <button key={avatar} className={selected === avatar ? "selected" : ""} onClick={() => setSelected(avatar)} aria-label={`Choose ${avatar}`}>
              {avatar}
            </button>
          ))}
        </div>
        <small>Then click anywhere below</small>
      </div>
      {people.map((person) => (
        <div key={person.id} className="person" style={{ left: `${person.x}%`, top: `${person.y}%` }}>
          {person.thought && <span className="thought">{person.thought}</span>}
          <span>{person.emoji}</span>
        </div>
      ))}
      <p className="stage-hint">Click to add · they wander on their own</p>
    </div>
  );
}

export function TravelMap({ zoomable = false }: { zoomable?: boolean }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(1);
  const place = places[active];
  return (
    <div className="travel-grid">
      <div className="map-wrap">
        <div className="map-viewport">
          <div className="map-canvas" style={{ transform: `scale(${zoom})` }}>
            <img src="/world-map-equirectangular.svg" alt="Equirectangular world map with visited and future destinations" />
            {places.map((item, index) => {
              const point = locationToPoint(item.location);
              return (
                <button key={`${item.name}-${index}`} className={`map-pin ${active === index ? "active" : ""}`} style={{ left: `${point.x}%`, top: `${point.y}%` }} onClick={() => setActive(index)} aria-label={`View ${item.name}`} />
              );
            })}
          </div>
        </div>
        {zoomable && <div className="map-zoom" aria-label="Map zoom controls">
          <button onClick={() => setZoom((value) => Math.min(3, value + 0.5))} aria-label="Zoom in">+</button>
          <button onClick={() => setZoom((value) => Math.max(1, value - 0.5))} aria-label="Zoom out">−</button>
          <button className="map-reset" onClick={() => setZoom(1)} aria-label="Reset map zoom">{Math.round(zoom * 100)}%</button>
        </div>}
      </div>
      <article className="place-card">
        <div className="place-image">
          {place.image ? <img src={place.image} alt={place.name} /> : <span>📍</span>}
          <div className="place-arrows">
            <button onClick={() => setActive((active - 1 + places.length) % places.length)} aria-label="Previous place">‹</button>
            <button onClick={() => setActive((active + 1) % places.length)} aria-label="Next place">›</button>
          </div>
        </div>
        <p className="kicker">{place.year}</p>
        <h3>{place.name}</h3>
        <p>{place.note}</p>
      </article>
    </div>
  );
}
