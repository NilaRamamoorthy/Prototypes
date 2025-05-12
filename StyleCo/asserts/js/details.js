
//toggle wishlist icon
function toggleHeart(el) {
    el.classList.toggle('active');
    el.classList.toggle('bi-heart');
    el.classList.toggle('bi-heart-fill');
}

//Script to change image

function changeImage(element) {
    document.getElementById("main-img").src = element.src;
}

//Order count
function minus() {
    let number = document.getElementById("count").innerText;
    number = parseInt(number);

    if (number > 1) {
        let count = document.getElementById("count");
        count.innerText = number - 1
    }
    number--;
}
function plus() {
    let number = document.getElementById("count").innerText;
    number = parseInt(number);
    let count = document.getElementById("count");
    count.innerText = number + 1
    number++;

}


//tab-content

const desItem = document.getElementById("desItem");
const shipItem = document.getElementById("shipItem");
const description = document.getElementById("description");
const shipping = document.getElementById("shipping");
function des() {

    desItem.style.borderBottom = "2px solid black";
    shipItem.style.border = "none"
    shipping.style.display = "none"
    description.style.display = "block"

}
function ship() {

    shipItem.style.borderBottom = "2px solid black";
    desItem.style.border = "none"
    description.style.display = "none"
    shipping.style.display = "block"

}


const sizeDropdownBtn = document.getElementById('sizeDropdownBtn');
const arrowIcon = document.getElementById('arrowIcon');
const labelSize = document.getElementById('labelSize');
const selectedSize = document.getElementById('selectedSize');
const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');

// Listen for Bootstrap's dropdown events
sizeDropdownBtn.addEventListener('show.bs.dropdown', () => {
    arrowIcon.classList.remove('bi-chevron-down');
    arrowIcon.classList.add('bi-chevron-up');
});

sizeDropdownBtn.addEventListener('hide.bs.dropdown', () => {
    arrowIcon.classList.remove('bi-chevron-up');
    arrowIcon.classList.add('bi-chevron-down');
});

// Handle size selection
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const size = item.textContent.trim();
        selectedSize.textContent = size;
        labelSize.textContent = size;
    });
});
