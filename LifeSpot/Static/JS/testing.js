﻿function setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);

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






function nameGet() {
    let name = prompt("Enter you Name :");
    alert(` Hello bro ${name} . In you name ${name.length} sumbols`)
}


let elements = document.getElementsByTagName('*');
alert(`How much elements ${elements.length}`);

function lookEnter() {
    let elements = document.getElementsByTagName('input');
    let element = elements[0];
    let elementText = element.value;
    alert(elementText)
}