var loginModal = document.querySelector('.login__box');
document.getElementById('upload-btn').addEventListener('click', function () {
    loginModal.style.display = 'block';
});
document.getElementById('login-btn').addEventListener('click', function () {
    loginModal.style.display = 'block';
});
document.querySelector('.sidebar__login-btn').addEventListener('click', function () {
    loginModal.style.display = 'block';
});
document.querySelector('.close__btn').addEventListener('click', function () {
    loginModal.style.display = 'none';
});
