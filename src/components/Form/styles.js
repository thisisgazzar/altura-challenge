import styled, { keyframes } from "styled-components";

const shakeOnError = keyframes`
    0%{transform:translateX(0);}
    1%, 3%, 5%{transform:translateX(10px);}
    2%, 4%, 6%{transform:translateX(-10px);}
    7%{transform:translateX(0);}
`;

const flash = keyframes`
    0% {
        background-color: #FFF2;
        box-shadow: 20px 0 #FFF2, -20px 0 #53899A;
    }
    50% {
        background-color: #53899A;
        box-shadow: 20px 0 #FFF2, -20px 0 #FFF2;
    }
    100% {
        background-color: #FFF2;
        box-shadow: 20px 0 #53899A, -20px 0 #FFF2;
    }
`;

const FormWrapper = styled.div`
  max-width: 654px;
  width: 100%;
  height: 234px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 12px 77px 12px;
  background: linear-gradient(95.17deg, #152d46 -45.48%, #17222f 56.99%);
  border-radius: 60px;
  @media (max-width: 600px) {
    width: 90%;
    height: 150px;
    border-radius: 40px;
  }
`;

const FormTitle = styled.h2`
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -0.08em;
  color: #d3ddeb;
  margin: 41px auto 27px auto;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 20px;
    margin: 20px auto 27px;
  }
`;
const FormContent = styled.form`
  position: relative;
  max-width: 468px;
  width: 100%;
  animation: ${(props) => props.error && shakeOnError} 4s ease;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 55px;
  background: #2a3a4a;
  border-radius: 39px;
  padding: 0 130px 0 24px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid ${(props) => (props.error ? "#7E2424" : "transparent")};
  color: #888991;
  font-size: 12px;
  font-weight: 500;
  :focus {
    border-color: ${(props) => !props.error && "#346A88"};
  }
  ::-webkit-input-placeholder {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.005em;
    color: #888991;
    text-transform: uppercase;
  }
  ::-moz-placeholder {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.005em;
    color: #888991;
    text-transform: uppercase;
  }
  :-ms-input-placeholder {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.005em;
    color: #888991;
    text-transform: uppercase;
  }
  :-moz-placeholder {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.005em;
    color: #888991;
    text-transform: uppercase;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: 30px;
    padding: 0px 93px 0px 24px;
  }
`;
const FormButton = styled.button`
  width: 115px;
  height: 35px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(246.55deg, #0f1e30 -2.47%, #1d4048 154.33%);
  border-radius: 39px;
  cursor: pointer;
  border: none;
  overflow: hidden;
  h2 {
    font-weight: 300;
    font-size: 20px;
    letter-spacing: -0.1em;
    color: #53899a;
    text-transform: uppercase;
    margin: 0;
  }
  @media (max-width: 600px) {
    width: 88px;
    height: 23px;
    right: 26px;
    h2 {
      font-size: 12px;
    }
  }
`;
const ButtonLoading = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #53899a;
  box-shadow: 20px 0 #53899a, -32px 0 #53899a;
  position: relative;
  animation: ${flash} 0.5s ease-out infinite alternate;
  @media (max-width: 800px) {
    width: 5px;
    height: 5px;
  }
`;
const ErrorTextContent = styled.h2`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  margin-top: 10px;
  color: #7e2424;
`;

export {
  FormWrapper,
  FormTitle,
  FormContent,
  FormInput,
  FormButton,
  ButtonLoading,
  ErrorTextContent,
};
