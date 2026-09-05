"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap } from "leaflet";
import { places } from "../../content/travel/places";
import { locationToLatLon } from "../../content/travel/coordinates";
import { sitePath } from "../site-path";

export function RealTravelMap() {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<LeafletMap | null>(null);
  const gridElement = useRef<HTMLDivElement>(null);
  const cardElement = useRef<HTMLElement>(null);
  const connectionCanvas = useRef<HTMLCanvasElement>(null);
  const [mapReady, setMapReady] = useState(false);
  const [active, setActive] = useState(0);
  const place = places[active];

  useEffect(() => {
    if (!mapElement.current || mapInstance.current) return;
    let disposed = false;

    void import("leaflet").then((L) => {
      if (disposed || !mapElement.current) return;
      const map = L.map(mapElement.current, {
        center: [24, 8],
        zoom: 2,
        minZoom: 2,
        maxZoom: 18,
        touchZoom: true,
        scrollWheelZoom: true,
        dragging: true,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);
      places.forEach((item, index) => {
        const icon = L.divIcon({ className: "travel-map-marker", html: "<span></span>", iconSize: [22, 22], iconAnchor: [11, 11] });
        L.marker(locationToLatLon(item.location), { icon }).addTo(map).bindTooltip(item.name).on("click", () => setActive(index));
      });
      mapInstance.current = map;
      setMapReady(true);
    });
    return () => {
      disposed = true;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!mapReady || !map || !gridElement.current || !cardElement.current || !connectionCanvas.current) return;

    const drawConnection = () => {
      const grid = gridElement.current;
      const card = cardElement.current;
      const canvas = connectionCanvas.current;
      const mapNode = mapElement.current;
      if (!grid || !card || !canvas || !mapNode) return;
      const gridRect = grid.getBoundingClientRect();
      const mapRect = mapNode.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const markerPoint = map.latLngToContainerPoint(locationToLatLon(places[active].location));
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(gridRect.width * ratio);
      canvas.height = Math.round(gridRect.height * ratio);
      canvas.style.width = `${gridRect.width}px`;
      canvas.style.height = `${gridRect.height}px`;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.scale(ratio, ratio);
      const startX = mapRect.left - gridRect.left + markerPoint.x;
      const startY = mapRect.top - gridRect.top + markerPoint.y;
      const endX = cardRect.left - gridRect.left + 2;
      const endY = cardRect.top + Math.min(150, cardRect.height * 0.42) - gridRect.top;
      const curveX = startX + (endX - startX) * 0.58;
      const curveY = Math.min(startY, endY) - Math.min(90, Math.abs(endX - startX) * 0.18);
      context.beginPath();
      context.moveTo(startX, startY);
      context.quadraticCurveTo(curveX, curveY, endX, endY);
      context.strokeStyle = "rgba(24, 92, 66, 0.52)";
      context.lineWidth = 1.5;
      context.setLineDash([5, 6]);
      context.stroke();
    };

    map.on("move zoom resize", drawConnection);
    window.addEventListener("resize", drawConnection);
    window.requestAnimationFrame(drawConnection);
    return () => {
      map.off("move zoom resize", drawConnection);
      window.removeEventListener("resize", drawConnection);
    };
  }, [active, mapReady]);

  function selectPlace(index: number) {
    setActive(index);
    mapInstance.current?.flyTo(locationToLatLon(places[index].location), Math.max(mapInstance.current.getZoom(), 5), { duration: 0.8 });
  }

  return (
    <div className="travel-grid real-travel-grid" ref={gridElement}>
      <canvas className="map-connection" ref={connectionCanvas} aria-hidden="true" />
      <div className="real-map" ref={mapElement} aria-label="Interactive travel map" />
      <article className="place-card" ref={cardElement}>
        <div className="place-image">
          {place.image ? <img src={sitePath(place.image)} alt={place.name} /> : <span>📍</span>}
          <div className="place-arrows">
            <button onClick={() => selectPlace((active - 1 + places.length) % places.length)} aria-label="Previous place">‹</button>
            <button onClick={() => selectPlace((active + 1) % places.length)} aria-label="Next place">›</button>
          </div>
        </div>
        <p className="kicker">{place.year}</p>
        <h3>{place.name}</h3>
        <p>{place.note}</p>
      </article>
    </div>
  );
}
