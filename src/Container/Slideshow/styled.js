import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../../images/VectorLeft.svg";
import { ReactComponent as ArrowRight } from "../../images/VectorRight.svg";

export const StyledSlideshow = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  max-height: 700px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1440px) {
    // margin: 0 20px;
    width: calc(100% - 20px);
  }

  @media (max-width: 750px) {
    min-width: 340px;
    min-height: 560px;
    margin: 0 10px;
  }
`;

export const MainPictureContainer = styled.div`
  top: 70px;
  max-width: 1400px;
  width: 100%;
  min-height: 500px;
  max-height: 700px;
  height: 100%;
  position: relative;
  aspect-ratio: 2 / 1;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.6s linear;

  @media (max-width: 750px) {
    margin: 0 10px;
  }
`;

export const Pagination = styled.span`
  max-width: 355px;
  width: 100%;
  max-height: 80px;
  background-color: #181818;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 30px;

  @media (max-width: 750px) {
    min-width: 340px;
    height: 60px;
    gap: 0;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.span`
  max-width: 192px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 360px) {
    gap: 0;
  }
`;

export const PaginationButton = styled.button`
  max-width: 80px;
  width: 100%;
  height: 80px;
  display: flex;
  background-color: inherit;
  border: none;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    cursor: pointer;
    background-color: #2c2c2c;
  }

  &:disabled {
    cursor: default;
  }

  @media (max-width: 750px) {
    height: 60px;
    width: 60px;
  }
`;

export const PaginationCounter = styled.p`
  color: #fafafa;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding: 10px 30px 10px 45px;

  @media (max-width: 750px) {
    font-size: 16px;
    line-height: 23px;
  }
`;

export const StyledArrowLeft = styled(ArrowLeft)`
  margin: auto;
  fill: ${({ disabled }) => (disabled ? "#71746e" : "#FAFAFA")};

  @media (max-width: 750px) {
    width: 18px;
    height: 14px;
  }
`;

export const StyledArrowRight = styled(ArrowRight)`
  margin: auto;
  fill: ${({ disabled }) => (disabled ? "#71746e" : "#FAFAFA")};

  @media (max-width: 750px) {
    width: 18px;
    height: 14px;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
