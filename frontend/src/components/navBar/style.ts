import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fdfdfd;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  position: fixed;
  border-bottom: 2px solid #dee2e6;
  z-index: 3;

  div {
    width: 50%;
    height: 100%;
    display: flex;

    align-items: center;
  }
`;

export const DivPersonalizada2 = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0rem 1rem;

  span {
    color: #495057;
    cursor: pointer;
    transition: all, 0.8s;
    font-weight: 600;
  }
`;

export const DivPersonalizada1 = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-right: 2px solid #dee2e6;

  a {
    text-decoration: none;
    color: #495057;

    :hover {
      color: #495057;
    }
  }
`;
