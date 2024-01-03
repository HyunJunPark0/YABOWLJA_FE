import { BowlingBall } from "@/types/ball";

export const BallList: BowlingBall[] = [
  {
    id: 0,
    company: "STORM",
    name: "AURA",
    price: 155000,
    spec: {
      cover_stock: "HYBRID",
      weight_block: "Atomic Core", // nullable
      factory_finish: "2000GRIT",
      color: ["blue", "black"],
      flare_potential: "DESERT",
      fragrance: "blueberry", // nullable
      weights: "15",
      hook: 300,
      length: 140,
      lane_condition: "Medium",
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
      image: [
        "https://bowlingmall.openhost.cafe24.com/webftp/ebo_rylangularone_dt.jpg",
      ],
      thumbnail_image:
        "https://bowlingmall.co.kr/web/product/medium/202203/9427e5886028eb5bda462161ac161da7.jpg",
      video_url: "youtube",
    },
    register_date: "2023-07-24",
    modify_date: "2023-07-25",
    release_date: "2023-07-21",
  },
];
