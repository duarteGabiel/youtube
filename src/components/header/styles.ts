import styled from "styled-components";

interface ClearButtonProps {
  clearButton: boolean;
}

interface Responsive {
  openSearch: boolean
}

export const Container = styled.header`
 width: 100%;
 height: 55px;
 background-color: #fff;
 padding: 0 16px;
 box-sizing: border-box;
 display: flex;
 align-items: center;
 justify-content: space-between;
 position: sticky;
 top: 0;
`;

export const LogoContainer = styled.div`
 display: flex;
 align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
 width: 40px;
 height: 40;
 border-radius: 50%;
 margin: ${({ margin}) => margin? margin : 0};
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 flex-direction: column;
 :hover {
    background-color: #a6a6a6;
 }
 .dropDownMenu.active {
 opacity: 1;
 visibility: visible;
 display: flex;
 flex-direction: column;
 width: 100px;
 justify-content: space-evenly;
 position: static;
 }

 nav{
  width: 30px;
  height: 30px;
  border-radius: 8px;
 }

 span {

 }

 .dropDownMenu {
  opacity: 0;
 }

`;

export const ButtonIcon =styled.img`
 width: 20px;
`;

export const SearchContainer = styled.div<Responsive>`
  display: flex;

  @media(max-width: 414px) {
    position: fixed;
    top: ${({openSearch}) => openSearch? '10px' : '-100px'};
    left: 0;
    width: 95%;
    z-index: 6;
    background-color: #fff;
    height: 50px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  @media(max-width: 834px) {
    width: 260px;
    margin-left: 10px;
  }

  @media(max-width: 688px) {
    width: 230px;
    margin-left: 10px;
  }

  @media(max-width: 600px) {
    width: 200px;
    margin-left: 10px;
  }

  @media(max-width: 414px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchButtonResponsive = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border: 1px solid;
  cursor: pointer;

  @media(max-width: 414px) {
    display: flex;
    border-radius: 50%;
    min-height: 40px;
    min-width: 40px;
    max-height: 40px;
    max-width: 40px;
  }
`;

export const BackButton = styled.button<Responsive>`
  display: ${({openSearch}) => openSearch? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: .4s;
  margin-left: 10px;

  &:hover{
    background-color: white
  }
`;

export const HeaderButton=styled.div`
 width: 200px;
 display: flex;

 span {
   cursor: pointer;
 }

 button {
   cursor: pointer;
 }
`;

export const ClearButton = styled.button<ClearButtonProps>`
  display: ${({clearButton}) => clearButton? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .4s;
  background-color: white;

  &:hover{
    background-color: white;
  }
`;
export const CloseImg = styled.img`
  width: 15px;
`;


