document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  const cachedData = localStorage.getItem('products');
  if (cachedData) {
      displayProducts(JSON.parse(cachedData).slice(66, 86));
  } else {
      fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
          .then(response => response.json())
          .then(data => {
              localStorage.setItem('products', JSON.stringify(data));
              document.querySelectorAll('.skeleton').forEach(skeleton => skeleton.remove());
              displayProducts(data.slice(66, 83));
          })
          .catch(error => console.error("Error fetching the products:", error));
  }

  function displayProducts(products) {
      products.forEach((product, index) => {
          const productElement = document.createElement('div');
          productElement.classList.add('product');
          productElement.innerHTML = `
              <img src="${product.image_link}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p>${product.brand}</p>
              <p>Price: $${product.price}</p>
          `;
          productElement.addEventListener('click', () => {
              localStorage.setItem('selectedProduct', JSON.stringify(product));
              window.location.href = 'single-product.html'; 
          });
          
          productList.appendChild(productElement);
          setTimeout(() => {
              productElement.classList.add('show');
          }, index * 100);
      });
  }

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
});