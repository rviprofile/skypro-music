import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  // возвращает куки с указанным name,
  // или undefined, если ничего не найдено
  
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          // eslint-disable-next-line no-useless-escape
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  const isAllowed = getCookie("refresh");

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return children;
};
