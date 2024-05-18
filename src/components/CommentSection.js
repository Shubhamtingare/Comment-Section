import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const commentList = () => {
  const list = localStorage.getItem("comments");
  return list ? JSON.parse(list) : [];
};

const CommentSection = () => {
  const [comments, setComments] = useState(commentList());

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (username, content) => {
    const newComment = {
      id: Date.now(),
      username,
      content,
      upvotes: 0,
      downvotes: 0,
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const updateComment = (id, content) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, content } : comment
    );
    setComments(updatedComments);
  };

  const deleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const voteComment = (id, vote) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            upvotes: comment.upvotes + (vote === 1 ? 1 : 0),
            downvotes: comment.downvotes + (vote === -1 ? 1 : 0),
          }
        : comment
    );
    setComments(updatedComments);
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <CommentForm onAdd={addComment} />
      <CommentList
        comments={comments}
        onUpdate={updateComment}
        onDelete={deleteComment}
        onVote={voteComment}
      />
    </div>
  );
};

export default CommentSection;
