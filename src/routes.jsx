import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { MainPage } from "./pages/main";
import { LoginPage } from "./pages/login";
import { CategoryPage } from "./pages/category";
import { SignUpPage } from "./pages/signup";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Главная страница */}
      <Route path="/" element={<MainPage />} />

      {/* Вход в приложение */}
      <Route path="/login" element={<LoginPage />} />

      {/* Регистрация */}
      <Route path="/signup" element={<SignUpPage />} />

      {/* 
      :1 - Плейлист дня
      :2 - 100 Танцевальных хитов
      :3 - Инди заряд
      :4 - Мои треки
       */}
      <Route path="/category/:id" element={<CategoryPage />} />

      {/* Страница не найдена */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
