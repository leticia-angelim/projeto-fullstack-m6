import React, { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import { CommentDiv } from "./styles";

export const Comment = ({ comment }: any) => {
  return (
    <>
      <CommentDiv>
        <div className="comment">
          <div className="comment-info">
            <p
              className="name_abbreviate"
              style={{ backgroundColor: stringToColor(comment.user.name) }}
            >
              {nameAbbreviate(comment.user.name)}
            </p>

            <span className="name">{comment.user.name}</span>
            <div className="dot" />
            <p className="date">há 3 dias</p>
          </div>
          <p className="comment-description">{comment.user.description}</p>
        </div>
      </CommentDiv>
    </>
  );
};
