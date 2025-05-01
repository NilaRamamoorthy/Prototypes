localStorage.setItem('username', 'dreamydairy@gmail.com');
localStorage.setItem('password', '123456');

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById('email').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});