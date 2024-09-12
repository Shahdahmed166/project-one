document.addEventListener("DOMContentLoaded", () => {
    const largeImage = document.getElementById('largeImage');
    const thumbnails = document.getElementById('thumbnails');
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        largeImage.src = selectedProduct.image_link;

        for (let i = 0; i < 3; i++) {
            const thumbnail = document.createElement('img');
            thumbnail.src = selectedProduct.image_link; 
            thumbnail.style.width = '100px'; 
            thumbnail.style.height = '100px';
            thumbnail.style.margin = '10px';
            thumbnail.style.cursor = 'pointer';
            thumbnails.appendChild(thumbnail);

            thumbnail.addEventListener('click', () => {
                largeImage.src = selectedProduct.image_link;
            });
        }
        document.getElementById('productDetails').innerHTML += `
            <h2>${selectedProduct.name}</h2>
            <p>Brand: ${selectedProduct.brand}</p>
            <p>Price: $${selectedProduct.price}</p>
            <p>Description: ${selectedProduct.description || 'No description available.'}</p>
        `;
    } else {
        document.getElementById('productDetails').innerHTML = '<p>No product selected.</p>';
    }
});
var header = document.querySelector("header");
var btn = document.querySelector(".btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    header.classList.remove("navdefault");
    header.classList.add("navscroll");
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    header.classList.remove("navscroll");
    header.classList.add("navdefault");
  }
});

btn.addEventListener("click", function () {
  window.scrollTo("", 0);
});

const toggle = document.getElementById("modeToggle");
const body = document.body;

toggle.addEventListener("click", function () {
  body.classList.toggle("light-mode");
  this.classList.toggle("active");
});