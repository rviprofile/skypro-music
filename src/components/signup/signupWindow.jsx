import * as S from "./styles";
import logo from "./logo_modal-copy.png";
import { setCookie } from "../setCookie";
import { useNavigate } from "react-router-dom";

export default function SignUpWindow() {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    console.log("on submit запущен");
    e.preventDefault();
    setCookie("token", "value");
    navigate("/");
  };
  return (
    <S.LoginContainer onSubmit={onSubmit}>
      <S.LoginLogoImg alt="logo" src={logo}></S.LoginLogoImg>
      <S.LoginInput placeholder="Почта" type="mail" />
      <S.LoginInput placeholder="Пароль" type="password" />
      <S.LoginInput placeholder="Подтвердите пароль" type="password" />
      <S.SignButton type="submit">Зарегистрироваться</S.SignButton>
    </S.LoginContainer>
  );
}
