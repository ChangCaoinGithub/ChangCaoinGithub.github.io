import { SiteHeader } from "../SiteHeader";
import { NewsTimeline } from "./NewsTimeline";

export default function NewsPage() {
  return <main><SiteHeader active="news" /><section className="direct-page shell"><NewsTimeline /></section></main>;
}
