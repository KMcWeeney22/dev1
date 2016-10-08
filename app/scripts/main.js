console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

document.getElementById('change-theme').onclick = function () {
    document.body.classList.toggle('alternate-theme');
};
