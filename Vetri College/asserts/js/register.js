
  document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("#registerModal form");
    const registerModal = new bootstrap.Modal(document.getElementById("registerModal"));
    const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));

    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Hide register modal
      registerModal.hide();

      // Wait a moment for the fade out, then show thank you modal
      setTimeout(() => {
        thankYouModal.show();
      }, 500);
    });
  });

