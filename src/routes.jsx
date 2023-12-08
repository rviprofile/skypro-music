import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { MainPage } from "./pages/main";
import { LoginPage } from "./pages/login";
import { CategoryPage } from "./pages/category";
import { SignUpPage } from "./pages/signup";
import { FavoritesPage } from "./pages/favorites";
import {ProtectedRoute} from "./components/protected-route/index.js"

export const AppRoutes = ({user}) => {
  return (
    <Routes>
      

      {/* Главная страница */}
      <Route path="/" element={<ProtectedRoute><MainPage/></ProtectedRoute>} />

      {/* Вход в приложение */}
      <Route path="/login" element={<LoginPage />} />

      {/* Регистрация */}
      <Route path="/signup" element={<SignUpPage />} />

      {/* Мои треки */}
      <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />

      {/* 
      :1 - Плейлист дня
      :2 - 100 Танцевальных хитов
      :3 - Инди заряд
       */}
      <Route path="/category/:id" element={<ProtectedRoute><CategoryPage /></ProtectedRoute>} />

      {/* Страница не найдена */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
