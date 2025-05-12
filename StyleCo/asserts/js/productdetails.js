

  function showCategory(id) {
    const allSections = ['kurtas-4', 'winterwear-4', 'dresses-4', 'baby-4', 'skirt-4', 't-shirt-4'];
    const allButtons = document.querySelectorAll('#buttons button');

    // Hide all sections
    allSections.forEach(sectionId => {
      document.getElementById(sectionId).style.display = 'none';
    });

    // Remove 'active' class from all buttons
    allButtons.forEach(btn => btn.classList.remove('active'));

    // Show selected section and activate its button
    document.getElementById(id + '-4').style.display = 'flex';
    document.getElementById(id).classList.add('active');
  }

  // Run on page load
  window.onload = function () {
    showCategory('kurtas');
  };

   // changing image grid
  const setAImages = [
    ["./asserts/images/reg explore image frame 1.png", "./asserts/images/reg explore image 3rd frame 1.png"], // top-left
    ["./asserts/images/reg explore image 1st frame 2.png", "./asserts/images/reg explore image 3rd frame 2.png"]  // bottom-right
  ];

  const setBImages = [
    ["./asserts/images/reg winter 3.png", "./asserts/images/reg explore image 4th frame 1.png"], // top-right
    ["./asserts/images/reg explore image 2nd frame 2.png", "./asserts/images/reg explore image 4th frame 2.png"]  // bottom-left
  ];

  const elements = {
    tl: document.getElementById('tl'),
    tr: document.getElementById('tr'),
    bl: document.getElementById('bl'),
    br: document.getElementById('br'),
  };

  let index = 0;
  let isSetA = true;

  function updateImages() {
    if (isSetA) {
      // Clear B
      [elements.tr, elements.bl].forEach(cell => cell.innerHTML = '');

      // Show A
      [elements.tl, elements.br].forEach((cell, i) => {
        const img = document.createElement('img');
        img.src = setAImages[i][index % setAImages[i].length];
        img.classList.add('active');
        cell.appendChild(img);
      });

    } else {
      // Clear A
      [elements.tl, elements.br].forEach(cell => cell.innerHTML = '');

      // Show B
      [elements.tr, elements.bl].forEach((cell, i) => {
        const img = document.createElement('img');
        img.src = setBImages[i][index % setBImages[i].length];
        img.classList.add('active');
        cell.appendChild(img);
      });

      index++; // increment only after both sets have shown
    }

    isSetA = !isSetA;
  }

  updateImages();
  setInterval(updateImages, 1000);
