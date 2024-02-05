import { getCookie } from "../setCookie";
import setCookie from "../setCookie";

export default async function getAccessToken() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/refresh/",
    {
      method: "POST",
      body: JSON.stringify({
        refresh: getCookie("refresh"),
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    setCookie("access", data.access)
    return data
}
