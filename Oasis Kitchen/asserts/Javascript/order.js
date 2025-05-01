document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const location = document.getElementById('locationInput').value.trim().toLowerCase();
    const search = document.getElementById('searchInput').value.trim().toLowerCase();

    if (location === "chennai" && search === "pizza") {
      window.location.href = "pizza.html";
    } else {
      alert("No results found for this combination.");
    }
  });