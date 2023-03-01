import React from "react";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import { CommentDiv } from "./styles";

export const Comment = ({ announcement }: any) => {
  return (
    <>
      <CommentDiv>
        <div className="comment">
          <div className="comment-info">
            <p
              className="name_abbreviate"
              style={{ backgroundColor: stringToColor(announcement.user.name) }}
            >
              {nameAbbreviate(announcement.user.name)}
            </p>

            <span className="name">{announcement.user.name}</span>
            <div className="dot" />
            <p className="date">há 3 dias</p>
          </div>
          <p className="comment-description">{announcement.user.description}</p>
        </div>
      </CommentDiv>
    </>
  );
};
