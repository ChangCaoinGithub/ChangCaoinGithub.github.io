import { SiteHeader } from "../SiteHeader";
import { RealTravelMap } from "./RealTravelMap";

export default function TravelPage() {
  return <main><SiteHeader active="travel" /><section className="direct-page shell"><RealTravelMap /></section><section className="page-section shell fact-grid">
    <article><span></span><h2>Food-driven</h2><p>Besides trying local cuisine, as a Chinese person, I also enjoy exploring Chinese restaurants around the world.</p></article>
    <article><span></span><h2>Beach lover</h2><p>I often visit different seas or lakes, and I so love soft sand beach, but weirdly, I do not like swimming at all!!</p></article>
    </section></main>;
}
