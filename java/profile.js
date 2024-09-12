function loadProfile() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        
        document.getElementById('firstDisplay').textContent = userData.firstName;
        document.getElementById('lastDisplay').textContent = userData.lastName;
        document.getElementById('userDisplay').textContent = userData.username;
        document.getElementById('emailDisplay').textContent = userData.emaill;
    } else {
        alert('No user is logged in.');
        window.location.href = 'index.html';  
    }
}
window.onload = loadProfile;

function logout() {
    localStorage.removeItem('userData');
    alert('You have been logged out!');
    window.location.href = 'login.html'; 
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