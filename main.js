import * as userData from "./modules/get-user-data.js"; // Додано розширення .js для імпорту

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки
    userData.getData(); // Викликаємо функцію для отримання даних
    userData.returnData(); // Викликаємо функцію для виводу даних
});
