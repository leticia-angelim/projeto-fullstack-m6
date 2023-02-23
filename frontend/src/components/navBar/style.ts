import styled from "styled-components";

export const Nav = styled.nav`
background-color:#FDFDFD;
width:100%;
height:100px;
display:flex;
justify-content:space-around;
align-items:center;
div{
    width:30%;
display:flex;

align-items:center;

}
`

export const DivPersonalizada2 = styled.nav`
width:100%;
display:flex;
align-items:center;
justify-content:space-around;

span{
   
    color:#495057;
    cursor:pointer;
    transition:all,0.8s;
    font-weight:600;
  :hover{
    transform: scale(1.1);
   
   color:blue;
  }
}

button{
    background-color:white;
    width:100px;
    height:50px;
    border:1px solid grey;
    border-radius:3px;
   

    font-weight: 100;
    font-size: 16px;
  transition:all,0.8s;
  :hover{
    transform: scale(1.1);
   background-color:blue;
   color:white;
  }
}
`

export const DivPersonalizada1 = styled.nav`
border-right:1px solid grey;
width:100%;
display:flex;
align-items:center;
justify-content:space-around;

button{
    border:none;
    background-color: white;
    transition:all,0.8s;
  :hover{
    transform: scale(1.1);
   
   color:blue;
  }
}
`

