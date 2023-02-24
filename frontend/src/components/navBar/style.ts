import styled from "styled-components";

export const Nav = styled.nav`
background-color:#FDFDFD;
width:100%;
height:90px;
display:flex;
justify-content:space-between;
align-items:center;
div{
width:35%;
display:flex;
justify-content:space-between;
align-items:center;



}

figure{
    margin-left:15px;
}

`

export const DivPersonalizada2 = styled.nav`
margin-right:20px;
display:flex;
align-items:center;
justify-content:space-around;
width:100%;


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
    width:115px;
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
export const DivLinha = styled.p`
   box-sizing:border-box;
   margin-right:10px;
    padding:none;
    width:0px;
    height:85px;
    border-left : 2px solid #DEE2E6;
    background-color:red;
`