import { BowlingBall } from "./ball";
import { User } from "./user";

export interface Comment {
  id: number;
  bowlingBall: BowlingBall;
  user: User;
  body: string;
  score: number;
  created_at: Date;
  modify_date: Date;
}
