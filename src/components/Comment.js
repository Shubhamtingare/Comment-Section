import React, { useState, useRef, useEffect } from "react";
import "../css/Comment.css";

const Comment = ({ comment, onUpdate, onDelete, onVote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(comment.content);
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    onUpdate(comment.id, updatedContent);
    setIsEditing(false);
  };

  useEffect(() => {
    // Added useEffect
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="comment">
      <div className="comment-list">
        <p className="comment-text">
          <strong>
            <span style={{ color: "#555" }}>Username : </span>
            {comment.username}
          </strong>
        </p>
        {isEditing ? (
          <input
            type="text"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            className="comment-input"
            ref={inputRef}
          />
        ) : (
          <p className="comment-text">
            <span style={{ color: "#BB8462" }}>Comment : </span>
            {comment.content}
          </p>
        )}
      </div>
      <div className="comment-button-group">
        <div className="comment-buttons">
          <button
            onClick={() => onVote(comment.id, 1)}
            className="comment-button circle"
          >
            +
          </button>
          <span className="vote-count">
            {comment.upvotes - comment.downvotes}
          </span>
          <button
            onClick={() => onVote(comment.id, -1)}
            className="comment-button circle"
          >
            -
          </button>
        </div>
        <div className="comment-buttons">
          <button onClick={handleEdit} className="edit-button">
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {isEditing && (
            <button onClick={handleUpdate} className="edit-button">
              Update
            </button>
          )}
          <button
            onClick={() => onDelete(comment.id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
