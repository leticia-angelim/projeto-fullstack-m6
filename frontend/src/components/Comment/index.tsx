import React, { useContext, useEffect } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import { CommentDiv } from "./styles";
import moment from "moment";

export const Comment = () => {
  const { announcementComments } = useContext(CommentsContext);

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
                    backgroundColor: stringToColor(
                      comment.announcement.user.name
                    ),
                  }}
                >
                  {nameAbbreviate(comment.announcement.user.name)}
                </p>
                <span className="name">{comment.announcement.user.name}</span>
                <div className="dot" />
                <p className="date">{time}</p>
              </div>
              <p className="comment-description">{comment.message}</p>
            </div>
          </CommentDiv>
        );
      })}
    </>
  );
};
