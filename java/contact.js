var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var bodyInput = document.querySelector("#bodyInput");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var form = document.querySelector("form");
var notes = document.querySelector(".notes");

var notesArray = [];

function getLocalStorageData() {
  var data = JSON.parse(localStorage.getItem("notesls"));

  notesArray = data || [];
  showNotesInHTML();
}

getLocalStorageData();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  notesArray.push({
    First: firstName.value,
    Last: lastName.value,
    Phone: phone.value,
    body: bodyInput.value,
    Email: email.value,
  });
  localStorage.setItem("notesls", JSON.stringify(notesArray));
  showNotesInHTML();
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  phone.value = "";
  bodyInput.value = "";
});
function showNotesInHTML() {
  if (notes) {
    notes.innerHTML = "";
    for (var x = 0; x < notesArray.length; x++) {
      notes.innerHTML += `
        <div class="note">
            <h3>${notesArray[x].First}</h3>
            <h3>${notesArray[x].Last}</h3>
            <h3>${notesArray[x].Email}</h3>
            <h3>${notesArray[x].Phone}</h3>
            <p>${notesArray[x].body}</p>
            <div class="buttons">
              <button class="but" onclick="updateNote(${x})">Update</button>
              <button class = "but" onclick="deleteNote(${x})">Delete</button>
            </div>
        </div>
`;
    }
  }
}
function updateNote(index) {
  firstName.value = notesArray[index].First;
  lastName.value = notesArray[index].Last;
  bodyInput.value = notesArray[index].body;
  email.value = notesArray[index].Email;
  phone.value = notesArray[index].Phone;
  deleteNote(index);
}

function deleteNote(index) {
  notesArray.splice(index, 1);

  localStorage.setItem("notesls", JSON.stringify(notesArray));

  showNotesInHTML();
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