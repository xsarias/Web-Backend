'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        icon.src = "./resources/light_mode.png";
    } else {
        icon.src = "./resources/dark_mode.png";
    }

    console.log('current class name: ' + className);
});