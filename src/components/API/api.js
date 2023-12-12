// const URL = "https://skypro-music-api.skyeng.tech/catalog/track/all/";
// const token = "666";
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
  const data = await response.json();
  return data;
}
