
// JavaScript to open quote modal

  function openModal(button) {
    const card = button.closest('.card');
    const title = card.parentElement.querySelector('h3')?.textContent || 'Plan';
    const price = card.querySelector('.price')?.textContent || '0';
    const featureItems = card.querySelectorAll('.feature-list li');

    document.getElementById('selectedPlanTitle').textContent = title;
    document.getElementById('selectedPlanPrice').textContent = price;

    const featuresList = document.getElementById('selectedPlanFeatures');
    featuresList.innerHTML = '';
    featureItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.textContent;
      featuresList.appendChild(li);
    });

    const modal = new bootstrap.Modal(document.getElementById('quoteModal'));
    modal.show();
  }


//  JavaScript to handle form submission

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inquiryForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Stop default submission

      // Hide quote modal
      const quoteModalEl = document.getElementById('quoteModal');
      const quoteModal = bootstrap.Modal.getInstance(quoteModalEl);
      quoteModal.hide();

      // Show thank you modal after transition
      setTimeout(() => {
        const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();
        form.reset();
      }, 500);
    });
  });
