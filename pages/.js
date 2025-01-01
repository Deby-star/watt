const loginForm = document.getElementById('loginForm');

function validateNickname(nickname) {
  if (nickname.length < 3) {
    return 'Nama pengguna harus minimal 3 karakter.';
  }
  return null;
}

function validatePassword(password) {
  if (password.length < 6) {
    return 'Kata sandi harus minimal 6 karakter.';
  }
  return null;
}

// Simulasi data pengguna (GANTI DENGAN AUTENTIKASI YANG SEBENARNYA!)
const users = {
  "user123": "password123",
  "testuser": "securepass"
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nickname = document.getElementById('nickname').value;
  const password = document.getElementById('password').value;

  const nicknameError = validateNickname(nickname);
  const passwordError = validatePassword(password);

  if (nicknameError || passwordError) {
    alert(`Terjadi kesalahan:\n${nicknameError || ''}\n${passwordError || ''}\nSilakan coba lagi.`);
  } else {
    // Autentikasi (GANTI DENGAN AUTENTIKASI YANG SEBENARNYA!)
    if (users[nickname] && users[nickname] === password) {
      alert('Login berhasil! Anda akan diarahkan ke halaman berikutnya.');
      window.location.href = 'login1/login1.html'; // Pastikan path benar
    } else {
      alert('Nama pengguna atau kata sandi salah. Silakan coba lagi.');
    }
  }
});