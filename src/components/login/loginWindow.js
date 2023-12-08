import * as S from "./styles";
import logo from "./logo_modal-copy.png";
import { Link } from "react-router-dom";
import { CookieSave } from "../coockieSave";
import { useNavigate } from "react-router-dom";



export default function LoginWindow() {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault()
    CookieSave();
    navigate("/")
  };
  return (
    <S.LoginContainer onSubmit={onSubmit}>
      <S.LoginLogoImg alt="logo" src={logo}></S.LoginLogoImg>
      <S.LoginInput placeholder="Почта" type="mail" name="mail" />
      <S.LowerInput placeholder="Пароль" type="password" name="password" />
        <S.LoginButton type="submit">
          Войти
        </S.LoginButton>
      <Link to="/signup">
        <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
      </Link>
    </S.LoginContainer>
  );
}
