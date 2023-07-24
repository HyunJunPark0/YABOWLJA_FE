import { BowlingBall } from "@/types/ball";

export const BallList: BowlingBall[] = [
  {
    id: 0,
    company: "STORM",
    name: "AURA",
    price: 155000,
    spec: {
      coverstock: "HYBRID",
      weight_block: "", // nullable
      factory_finish: "2000GRIT",
      color: ["blue", "black"],
      flare_portential: "DESERT",
      fragrance: "blueberry", // nullable
      weights: "15",
      symmetry: true, // 대칭, 비대칭
      cores: {
        weight: "15",
        radius: 0.53,
        differential: 0.58,
        psa: 0.002, // nullable
      },
      performance: "High",
    },
    image: {
      image: ["aws", "s2"],
      thumbnail_image: "https://",
      video_url: "youtube",
    },
    register_date: "2023-07-24",
    modify_date: "2023-07-25",
    release_date: "2023-07-21",
  },
];
