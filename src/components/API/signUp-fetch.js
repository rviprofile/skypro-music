export default async function signUp_fetch(email, password, username) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (response.status === 400) {
    return data[Object.keys(data)[0]][0];
  }
  if (response.status === 500) {
    return 'Сервер не отвечает'
  }
  return data;
}

// Код 201 - Пользователь успешно зарегистрирован
// в теле ответа будет объект созданного пользователя:
// {
//   "id": 666,
//   "username": "gleb@fokin.ru",
//   "first_name": "",
//   "last_name": "",
//   "email": "gleb@fokin.ru"
// }

// Код 400 - Не получилось зарегистрировать пользователя с указанными данными
// в теле ответа будет объект объект с ошибками регистрации:
// {
//   "username": ["Пользователь с таким именем уже существует."],
//   "email": ["Пользователь с таким адрес электронной почты уже существует."],
//   "password": [
//     "Введённый пароль слишком короткий. Он должен содержать как минимум 8 символов.",
//     "Введённый пароль слишком широко распространён.",
//     "Введённый пароль состоит только из цифр."
//   ]
// }

// Код 500 - Сервер сломался
