import { getCookie } from "../setCookie";
import getAccessToken from "./getAccessToken";
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
  if (response.status === 401) {
    getAccessToken().then((response) => {
      return getAllFavorites()
    })
  }
    const data = await response.json()
    return data
}
