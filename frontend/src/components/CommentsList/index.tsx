import React from "react";
import { ThemeTitle } from "../../styles/typography";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import Button from "../Button";
import { Comment } from "../Comments";
import { CommentsListBox, RegisterCommentBox } from "./styles";

export const CommentsList = () => {
  const announcementsComments = [
    {
      user: {
        name: "Júlia Lima",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi assumenda maiores hic voluptates dolores doloribus obcaecati earum nulla quisquam quia laudantium, odio distinctio repellendus expedita, iure, eaque minus nam debitis.",
      },
    },
    {
      user: {
        name: "Marcos Antînio",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi assumenda maiores hic voluptates dolores doloribus obcaecati earum nulla quisquam quia laudantium, odio distinctio repellendus expedita, iure, eaque minus nam debitis.",
      },
    },
    {
      user: {
        name: "Camila Silva",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi assumenda maiores hic voluptates dolores doloribus obcaecati earum nulla quisquam quia laudantium, odio distinctio repellendus expedita, iure, eaque minus nam debitis.",
      },
    },
  ];

  const comments = announcementsComments.map((announcement) => {
    return <Comment announcement={announcement} />;
  });

  return (
    <>
      <CommentsListBox>
        <div className="comments">
          <ThemeTitle
            tag="h2"
            className="comment-title"
            titleSize="Heading-6-600"
          >
            Comentários
          </ThemeTitle>
          <div className="comments-div">{comments}</div>
        </div>

        <RegisterCommentBox>
          <div className="userInfo-div">
            <p
              className="name_abbreviate"
              style={{ backgroundColor: stringToColor("Samuel Leão") }}
            >
              {nameAbbreviate("Samuel Leão")}
            </p>
            <p className="username">Samuel Leão</p>
          </div>
          <textarea
            className="comment"
            name="comment"
            cols={30}
            rows={10}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          />
          <Button
            className="comment-button"
            children="Comentar"
            backgroundColor="#4529E6"
            backgroundColorHover={""}
          />
          <div className="comment-sugestions">
            <button className="sugestion-btn">Gostei muito!</button>
            <button className="sugestion-btn">Incrível</button>
            <button className="sugestion-btn">
              Recomendarei para meus amigos!
            </button>
          </div>
        </RegisterCommentBox>
      </CommentsListBox>
    </>
  );
};
