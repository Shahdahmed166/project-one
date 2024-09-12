document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        if (userData.username === username && userData.password === password) {
            alert('Login successful!');
    
            window.location.href = 'profile.html'; 
            document.getElementById('error').textContent = 'Invalid username or password!';
        }
    } else {
        document.getElementById('error').textContent = 'No account found!';
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
