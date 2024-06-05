import AuthPage from "../../components/AuthPage/AuthPage.jsx";
import { EasyBackground } from "../../styles";

export const LoginPage = () => {
  return (
    <EasyBackground>
      <AuthPage isLoginMode={true} />
    </EasyBackground>
  );
};
