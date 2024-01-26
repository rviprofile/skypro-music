import { getCookie } from "../setCookie";
export default async function getAllFavorites() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getCookie("access")}`
      }
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
    const data = await response.json()
    return data
}
