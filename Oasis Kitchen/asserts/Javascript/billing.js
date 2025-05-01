const total=localStorage.getItem("orderTotal");
        document.getElementById("display").innerText=total
        document.getElementById('redirectForm').addEventListener('submit', function(event) {
          event.preventDefault(); 
          const selectedOption = document.querySelector('input[name="option"]:checked').value;
          window.location.href = selectedOption; 
        });