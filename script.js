// --- Inisialisasi Elemen ---
const startBtn = document.getElementById('startBtn');
const blowBtn = document.getElementById('blowBtn');
const fotoBtn = document.getElementById('fotoBtn');
const akhirBtn = document.getElementById('akhirBtn');
const pemicuKejutan = document.getElementById('pemicuKejutan');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const cakeEmoji = document.getElementById('cakeEmoji');

// --- Fungsi Navigasi Halaman ---
startBtn.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
});

blowBtn.addEventListener('click', () => {
    cakeEmoji.innerText = '🍰';
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
    }, 1000);
});

fotoBtn.addEventListener('click', () => {
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
});

akhirBtn.addEventListener('click', () => {
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
});

// --- Logika Kejutan 3D (Halaman Terakhir) ---
pemicuKejutan.addEventListener('click', function() {
    // Sembunyikan tombol pemicu
    this.style.display = 'none';
    
    // Tampilkan container animasi
    const container3d = document.getElementById('love-3d-container');
    container3d.classList.remove('hidden');

    // Buat formasi hati 3D
    const heartContainer = document.getElementById('heart');
    const totalText = 60; // Jumlah teks "I Love You"

    for (let i = 0; i < totalText; i++) {
        const textElement = document.createElement('div');
        textElement.className = 'love-text';
        textElement.innerText = 'I Love You';
        
        // Perhitungan matematika untuk posisi 3D
        const phi = Math.acos(-1 + (2 * i) / totalText);
        const theta = Math.sqrt(totalText * Math.PI) * phi;

        const posX = 100 * Math.sin(phi) * Math.cos(theta);
        const posY = 100 * Math.sin(phi) * Math.sin(theta);
        const posZ = 100 * Math.cos(phi);

        // Terapkan posisi pada elemen
        textElement.style.transform = `translate3d(${posX + 100}px, ${posY + 100}px, ${posZ}px)`;
        heartContainer.appendChild(textElement);
    }
});
