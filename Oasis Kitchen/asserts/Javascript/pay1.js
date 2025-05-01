function handleSubmit(event) {
    event.preventDefault();
    const upiId = document.getElementById("upiId").value.trim();
    if (upiId !== "") {
      window.location.href = "googlepay2.html"; 
    }
  }