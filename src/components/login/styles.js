import styled from "styled-components";


export const LoginContainer = styled.form`
  width: 366px;
  height: 439px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const LoginInput = styled.input`
  height: 52px;
  width: 278.5px;
  border: none;
  border-bottom-color: #d0cece;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    color: #e1e1e1;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`;

export const LowerInput = styled(LoginInput)`
  margin-bottom: 60px;
  margin-top: 20px;
`;

export const LoginButton = styled.button`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  border: 0;
  color: #fff;
  width: 278px;
  height: 52px;
  border-radius: 6px;
  background: var(--palette-purple-90, #580ea2);
  margin-bottom: 20px;

  &:hover {
    background: #3f007d;
  }

  &:active {
    background: var(--palette-purple-100, #271a58);
  }
`;

export const RegisterButton = styled.button`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  border-radius: 6px;
  border: 1px solid #d0cece;
  color: #000000;
  width: 278px;
  height: 52px;
  background: transparent;
  margin-bottom: 47px;

  &:hover {
    border: 1px solid #d0cece;

    background: var(--palette-gray-10, #f4f5f6);
  }

  &:active {
    border: 1px solid #d0cece;

    background: #d9d9d9;
  }
`;

export const LoginLogoImg = styled.img`
  margin: 43px;
`;

export const SignButton = styled(LoginButton)`
margin-top: 60px`