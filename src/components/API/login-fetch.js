export default async function login_fetch(email, password) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  if (response.status === 400) {
    return data[Object.keys(data)[0]][0];
  }
  if (response.status === 401) {
   return data.detail;
  }
  if (response.status === 500) {
    return "Сервер не отвечает";
  }
  return data
}
