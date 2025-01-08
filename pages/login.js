// Fungsi untuk memvalidasi kredensial pengguna (diperbarui)
function validateCredentials(username, password) {
  if (username.length < 6 || password.length < 6) {
    return "Username dan password harus minimal 6 karakter.";
  }
  // Regular expression yang lebih kompleks untuk memeriksa angka dan karakter khusus
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password)) {
    return "Password harus minimal 6 karakter, mengandung huruf besar, huruf kecil, dan angka.";
  }
  if (!/^(?=.*\d)[a-zA-Z0-9]{6,}$/.test(username)) {
    return "Username harus minimal 6 karakter dan mengandung angka.";
  }
  return true;
}

// Mendapatkan elemen form login
const loginForm = document.getElementById('loginForm');

// Menambahkan event listener untuk submit form
loginForm.addEventListener('submit', (event) => {
  // Mencegah form dari submit secara default
  event.preventDefault();
  // Mendapatkan nilai username dan password dari form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Memvalidasi kredensial
  const validationResult = validateCredentials(username, password);
  // Jika validasi berhasil
  if (validationResult === true) {
    // Simulasi login berhasil. 
    window.location.href = 'try1/try1.html'; // Redirect ke halaman setelah login
  } else {
    // Jika validasi gagal, tampilkan pesan error
    alert(validationResult);
  }
});

// Mendapatkan elemen input password dan checkbox show password
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');

// Menambahkan event listener untuk checkbox show password
showPasswordCheckbox.addEventListener('change', function() {
  // Mengubah tipe input password menjadi text atau password berdasarkan status checkbox
  passwordInput.type = this.checked ? 'text' : 'password';
});

// Mendapatkan elemen tombol logout (jika ada)
const logoutButton = document.getElementById('logoutButton');

// Menambahkan event listener untuk tombol logout (jika ada)
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    // Implementasikan logika logout di sini, misalnya menghapus session atau cookies.
    // Ini hanya contoh sederhana menyembunyikan form login dan menampilkan area logged in.
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('loggedInArea').style.display = 'none';
  });
}