document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const emaill = document.getElementById('emaill').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    const userData = {
        firstName,
        lastName,
        username,
        emaill,
        password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Account created successfully!');
    window.location.href = 'login.html';

});
window.addEventListener('load', function() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        alert('Welcome back!');
    }
});
function logout() {
    localStorage.removeItem('userData');
    alert('You have been logged out!');
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
