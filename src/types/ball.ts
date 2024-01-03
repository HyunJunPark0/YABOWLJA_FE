import { AxiosRequestConfig } from "axios";

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
  cover_stock: string;
  weight_block?: string; // nullable
  factory_finish: string;
  color: string[];
  flare_potential: string;
  fragrance?: string; // nullable
  weights: string;
  hook: number;
  length: number;
  lane_condition: string;
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

//검색조건 타입
export interface ISelectedItems extends AxiosRequestConfig{
  companies: string[];
  price: number[];
  cover_stock: string[];
  factory_finish: string[];
  color: string[];
  pound: string[];
  symmetry: string[];
  performance: string[];
  diff: string[];
}