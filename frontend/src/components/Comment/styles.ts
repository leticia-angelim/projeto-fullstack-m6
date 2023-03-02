import styled from "styled-components";

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;

  .comment-info {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .name_abbreviate {
    width: 32px;
    height: 32px;
    background: var(--color-pink1);
    border-radius: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    font-weight: 500;
    font-size: 14px;
    color: var(--color-whiteFixed);
  }

  .name {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-right: 8px;
    color: var(--color-grey1);
  }

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-grey4);
    margin-right: 13px;
  }

  .date {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey3);
  }

  .comment-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-grey2);
  }
`;
