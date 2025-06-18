
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Close the contact modal
    const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    contactModal.hide();

    // Wait for animation to finish, then show thank you modal
    setTimeout(() => {
        const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();
    }, 500); 
});
//Login Trigger Btn
const loginTriggerBtn = document.getElementById('loginTriggerBtn');
const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'));

// Update button to "Nivea" with icon
function updateToLoggedIn() {
    loginTriggerBtn.innerHTML = '<i class="bi bi-person-fill"></i> Nivea';
}

// Reset to login state
function updateToLoggedOut() {
    loginTriggerBtn.innerHTML = '<i class="bi bi-person-fill fs-3"></i> Login';
}

// On login form submit
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    sessionStorage.setItem('isLoggedIn', 'true');
    updateToLoggedIn();

    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
});


loginTriggerBtn.addEventListener('click', function () {
    const loginModalEl = document.getElementById('loginModal');
    const loginModalInstance = bootstrap.Modal.getInstance(loginModalEl) || new bootstrap.Modal(loginModalEl);

    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        loginModalInstance.hide();
        setTimeout(() => {
            logoutModal.show();
        }, 300);
    } else {
        loginModalInstance.show();
    }
});
// On confirm logout
document.getElementById('confirmLogoutBtn').addEventListener('click', function () {
    sessionStorage.removeItem('isLoggedIn');
    updateToLoggedOut();
    logoutModal.hide();
});

// On page load
window.addEventListener('DOMContentLoaded', function () {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        updateToLoggedIn();
    } else {
        updateToLoggedOut();
    }
});

