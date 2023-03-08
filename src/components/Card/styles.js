import styled, { keyframes } from "styled-components";

const cardScale = keyframes`
  0% {
    transform: scale(0.3);
  }

  100% {
    transform: scale(1);
  }
`;
const arrowAnimation = keyframes`
  0%,
  100% {
    transform: translateY(0, 0) rotate(-90deg);
  }

  50% {
    transform: translateY(-4px) rotate(-90deg);
  }
`;

const CardWrapper = styled.div`
  position: relative;
  max-width: 314px;
  animation: ${cardScale} 0.5s linear forwards 1;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    filter: brightness(1.15);
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: 276px;
  background: url(${(props) => props.image}) #1f2934;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 31px;
`;
const CardDetails = styled.div`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
  box-sizing: border-box;
  background: linear-gradient(99.21deg, #303948 54.96%, #1c5178 161.52%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

const NFTName = styled.h2`
  font-weight: 300;
  font-size: 22px;
  margin: 0;
  letter-spacing: 0.005em;
  color: #ffffff;
  text-transform: uppercase;
`;
const IconWrapper = styled.div`
  width: 30px;
  height: 35px;
  border: 2px solid #ffffff;
  border-radius: 13px;
  display: flex;
  align-item: center;
  justify-content: center;
  img {
    width: 13px;
    transform: rotate(-90deg);
    animation: ${(props) => props.hover && arrowAnimation} 1s ease-in-out
      infinite;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ModalWrapper = styled.div`
  padding: 20px 35px;
  box-sizing: border-box;
  text-align: center;
`;

const ModalContentTitle = styled.h2`
  font-weight: 300;
  font-size: 25px;
  letter-spacing: -0.1em;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
const ModalCloseButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  img {
    width: 15px;
  }
`;
const ModalContent = styled.div`
  display: flex;
  margin: 30px 0;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const ModalImage = styled.img`
  max-width: 210px;
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 15px;
  margin-right: 15px;
`;
const ModalDescription = styled.div`
  max-width: 300px;
  width: 100%;
  h2,
  p {
    margin: 0;
  }
  h2 {
    text-align: left;
    font-weight: 300;
    font-size: 15px;
    letter-spacing: -0.1em;
    color: #8f8f8f;
    text-transform: uppercase;
  }
  p {
    font-weight: 300;
    font-size: 15px;
    text-align: justify;
    letter-spacing: -0.1em;
    color: #8f8f8f;
  }
  @media (max-width: 820px) {
    margin-top: 10px;
  }
`;

const ModalFooter = styled.div`
  text-transform: uppercase;
`;
const ModalBtnNotice = styled.h2`
  font-weight: 300;
  font-size: 10px;
  color: #8f8f8f;
  margin: 8px 0;
`;
const ModalLink = styled.a`
  padding: 2px 33px;
  background: linear-gradient(246.55deg, #0f1e30 -2.47%, #1d4048 154.33%);
  border-radius: 10px;
  text-decoration: none;
  margin: 0;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: -0.045em;
  color: #53899a;
  img {
    width: 12px;
    margin-left: 12px;
    transition: 300ms;
  }
  &:hover {
    img {
      transform: translateX(4px);
    }
  }
  @media (max-width: 600px) {
    font-size: 20px;
    img {
      width: 8px;
    }
  }
`;

export {
  CardWrapper,
  CardContent,
  CardDetails,
  NFTName,
  IconWrapper,
  ModalWrapper,
  ModalHeader,
  ModalContent,
  ModalContentTitle,
  ModalCloseButton,
  ModalImage,
  ModalDescription,
  ModalFooter,
  ModalBtnNotice,
  ModalLink,
};
