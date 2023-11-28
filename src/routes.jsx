import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { MainPage } from "./pages/main";
import { LoginPage } from "./pages/login";
import { FavoritesPage } from "./pages/favorites";
import { RegisterPage } from "./pages/refister";
import { CategoryPage } from "./pages/category";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/" element={<MainPage/>} />
    </Routes>
  );
};
