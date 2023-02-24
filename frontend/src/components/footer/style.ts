import styled from "styled-components";
export const  ContainerF = styled.footer`
width:100%;
.figu1{
    margin-left:20px;
}
div{
    
    width:100%;
    height:100px;
    display:flex;
    justify-content:space-between;
    background-color:#0B0D0D;
    align-items:center;
}
    button{
        margin-right:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        width:35px;
        height:35px;
        background-color:#212529;
        color:white;
        padding-top:10px;
        transition:all,0.8s;
        :hover{
   
   box-shadow:
           2px 2px  orange,
           3px 3px  orange,
           5px 3px  orange;
   -webkit-transform: translateX(-3px);
   transform: translateX(-3px);
   transform: scale(1.1);
   background-color:#001aff;
}
    }

`