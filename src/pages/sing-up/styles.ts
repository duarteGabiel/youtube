import styled from "styled-components";

export const Container =styled.div`
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
 width: 500px;
 margin-left: 370px;
 border-radius: 8px;
 border: solid;
 border-color: gray;
 height: 500px;
 padding-bottom: 25px;
`;

export const Image =styled.img`
 width: 170px;
 height: 110px;
`;
export const Span =styled.span`
 font-size: 25px;
`;
export const Span2 =styled.span`
 font-size: 20px;
 padding-top: 5px;
 padding-bottom: 9px;

`;

export const InputContainer =styled.div`
 display: grid;
 width: 85%;
 padding: 15px;
 height: 45px;
 
`;

export const ButtonContainerLogin =styled.div`
 display: flex;
 justify-content: space-between;
 padding: 15px;
 width: 430px;

 :hover{
        background-color: blue;
        color: white;
    }

 button{
    color: blue;
    cursor: pointer;
    height: 50px;
    width: 90px;
    outline-style: none;
    border: none;
    background-color: white;
    border-radius: 10px;

 }
`;
