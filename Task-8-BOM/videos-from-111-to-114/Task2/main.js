let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let ageInput = document.getElementById('age');
let countrySelect = document.getElementById('country');

// Save data to sessionStorage
usernameInput.addEventListener('input', function() {
  sessionStorage.setItem('username', usernameInput.value);
});

emailInput.addEventListener('input', function() {
  sessionStorage.setItem('email', emailInput.value);
});

ageInput.addEventListener('input', function() {
  sessionStorage.setItem('age', ageInput.value);
});

countrySelect.addEventListener('change', function() {
  sessionStorage.setItem('country', countrySelect.value);
});

// Restore saved data on page load
window.onload = function() {
  if (sessionStorage.getItem('username')) {
    usernameInput.value = sessionStorage.getItem('username');
  }
  if (sessionStorage.getItem('email')) {
    emailInput.value = sessionStorage.getItem('email');
  }
  if (sessionStorage.getItem('age')) {
    ageInput.value = sessionStorage.getItem('age');
  }
  if (sessionStorage.getItem('country')) {
    countrySelect.value = sessionStorage.getItem('country');
  }
}

// Prevent form submit (just for demo)
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
});