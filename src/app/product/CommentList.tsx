"use client";

import { useEffect, useState } from "react";

import { Comment } from "@/types/comment";

import { getMockCommentList } from "./api";

/* @TODO
    1. 별점 작성 기능
    2. 유저 상세 표시
  */

export default function CommentList() {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  useEffect(() => {
    async function fetchCommentList() {
      const commentList = await getMockCommentList();
      setCommentList(commentList);
    }
    fetchCommentList();
  }, []);

  const averageRating =
    commentList.reduce((acc, cur) => acc + cur.score, 0) / commentList.length;
  const stars = [];
  const body = [];

  for (let i = 0; i < 5; i++) {
    if (i < averageRating) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }

  for (const comment of commentList) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < comment.score) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }

    body.push(
      <div
        key={comment.id}
        className="flex flex-col items-left justify-content: flex-start; w-full mt-4"
      >
        <div className="flex flex-row items-left justify-content: flex-start; w-full">
          <b className="">{comment.user.username}</b>
          <b className="px-4">{comment.score}</b>
          <b className="">{stars}</b>
        </div>
        <div className="flex flex-row items-left justify-content: flex-start; w-full">
          <b className="">{comment.body}</b>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-row items-left justify-content: flex-start; w-full">
        <b className="">상품평</b>
        <b className="px-4">{averageRating}</b>
        <b className="">{stars}</b>
      </div>
      {body}
    </div>
  );
}
