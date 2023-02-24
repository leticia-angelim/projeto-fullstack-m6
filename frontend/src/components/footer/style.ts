import styled from "styled-components";

export const ContainerF = styled.footer`
  width: 100%;

  div {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: #0b0d0d;
    align-items: center;
    padding: 0 3rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: #212529;
    color: white;
    padding-top: 10px;
    text-decoration: none;

    :hover {
      color: white;
    }
  }
`;
