import * as S from "./styles";
import logo from "./logo_modal-copy.png";
import { Link } from "react-router-dom";
import { CookieSave } from "../coockieSave";

export default function SignUpWindow() {
  return (
    <S.LoginContainer>
      <S.LoginLogoImg alt="logo" src={logo}></S.LoginLogoImg>
      <S.LoginInput placeholder="Почта" type="mail" />
      <S.LoginInput placeholder="Пароль" type="password" />
      <S.LoginInput placeholder="Подтвердите пароль" type="password" />
      <Link to="/">
        <S.SignButton type="submit" onClick={CookieSave}>
          Зарегистрироваться
        </S.SignButton>
      </Link>
    </S.LoginContainer>
  );
}
