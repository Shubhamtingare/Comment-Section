import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, onUpdate, onDelete, onVote }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onVote={onVote}
        />
      ))}
    </div>
  );
};

export default CommentList;
