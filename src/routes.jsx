import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { MainPage } from "./pages/main";
import { LoginPage } from "./pages/login";
import { CategoryPage } from "./pages/category";
import { FavoritesPage } from "./pages/favorites";
import { ProtectedRoute } from "./components/protected-route/index.js";
import { RegisterPage } from "./pages/register/index.js";
import Layout from "./components/layout.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Вход в приложение */}
      <Route path="/login" element={<LoginPage />} />
      {/* Регистрация */}
      <Route path="/register" element={<RegisterPage />} />
      {/* Страница не найдена */}
      <Route path="*" element={<NotFound />} />
      
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          {/* Главная страница */}
          <Route index element={<MainPage />} />
          {/* Мои треки */}
          <Route path="favorites" element={<FavoritesPage />} />
          {/* 
            :1 - Плейлист дня
            :2 - 100 Танцевальных хитов
            :3 - Инди заряд
            */}
          <Route path="category/:id" element={<CategoryPage />} />
        </Route>
    </Routes>
  );
};

