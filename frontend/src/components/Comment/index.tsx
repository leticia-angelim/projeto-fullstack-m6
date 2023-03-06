import React, { useContext, useEffect, useState } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import { CommentDiv } from "./styles";
import moment from "moment";
import { IComment } from "../../interfaces/comments";
import { UserContext } from "../../contexts/UserContext";

export const Comment = () => {
  const { announcementComments, updateComment, deleteComment } =
    useContext(CommentsContext);
  const { user } = useContext(UserContext);

  const [editedComment, setEditedComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = (comment: IComment) => {
    setEditedComment(comment.message);
    setIsEditing(true);
  };

  const handleSaveButtonClick = (comment: IComment, newComment: string) => {
    comment.message = newComment;
    updateComment(comment.id, editedComment);
    setIsEditing(false);
  };

  const handleCommentChange = (event: any) => {
    setEditedComment(event.target.value);
  };

  return (
    <>
      {announcementComments.map((comment) => {
        const minutes = moment().diff(comment.created_at, "minutes");
        const hours = moment().diff(comment.created_at, "hours");
        const days = moment().diff(comment.created_at, "days");
        const months = moment().diff(comment.created_at, "months");
        const years = moment().diff(comment.created_at, "years");

        let time = "";
        if (years > 0) {
          time = `há ${years} ano${years > 1 ? "s" : ""}`;
        } else if (months > 0) {
          time = `há ${months} mês${months > 1 ? "es" : ""}`;
        } else if (days > 0) {
          time = `há ${days} dia${days > 1 ? "s" : ""}`;
        } else if (hours > 0) {
          time = `há ${hours} hora${hours > 1 ? "s" : ""}`;
        } else if (minutes > 0) {
          time = `há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
        } else {
          time = "agora mesmo";
        }

        return (
          <CommentDiv key={comment.id}>
            <div className="comment">
              <div className="comment-info">
                <p
                  className="name_abbreviate"
                  style={{
                    backgroundColor: stringToColor(comment.user.name),
                  }}
                >
                  {nameAbbreviate(comment.user.name)}
                </p>
                <span className="name">{comment.user.name}</span>
                <div className="dot" />
                <p className="date">{time}</p>
              </div>
              {isEditing ? (
                <>
                  <textarea
                    value={editedComment}
                    onChange={handleCommentChange}
                  />
                  <button
                    onClick={() =>
                      handleSaveButtonClick(comment, editedComment)
                    }
                  >
                    Salvar
                  </button>
                </>
              ) : (
                <p className="comment-description">{comment.message}</p>
              )}
            </div>
            {comment.user.id === user?.id && (
              <>
                <button onClick={() => handleEditButtonClick(comment)}>
                  Editar
                </button>
                <button onClick={() => deleteComment(comment.id)}>
                  Excluir
                </button>
              </>
            )}
          </CommentDiv>
        );
      })}
    </>
  );
};
