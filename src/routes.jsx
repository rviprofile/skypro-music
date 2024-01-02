import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { MainPage } from "./pages/main";
import { LoginPage } from "./pages/login";
import { CategoryPage } from "./pages/category";
import { FavoritesPage } from "./pages/favorites";
import {ProtectedRoute} from "./components/protected-route/index.js"
import { RegisterPage } from "./pages/register/index.js";

export const AppRoutes = ({activePlayer, setActivePlayer}) => {
  return (
    <Routes>
      

      {/* Главная страница */}
      <Route path="/" element={<ProtectedRoute><MainPage activePlayer={activePlayer} setActivePlayer={setActivePlayer}/></ProtectedRoute>} />

      {/* Вход в приложение */}
      <Route path="/login" element={<LoginPage />} />

      {/* Регистрация */}
      <Route path="/register" element={<RegisterPage />} />

      {/* Мои треки */}
      <Route path="/favorites" element={<ProtectedRoute><FavoritesPage activePlayer={activePlayer} setActivePlayer={setActivePlayer} /></ProtectedRoute>} />

      {/* 
      :1 - Плейлист дня
      :2 - 100 Танцевальных хитов
      :3 - Инди заряд
       */}
      <Route path="/category/:id" element={<ProtectedRoute><CategoryPage activePlayer={activePlayer} setActivePlayer={setActivePlayer} /></ProtectedRoute>} />

      {/* Страница не найдена */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
