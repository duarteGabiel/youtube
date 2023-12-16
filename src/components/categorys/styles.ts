import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
 display: flex;
 width: 100%;
 position: sticky;
 height: 30px;
 background-color: white;
 margin-top: -60px;
 padding-bottom: 30px;
`;

export const Button = styled.button<{openMenu: boolean}>`
 height: 32px;
 min-width: 12px;
 padding: ${({ openMenu }) => openMenu? '0 10px' : '0 16px'};
 border-radius: 8px;
 outline: none;
 box-sizing: border-box;
 cursor: pointer;
 user-select: none;
 position: relative;
 font-family: "Roboto","Arial",sans-serif;
 font-size: 1.1rem;
 line-height: 2rem;
 font-weight: 400;
 display: flex;
 flex-direction: row;
 align-items: center;
 display: inline-flex;

 :hover{
    background-color: #666666;
 }
`;
