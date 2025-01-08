const skintones = ["light", "medium", "dark"];
const undertones = ["warm", "cool", "neutral"];

const recommendations = {};

// Mengisi objek recommendations secara dinamis
skintones.forEach(skintone => {
    recommendations[skintone] = {};
    undertones.forEach(undertone => {
        recommendations[skintone][undertone] = {
            text: `Rekomendasi: Gunakan foundation dengan nuansa ${skintone} dan blush on ${undertone}`,
            image: `path/to/${skintone}_${undertone}.jpg` // Ganti dengan path gambar yang sesuai
        };
    });
});

// Mengisi dropdown skintone
const skintoneSelect = document.getElementById('skintone');
skintones.forEach(skintone => {
    const option = document.createElement('option');
    option.value = skintone;
    option.text = skintone.charAt(0).toUpperCase() + skintone.slice(1);
    skintoneSelect.appendChild(option);
});

// Mengisi dropdown undertone
const undertoneSelect = document.getElementById('undertone');
undertones.forEach(undertone => {
    const option = document.createElement('option');
    option.value = undertone;
    option.text = undertone.charAt(0).toUpperCase() + undertone.slice(1);
    undertoneSelect.appendChild(option);
});

// Event listener untuk tombol submit
document.getElementById('submit').addEventListener('click', function() {
    const selectedSkintone = skintoneSelect.value;
    const selectedUndertone = undertoneSelect.value;

    const result = recommendations[selectedSkintone][selectedUndertone];
    document.getElementById('result').innerHTML = `
        <p>${result.text}</p>
        <img src="${result.image}" alt="Rekomendasi Makeup">
    `;
});