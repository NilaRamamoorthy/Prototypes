function updateSubtotal(inputElement) {
    const row = inputElement.closest('tr');
    const priceText = row.querySelector('.price').innerText;
    const price = parseFloat(priceText.replace('₹', ''));
    const quantity = parseInt(inputElement.value);
    const subtotalCell = row.querySelector('.subtotal');
    const newSubtotal = price * quantity;
    subtotalCell.innerText = "₹" + newSubtotal;
    updateCartTotal();
  }
  
  function removeRow(buttonElement) {
    const row = buttonElement.closest('tr');
    row.remove();
    updateCartTotal();
  }
  
  function updateCartTotal() {
    const subtotals = document.querySelectorAll('.subtotal');
    let total = 0;
    subtotals.forEach(cell => {
      const amount = parseFloat(cell.innerText.replace('₹', '')) || 0;
      total += amount;
    });
    document.getElementById('cart-subtotal').innerText = "₹" + total;
    document.getElementById('cart-total').innerText = "₹" + total;
  }
  function save(){
  let total=document.getElementById("cart-total").innerText;
  console.log(total);
  
  localStorage.setItem("orderTotal",total);
  }
  // Initialize totals
  updateCartTotal();