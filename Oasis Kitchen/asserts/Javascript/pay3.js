const inputs = document.querySelectorAll('.pin-input');
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    if (Array.from(inputs).every(i => i.value.length === 1)) {
      setTimeout(() => {
        window.location.href = "Ordered.html";
      }, 1200);
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});