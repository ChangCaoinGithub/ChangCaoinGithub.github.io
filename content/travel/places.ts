import { year } from "drizzle-orm/mysql-core";

export const places = [

  // Germany
  {
    name: "Stuttgart, Germany",
    year: "2024-Now",
    image: "/public/images/travel/stu.JPG",
    location: "48.7758, 9.1829",
  },
  {
    name: "Berlin, Germany",
    note: "My favorite city in Germany.",
    image: "/public/images/travel/berlin.jpeg",
    location: "52.520008, 13.404954",
  },
  {
    name: "Hamburg, Germany",
    year: "2023",
    note: "Try the Fischbrötchen in their Fish Market!",
    image: "/public/images/travel/ham.jpeg",
    location: "53.5511, 9.9937",
  },
  {
    name: "Nürnberg, Germany",
    year: "2024",
    note: "Best sausage in Germany.",
    image: "/public/images/travel/nurn.jpeg",
    location: "49.45421, 11.07752",
  },
  {
    name: "Schwangau, Germany",
    year: "2025",
    note: "They have Neuschwanstein.",
    image: "/public/images/travel/schwangau.png",
    location: "47.576893, 10.736935",
  },
  {
    name: "Rust, Germany",
    note: "A must-go in Germany!",
    image: "/public/images/travel/rust.jpeg",
    location: "48.269294, 7.726081",
  },
  {
    name: "Bremen, Germany",
    year: "2023",
    image: "/public/images/travel/bremen.jpeg",
    location: "53.0793, 8.8017",
  },
  {
    name: "Frankfurt a.M, Germany",
    image: "/public/images/travel/fra.jpeg",
    location: "50.110924, 8.682127",
  },
  {
    name: "Cologne, Germany",
    year: "2025",
    image: "/public/images/travel/col.jpeg",
    location: "50.9352, 6.9531",
  },
  {
    name: "Sankt-Peter-Ording, Germany",
    image: "/public/images/travel/SPO.jpeg",
    location: "54.3023, 8.6405",
  },
  {
    name: "Düsseldorf, Germany",
    year: "2023",
    note: "Really nice Korean food there!",
    image: "/public/images/travel/duss.jpeg",
    location: "51.2217, 6.7762",
  },
  {
    name: "Munich, Germany",
    year: "2026",
    image: "/public/images/travel/mun.jpeg",
    location: "48.1351, 11.5820",
  },
  {
    name: "Konstanz, Germany",
    year: "2024",
    note:"I had the best frojo in town.",
    image: "/public/images/travel/kon.jpeg",
    location: "47.6779, 9.1732",
  },
  {
    name: "Bodensee, Germany",
    year: "2023",
    note: "You must visit it in a good weather!",
    image: "/public/images/travel/bodensee.jpeg",
    location: "47.628746, 9.339942",
  },
  {
    name: "Metzingen, Germany",
    note: "Best Döner in Germany!",
    image: "/public/images/travel/metz.jpeg",
    location: "53.5511, 9.9937",
  },
  {
    name: "Tübingen, Germany",
    year: "2022-2024",
    image: "/public/images/travel/tu.JPG",
    location: "48.5216, 9.0576",
  },
  {
    name: "Reutlingen, Germany",
    year: "2023",
    image: "/public/images/travel/rt.jpeg",
    location: "48.49144, 9.20427",
  },
  {
    name: "Karlsruhe, Germany",
    note: "This is the best fried beans I ever had!",
    image: "/public/images/travel/kal.jpeg",
    location: "49.0069, 8.4037",
  },
  {
    name: "Heidelberg, Germany",
    year: "2024",
    image: "/public/images/travel/he.jpeg",
    location: "49.4088, 8.7021",
  },

  // Netherlands
  {
    name: "Amsterdam, Netherlands",
    year: "2023",
    image: "/public/images/travel/ams.png",
    location: "52.3676, 4.9041",
  },

  // France
  {
    name: "Paris, France",
    year: "2025",
    image: "/public/images/travel/paris.jpeg",
    location: "48.8566, 2.3522",
  },
  {
    name: "Antibes, France",
    year: "2025",
    image: "/public/images/travel/antibe.jpeg",
    location: "43.580799, 7.123900",
  },
  {
    name: "Colmar, France",
    year: "2024",
    note: "First time trying snails! Then love it!",
    image: "/public/images/travel/colmar.jpeg",
    location: "48.0817, 7.3556",
  },

  // Spain
  {
    name: "Gran Canaria, Spain",
    year: "2025",
    note: "Where I will retire at.",
    image: "/public/images/travel/gran.jpeg",
    location: "27.816, -15.766",
  },

  // Poland
  {
    name: "Zator, Poland",
    year: "2024 & 2025",
    note: "Best amusement park in Europe!",
    image: "/public/images/travel/zator.jpeg",
    location: "49.99639, 19.43806",
  },
  {
    name: "Katowice, Poland",
    year: "2025",
    note: "My favorite supermarket in Poland.",
    image: "/public/images/travel/kato.png",
    location: "50.2649, 19.0238",
  },

  // Czech Republic
  {
    name: "Prague, Czech Republic",
    year: "2024",
    image: "/public/images/travel/prag.png",
    location: "50.073658, 14.418540",
  },

  // Switzerland
  {
    name: "Zurich, Switzerland",
    year: "2024",
    image: "/public/images/travel/zurich.jpeg",
    location: "47.3769, 8.5417",
  },
  {
    name: "Biel, Switzerland",
    year: "2024",
    image: "/public/images/travel/biel.jpg",
    location: "47.137684, 7.259476",
  },

  // Italy
  {
    name: "Trento, Italy",
    year: "2026",
    note: "A placeholder for a place still waiting to become a story.",
    image: "",
    location: "46.0748, 11.1217",
  },

  // USA
  {
    name: "New York, USA",
    year: "2026",
    image: "/public/images/travel/ny.JPG",
    location: "40.7128, -74.0060",
  },
  {
    name: "Philadelphia, USA",
    year: "2026",
    image: "/public/images/travel/phi.jpeg",
    location: "39.9526, -75.1652",
  },
  {
    name: "Miami, USA",
    year: "2026",
    image: "",
    location: "25.7617, -80.1918",
  },

  // China
  {
    name: "Siping, China",
    note: "Born and raised.",
    image: "/public/images/travel/sp.jpeg",
    location: "43.1664, 124.3504",
  },
  {
    name: "Chengdu, China",
    note: "My second hometown.",
    image: "/public/images/travel/cd.png",
    location: "30.5728, 104.0668",
  },
  {
    name: "Chongqing, China",
    note: "Best hotpot in the world.",
    image: "/public/images/travel/cq.jpeg",
    location: "29.5630, 106.5516",
  },
  {
    name: "Leshan, China",
    year: "2021",
    note: "A must-visit in Sichuan!",
    image: "/public/images/travel/ls.png",
    location: "29.56227, 103.76386",
  },
  {
    name: "Lugu Lake, China",
    year: "2017",
    note: "The only time I woke up for a sunrise.",
    image: "/public/images/travel/luguhu.JPG",
    location: "27.7042, 100.7852",
  },
  {
    name: "Lijiang, China",
    year: "2017",
    image: "/public/images/travel/lijiang.JPG",
    location: "26.8651, 100.229",
  },
  {
    name: "Beijing, China",
    note: "Peking duck is speechlessly tasty.",
    image: "/public/images/travel/pk.JPG",
    location: "39.9042, 116.4074",
  },
  {
    name: "Ya'an, China",
    year: "2018",
    image: "/public/images/travel/ya.jpeg",
    location: "29.980537, 103.013261",
  },
  {
    name: "Shanghai, China",
    year: "2020",
    image: "/public/images/travel/sh.png",
    location: "31.2304, 121.4737",
  },
  {
    name: "Hangzhou, China",
    year: "2022",
    image: "/public/images/travel/hz.png",
    location: "30.2500, 120.1667",
  },

];