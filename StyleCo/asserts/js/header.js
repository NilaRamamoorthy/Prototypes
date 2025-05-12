

const categoriesDropdownToggle = document.getElementById('categoriesDropdownToggle');
const categoriesDropdownIcon = document.getElementById('categoriesDropdownIcon');

categoriesDropdownToggle.addEventListener('click', function () {
    setTimeout(() => {
        const isExpanded = categoriesDropdownToggle.getAttribute('aria-expanded') === 'true';
        categoriesDropdownIcon.classList.toggle('bi-chevron-down', !isExpanded);
        categoriesDropdownIcon.classList.toggle('bi-chevron-up', isExpanded);
    }, 0); // wait for Bootstrap to update aria-expanded
});

// Reset when clicking outside
document.addEventListener('click', function (event) {
    if (!categoriesDropdownToggle.contains(event.target)) {
        categoriesDropdownIcon.classList.remove('bi-chevron-up');
        categoriesDropdownIcon.classList.add('bi-chevron-down');
    }
});
