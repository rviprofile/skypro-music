import * as S from "./styles";
import logo from "./logo_modal-copy.png";
import { Link } from "react-router-dom";

export default function LoginWindow() {
  return (
    <S.LoginContainer>
      <S.LoginLogoImg alt="logo" src={logo}></S.LoginLogoImg>
      <S.LoginInput placeholder="Почта" type="mail" />
      <S.LowerInput placeholder="Пароль" type="password" />
      <S.LoginButton>Войти</S.LoginButton>
      <Link to="/signup">
        <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
      </Link>
    </S.LoginContainer>
  );
}
