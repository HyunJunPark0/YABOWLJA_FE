import { Comment } from "@/types/comment";

import { BallList } from "./BallList";
import { user } from "./user";

export const commentList: Comment[] = [
  {
    id: 1,
    bowlingBall: BallList[0],
    user: user,
    body: "볼링공 좋아요",
    score: 5,
    created_at: new Date(),
    modify_date: new Date(),
  },
  {
    id: 2,
    bowlingBall: BallList[0],
    user: user,
    body: "볼링공 구려요",
    score: 1,
    created_at: new Date(),
    modify_date: new Date(),
  },
];
