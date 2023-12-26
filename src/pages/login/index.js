import AuthPage from "../../components/AuthPage/AuthPage.jsx";
import LoginWindow from "../../components/login/loginWindow.jsx";
import { EasyBackground } from "../../styles";

export const LoginPage = () => {
  return (
    <EasyBackground>
    {/* Страница из репозитория  */}
      <AuthPage isLoginMode={true}/>

    {/* Самодельная страница */}
    {/* <LoginWindow/> */}
    </EasyBackground>
  );
};
