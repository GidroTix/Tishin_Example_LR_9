// Функция для изменения фона при вводе в поле
document.getElementById('name').addEventListener('input', function () {
    this.style.backgroundColor = '#b3e0b3'; // Зеленый оттенок фона
});
document.getElementById('fam').addEventListener('input', function () {
    this.style.backgroundColor = '#b3e0b3'; // Зеленый оттенок фона
});
document.getElementById('number').addEventListener('input', function () {
    this.style.backgroundColor = '#b3e0b3'; // Зеленый оттенок фона
});
document.getElementById('adres').addEventListener('input', function () {
    this.style.backgroundColor = '#b3e0b3'; // Зеленый оттенок фона
});

// Функция проверки имени
function checkName() {
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ\s]{3,30}$/;
    if (regex.test(name)) {
        document.getElementById("checkName").innerHTML = "";
        return true;
    } else {
        document.getElementById("checkName").style.color = "red";
        document.getElementById("checkName").innerHTML = "Введите от 3 до 30 символов без цифр";
        return false;
    }
}

// Функция проверки фамилии
function checkFam() {
    var fam = document.getElementById("fam").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ\s]{2,50}$/;
    if (regex.test(fam)) {
        document.getElementById("checkFam").innerHTML = "";
        return true;
    } else {
        document.getElementById("checkFam").style.color = "red";
        document.getElementById("checkFam").innerHTML = "Введите от 2 до 50 символов без цифр";
        return false;
    }
}

// Функция проверки адреса (Destination)
function checkAdres() {
    var adres = document.getElementById("adres").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ0-9\s,.-]{3,100}$/;

    if (regex.test(adres)) {
        document.getElementById("adres_check").innerHTML = "";
        return true;
    } else {
        document.getElementById("adres_check").style.color = "red";
        document.getElementById("adres_check").innerHTML = "Введите корректный адрес (от 3 до 100 символов)";
        return false;
    }
}

// Функция проверки номера телефона
function checkPhone() {
    var phone = document.getElementById("number").value;
    var regex = /^\d{3}-\d{3}-\d{3}$/;
    if (regex.test(phone)) {
        document.getElementById("checkNumber").innerHTML = "";
        return true;
    } else {
        document.getElementById("checkNumber").style.color = "red";
        document.getElementById("checkNumber").innerHTML = "Номер введен не верно, используйте формат 123-456-789";
        return false;
    }
}

// Функция вывода данных
function outputData() {
    var name = document.getElementById("name").value;
    var fam = document.getElementById("fam").value;
    var number = document.getElementById("number").value;
    var adres = document.getElementById("adres").value;
    var date = document.getElementById("date").value;
    var paymentmethod = document.getElementById("paymentmethod").value;

    // Проверка, что все поля заполнены
    if (name && fam && number && adres && date) {
        var summary = `
            <h4>Ваш заказ:</h4>
            <p><strong>First Name:</strong> ${name}</p>
            <p><strong>Last Name:</strong> ${fam}</p>
            <p><strong>Phone number:</strong> ${number}</p>
            <p><strong>Destination:</strong> ${adres}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Pay Method:</strong> ${paymentmethod}</p>
        `;
        document.getElementById("summary").innerHTML = summary;
        document.getElementById("summary").style.color = "black";
    } else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все поля.";
    }
}

// Обработчик отправки формы
document.getElementById("form").onsubmit = function (event) {
    event.preventDefault(); // Предотвращаем отправку формы
    if (checkName() && checkFam() && checkPhone() && checkAdres()) {
        outputData();
    }
};
