import * as S from "./styles";
import logo from "./logo_modal-copy.png";
import { Link } from "react-router-dom";
import { CookieSave } from "../coockieSave";


export default function LoginWindow() {
  return (
    <S.LoginContainer>
      <S.LoginLogoImg alt="logo" src={logo}></S.LoginLogoImg>
      <S.LoginInput
        placeholder="Почта"
        type="mail"
        name="mail"
      />
      <S.LowerInput
        placeholder="Пароль"
        type="password"
        name="password"
      />
      <Link to="/">
        <S.LoginButton type="submit" onClick={CookieSave}>Войти</S.LoginButton>
      </Link>
      <Link to="/signup">
        <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
      </Link>
    </S.LoginContainer>
  );
}
