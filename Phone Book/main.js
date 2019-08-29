const SELECTORS = {
    name: '.person',
    phone: '.phone',
    submitBtn: '.submitBtn',
    list: '.contacts',
};

const btn = document.querySelector(SELECTORS.submitBtn);
const personName = document.querySelector(SELECTORS.name);
const personPhone = document.querySelector(SELECTORS.phone);
const list = document.querySelector(SELECTORS.list);

let phoneBook = [];

btn.addEventListener('click', addPerson);

function addPerson() {
    let currentPerson = {
        name: personName.value,
        phone: personPhone.value,
    };

    let isValid = validation(currentPerson);

    if (isValid) {
        if (localStorage.getItem('phoneBook') === null) {
            phoneBook.push(currentPerson);
            localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
        }
        else {
            phoneBook = JSON.parse(localStorage.getItem('phoneBook'));
            let isContent = false;

            for (let i = 0; i < phoneBook.length; i++) {
                if ((phoneBook[i].name.toLowerCase() === currentPerson.name.toLowerCase()) && (phoneBook[i].phone.toLowerCase() === currentPerson.phone.toLowerCase())) {
                    isContent = true;
                }
            }

            if (!isContent) {
                phoneBook.push(currentPerson);
                localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
            }
            else {
                notify('Already contained person with this name!');
            }
        }

        clear();
        printPersons();
    }
}

function validation(currentPerson) {
    let validName = null;
    let validPhone = null;

    let namePattern = /[A-Za-z ]{4,}/g;
    let phonePattern = /\d{10}/g;

    let isValidName = false;
    let isValidPhone = false;

    while ((validName = namePattern.exec(currentPerson.name)) !== null) {
        isValidName = true;
    }

    while ((validPhone = phonePattern.exec(currentPerson.phone)) !== null) {
        isValidPhone = true;
    }


    if (isValidName && isValidPhone) {
        return true;
    }
    else if (currentPerson.name === '' & currentPerson.phone === '') {
        notify('Enter name and phone number!');
    }
    else {
        if (!isValidName) {
            notify('Enter name with more characters or without digits!');
        }
        else if (!isValidPhone) {
            notify('Enter phone number with more characters or without letters!')
        }
        return false;
    }
}

function notify(message) {
    document.getElementById('notification').textContent = message;
    document.getElementById('notification').style.display = 'block';

    setTimeout(function () {
        document.getElementById('notification').style.display = 'none';
    }, 4000)
}

function printPersons() {
    let currentPhoneBook = JSON.parse(localStorage.getItem('phoneBook'));
    list.innerHTML = '';

    for (let i = 0; i < currentPhoneBook.length; i++) {
        let name = currentPhoneBook[i].name;
        let phone = currentPhoneBook[i].phone;

        list.innerHTML += '<div>' +
            '<h3>' + name + ': ' + phone +
            ' <a onclick="deletePersons(\'' + name + ' ' + phone + '\')" class = "btn" href="#">Delete</a> ' +
            '</h3>' +
            '</div>';
    }
}

function deletePersons(person) {
    person = person.split(' ');
    let currentPhoneBook = JSON.parse(localStorage.getItem('phoneBook'));
    currentPhoneBook = currentPhoneBook.filter(p => (p.name != person[0] || p.phone != person[1]));
    localStorage.setItem('phoneBook', JSON.stringify(currentPhoneBook));
    printPersons();
}

function clear() {
    personName.value = '';
    personPhone.value = '';
}