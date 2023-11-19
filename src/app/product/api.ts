import { BallList } from "@/mocks/BallList";
import { commentList } from "@/mocks/comment";

export async function getMockProductDetail() {
  return BallList[0];
}

export async function getMockCommentList() {
  return commentList;
}
