const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');
successMsg.style.display="none"
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || phone === "" || message === "") {
        alert("Please fill all fields before submitting!");
    } else {
        successMsg.style.display = 'block';
        form.reset();
    }
});