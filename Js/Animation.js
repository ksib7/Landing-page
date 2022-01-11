//Анимация при прокрутке страницы (выполнено с помощью jQuerry).

$(document).ready(function () {

    $('.top').addClass('hidden').viewportChecker({
        classToAdd: "animate__animated animate__fadeInDownBig",
        offset: 0,
        classToRemove: ('hidden'),
    });

    $('.countries').addClass('hidden').viewportChecker({
        classToAdd: "animate__animated animate__fadeInLeft",
        offset: 400,
        classToRemove: ('hidden'),
    });

    $('.card__text').addClass('hidden').viewportChecker({
        classToAdd: "animate__animated animate__zoomInUp",
        offset: 100,
        classToRemove: ('hidden'),
    });

    $('.card__grid').addClass('hidden').viewportChecker({
        classToAdd: "animate__animated animate__backInUp",
        offset: 400,
        classToRemove: ('hidden'),
    });

    $('.contact').addClass('hidden').viewportChecker({
        classToAdd: "animate__animated animate__rubberBand",
        offset: 400,
        classToRemove: ('hidden'),
    });

    $('.container--flex').addClass('hidden').viewportChecker({
        classToAdd: "animate__animated animate__lightSpeedInRight",
        offset: 400,
        classToRemove: ('hidden'),
    });

});

// Добавление эффекта воды на картинки.

$('.card').ripples(); // картинки: America, Spain, London, France.

// Валидация со стороны клиента (при введении email).

let formEl = document.querySelector('form')
let inputs = document.querySelector('input');

formEl.addEventListener('click', function (event) {
    if (inputs.value == '') {
        formEl.classList.add('animate__animated', 'animate__flash');
        alert('Неоходимо ввести Ваш email.');
        event.preventDefault();
    }
});

// Добавление hover эффектов на <buttons>, <details>, <a>.

let linksEl = document.querySelectorAll('a');
let buttonEl = document.querySelectorAll('button');
let deatilsEl = document.querySelectorAll('details')

buttonEl.forEach(function (btn) {
    btn.addEventListener('mouseover', buttonClickHandler);
});

function buttonClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__pulse');
}

buttonEl.forEach(function (btn) {
    btn.addEventListener('mouseout', buttondelClickHandler);
});

function buttondelClickHandler(event) {
    event.target.classList.remove('animate__animated', 'animate__pulse');
}

linksEl.forEach(function (lnks) {
    lnks.addEventListener('mouseover', linkClickHandler);
});

function linkClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__pulse');
}

linksEl.forEach(function (lnks) {
    lnks.addEventListener('mouseout', linkdelClickHandler);
});

function linkdelClickHandler(event) {
    event.target.classList.remove('animate__animated', 'animate__pulse');
}

deatilsEl.forEach(function (dtls) {
    dtls.addEventListener('mouseover', detailsClickHandler);
});

function detailsClickHandler(event) {
    event.target.classList.add('animate__animated', 'animate__pulse');
}

deatilsEl.forEach(function (dtls) {
    dtls.addEventListener('mouseout', detailsdelClickHandler);
});

function detailsdelClickHandler(event) {
    event.target.classList.remove('animate__animated', 'animate__pulse');
}


