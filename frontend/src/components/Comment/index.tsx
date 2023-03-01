import React, { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import { CommentDiv } from "./styles";

export const Comment = () => {
  const { announcementComments } = useContext(CommentsContext);
  return (
    <>
      {announcementComments.map((comment) => {
        return (
          <CommentDiv key={comment.id}>
            <div className="comment">
              <div className="comment-info">
                <p
                  className="name_abbreviate"
                  style={{
                    backgroundColor: stringToColor(
                      comment.announcement.user.name
                    ),
                  }}
                >
                  {nameAbbreviate(comment.announcement.user.name)}
                </p>
                <span className="name">{comment.announcement.user.name}</span>
                <div className="dot" />
                <p className="date">há 3 dias</p>
              </div>
              <p className="comment-description">{comment.message}</p>
            </div>
          </CommentDiv>
        );
      })}
    </>
  );
};
