// Contact Form Submission Handler
        function handleContactForm(event) {
            event.preventDefault(); // prevent actual form submission
            const modal = new bootstrap.Modal(document.getElementById('contactModal'));
            modal.show();
            event.target.reset();
        }