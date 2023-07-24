export interface BowlingBall {
  id: number;
  company: string;
  name: string;
  price: number;
  spec: BallSpec;
  image: BallImage;
  register_date: string;
  modify_date: string;
  release_date: string;
}

export interface BallSpec {
  coverstock: string;
  weight_block?: string; // nullable
  factory_finish: string;
  color: string[];
  flare_portential: string;
  fragrance?: string; // nullable
  weights: string;
  symmetry: boolean; // 대칭, 비대칭
  cores: Core;
  performance: string;
}

export interface Core {
  weight: string;
  radius: number;
  differential: number;
  psa?: number; // nullable
}

export interface BallImage {
  image: string[];
  thumbnail_image: string;
  video_url: string;
}
