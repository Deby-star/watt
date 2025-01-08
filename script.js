let countdown = 3; // Hitungan mundur dari 3 detik
const countdownElement = document.getElementById('countdown'); // Elemen untuk menampilkan hitungan mundur

const redirectLoop = setInterval(function() {
    if (countdown > 0) {
        countdown--;
    } else {
        clearInterval(redirectLoop); // Hentikan loop
        window.location.href = "pages/login.html"; // Lakukan redirect
    }
}, 1000); // Waktu tunggu 1 detik