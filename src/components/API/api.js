export default async function getAllTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    {
      method: "GET",
      //   headers: {
      //     Autorization: `Bearer ${token}`,
      //   },
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
