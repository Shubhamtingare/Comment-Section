import React, { useState } from "react";
import "../css/CommentForm.css";

const CommentForm = ({ onAdd }) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && content) {
      onAdd(username, content);
      setUsername("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="comment-form-input"
      />
      <textarea
        placeholder="Comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="comment-form-input comment-content"
      />
      <button type="submit" className="comment-form-button">
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
