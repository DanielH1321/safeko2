import { css, styled } from "styled-components";
import GoogleMaps from "../../images/Maps.png";

export const FooterContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  margin: 20px auto 0;

  @media (max-width: 750px) {
    padding-bottom: 46px;
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media(min-width:750px) and (max-width:){

  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Contact = styled.div`
  color: #181818;
  font-size: 18px;
  line-height: 24px;
  padding: 84px 60px 315px;

  @media (max-width: 750px) {
    padding: 48px 0 36px 20px;
    font-size: 16px;
    line-height: 23px;
  }
`;

export const QuestionsContainer = styled.div`
  color: #474945;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  

  @media (max-width: 750px) {
    align-items: flex-start;
    padding-left: 20px;
    flex-direction: column;
  }
`;

export const QuestionsTitle = styled.h1`
  font-weight: 500;
  color: #181818;
  font-size: 36px;
  line-height: 39px;
  margin: 84px 0 36px 0;
  width: 284px;

  @media (max-width: 750px) {
    margin: 0;
    font-size: 24px;
    line-height: 30px;
    padding-bottom: 24px;
  }
`;

export const Info = styled.p`
  max-width: 284px;
  width: 100%;
  color: #474945;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  
  padding-bottom: 12px;
  
`;
export const Info2 = styled.p`
  max-width: 284px;
  width: 100%;
  color: #474945;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  
  padding-top: 24px;
  
`;
export const InfoContainer = styled.div`
  width: 284px;
 display:flex;
 flex-direction: column;
`;
export const InfoInteractive = styled.p`
  
  width: fit-content;
  color: #474945;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  transition: color 0.2s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #6a6a6a;
  }
`;

export const Maps = styled.div`
  @media (max-width: 750px) {
    // width: 360px;
    height: 400px;
    margin-top: 36px;
  }
`;

export const FooterTextWrap = styled.div` 
height: 86px;
// width:50%;
`;

export const FooterText = styled.p`
  display: flex;
  justify-content: center; 
  color: #71746e;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.084px;
  margin: 0;
  padding-top: 20px;
  // border-top: 1px solid #71746e;
  position: relative;

  @media (max-width: 750px) {
    border: none;
    justify-content: flex-start;
    padding: 6px 0 0 20px;
    max-height: 21px;
  }

  ${({ isAkanza }) =>
    isAkanza &&
    css`
    height: 0;
    padding: 10px 0 0 20px;
    border: none;
      transition: color 0.2s ease;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
        color: #6a6a6a;
      }
    `}

  ${({ isLast }) =>
    isLast &&
    css`
      // max-width: 536px;
      display:flow;
      padding-right: 80px;
      flex-direction: column;
      padding-top: 20px;
      border-top: 1px solid #71746e;
      @media (max-width: 1440px) {
        padding-right: 65px;
      }

      @media (max-width: 750px) {
        display:flex;
        padding: 24px 0 0 20px;
        width: 300px;
        margin-bottom: 35px;
      }
    `}
`;

export const ReadMore = styled.a`
  // border: none;
  // position: absolute;
  // top: 60%;
  // transform: translateY(-38%);
  // right: 29%;
  // transition: color 0.2s ease;
  

  // &:hover {
  //   cursor: pointer;
  //   text-decoration: underline;
  //   color: #6a6a6a;
  // }

  // @media (min-width: 1441px) {
  //   right: 31%;
  // }

  // @media (max-width: 750px) {
  //   top: 210%;
  //   right: 69%;
  // }
`;
export const Footer1fr = styled.div`

`;
export const Footer2fr = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items: center;
  @media (max-width: 750px) {
    padding-left: 20px;
    align-items: flex-start;
    width: 80%;
  }
  
`;
export const FooterTextLeft = styled.div`
border-top: 1px solid #71746e;
display: flex;
@media (max-width: 750px) {
  flex-direction: column;
}
`;
export const FooterTextLeftFirstChild = styled.div`
width:180px;
`;
export const FooterTextLeftSecondChild = styled.div`
width:50%;

`;