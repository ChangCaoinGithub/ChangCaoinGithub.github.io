const knownPlaces: Record<string, [number, number]> = {
  "stuttgart, germany": [48.7758, 9.1829],
  "tübingen, germany": [48.5216, 9.0576],
  "tuebingen, germany": [48.5216, 9.0576],
  "berlin, germany": [52.52, 13.405],
  "munich, germany": [48.1351, 11.582],
  "beijing, china": [39.9042, 116.4074],
  "shanghai, china": [31.2304, 121.4737],
  "tokyo, japan": [35.6762, 139.6503],
  "new york, usa": [40.7128, -74.006],
  "san francisco, usa": [37.7749, -122.4194],
  "london, uk": [51.5072, -0.1276],
  "paris, france": [48.8566, 2.3522],
};

export function locationToLatLon(location: string): [number, number] {
  const raw = location.trim().toLowerCase();
  const numeric = raw.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
  return numeric ? [Number(numeric[1]), Number(numeric[2])] : (knownPlaces[raw] ?? [0, 0]);
}

export function locationToPoint(location: string) {
  const [lat, lon] = locationToLatLon(location);
  return { x: ((lon + 180) / 360) * 100, y: ((90 - lat) / 180) * 100 };
}

