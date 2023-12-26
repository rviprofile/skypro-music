import AuthPage from "../../components/AuthPage/AuthPage.jsx";
import { EasyBackground } from "../../styles";

export const RegisterPage = () => {
  return (
    <EasyBackground>
      <AuthPage isLoginMode={false}/>
    </EasyBackground>
  );
};