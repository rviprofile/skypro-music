import * as S from "../login/styles";
import logo from "./logo_modal-copy.png";
import { Link } from "react-router-dom";

export default function SignUpWindow() {
  return (
    <S.LoginContainer>
      <S.LoginLogoImg alt="logo" src={logo}></S.LoginLogoImg>
      <S.LoginInput placeholder="Почта" type="mail" />
      <S.LoginInput placeholder="Пароль" type="password" />
      <S.LoginInput placeholder="Подтвердите пароль" type="password" />
      <S.SignButton>Зарегистрироваться</S.SignButton>
    </S.LoginContainer>
  );
}
