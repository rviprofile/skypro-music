export default async function getSelection(id) {
    const response = await fetch(
      `https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
  }