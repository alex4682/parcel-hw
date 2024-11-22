const users = [];

const getData = () => {
    const name = document.querySelector("#name").value; // Отримуємо значення з input
    const email = document.querySelector("#email").value; // Отримуємо значення з input
    const text = document.querySelector("#text").value; // Отримуємо значення з textarea

    // Додаємо об'єкт користувача в масив
    users.push({
        userName: name,
        userEmail: email,
        userText: text,
    });
};

const returnData = () => {
    users.forEach((element) => {
        console.log(`Дякую ${element.userName}, за зворотній зв'язок!`);
    });
};

export { getData, returnData };
