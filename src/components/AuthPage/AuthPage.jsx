import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles.js";
import { useEffect, useState } from "react";
import signUp_fetch from "./../API/signUp-fetch.js";
import login_fetch from "./../API/login-fetch.js";
import setCookie from "./../setCookie.js";
import { useUserContext } from "../context/userContext.js";
import getToken from "../API/getToken.js";

export default function AuthPage({ isLoginMode = true }) {
  const userContext = useUserContext();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Блокируем кпонку
    setIsButtonDisabled(true);
    // Проверка на правильность заполнения формы
    if (email === "") {
      setError("Введите почту");
      // Возвращаем активность кнопки
      setIsButtonDisabled(false);
      return;
    }
    if (password === "") {
      setError("Введите пароль");
      // Возвращаем активность кнопки
      setIsButtonDisabled(false);
      return;
    }
    // Запрос в API
    login_fetch(email, password).then((response) => {
      // В случае ошибки запроса уведомляем пользователя
      if (typeof response === "string") {
        setError(response);
        // Возвращаем активность кнопки
        setIsButtonDisabled(false);
        return;
      }
      // Сохраняем данные в Куки
      setCookie("id", response.id);
      setCookie("name", response.username);
      // Сохраняем данные в контекст
      userContext.toggleUser(response);
      // Получаем токен
      getToken({email, password}).then((response) => {
        setCookie("access", response.access)
        setCookie("refresh", response.refresh);
      });
      // Переходим на главную
      navigate("/");
    });
  };

  const handleRegister = async () => {
    // Блокируем кпонку
    setIsButtonDisabled(true);
    // Проверка на правильность заполнения формы
    if (email === "") {
      setError("Введите почту");
      // Возвращаем активность кнопки
      setIsButtonDisabled(false);
      return;
    }
    if (username === "") {
      setError("Введите имя пользователя");
      // Возвращаем активность кнопки
      setIsButtonDisabled(false);
      return;
    }
    if (password === "") {
      setError("Введите пароль");
      // Возвращаем активность кнопки
      setIsButtonDisabled(false);
      return;
    }
    if (password != repeatPassword) {
      setError("Пароли не совпадают");
      // Возвращаем активность кнопки
      setIsButtonDisabled(false);
      return;
    }
    // Запрос в API
    signUp_fetch(email, password, username).then((response) => {
      // В случае ошибки запроса уведомляем пользователя
      if (typeof response === "string") {
        setError(response);
        // Возвращаем активность кнопки
        setIsButtonDisabled(false);
        return;
      }
      // Сохраняем данные в Куки
      setCookie("id", response.id);
      setCookie("name", response.username);
      // Сохраняем данные в контекст
      userContext.toggleUser(response);
      // Получаем токен
      getToken({email, password}).then((response) => {
        setCookie("access", response.access)
        setCookie("refresh", response.refresh);
      });
      // Переходим на главную
      navigate("/");
    });
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={isButtonDisabled}
                onClick={() => handleLogin({ email, password })}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Имя пользователя"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={isButtonDisabled}
                onClick={handleRegister}
              >
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
