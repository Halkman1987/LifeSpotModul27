﻿function getOld() {
    let session = new Map();
    session.set("userAgent", window.navigator.userAgent);
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"));

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
        // a = true + 20 + "name";
    }

    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}

function lookUp() {
    // Сохраняем текст пользовательского запроса.
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector(".video-title").innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        }
        else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }

}

