import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
`;

export const MainContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: ${({openMenu}) => openMenu? '110px 50px 0 100px' : '110px 5px 0 80px'};
  box-sizing: border-box;

  @media(max-width: 834px) {
    padding: 140px 10px 0 100px;
  }

  @media(max-width: 688px) {
    padding: 140px 60px 0 150px;
  }

  @media(max-width: 414px) {
    padding: 140px 20px 0 20px;
  }
`;
export const HomeContainer = styled.div`
  width: 100%;
`;