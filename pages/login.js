function validateCredentials(username, password) {
  if (username.length < 6 || password.length < 6) {
    return "Username dan password harus minimal 6 karakter.";
  }
  if (!/\d/.test(username) || !/\d/.test(password)) {
    return "Username dan password harus mengandung setidaknya satu angka.";
  }
  return true;
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validationResult = validateCredentials(username, password);
  if (validationResult === true) {
    // Simulasi login berhasil (GANTI DENGAN AUTENTIKASI SEBENARNYA)
    window.location.href = 'next/after.html';
    
  } else {
    alert(validationResult);
  }
});

const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
showPasswordCheckbox.addEventListener('change', function() {
  passwordInput.type = this.checked ? 'text' : 'password';
});

// Tambahkan event listener untuk tombol logout (jika dibutuhkan)
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    // Hapus data login (jika ada)
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loggedInArea').style.display = 'none';
  });
}