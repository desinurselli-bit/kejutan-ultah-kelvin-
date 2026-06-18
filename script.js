const startBtn = document.getElementById('startBtn');
const blowBtn = document.getElementById('blowBtn');
const fotoBtn = document.getElementById('fotoBtn');
const akhirBtn = document.getElementById('akhirBtn');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const cakeEmoji = document.getElementById('cakeEmoji');

// Pindah dari halaman 1 ke halaman 2
startBtn.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
});

// Aksi ketika tombol Tiup Lilin diklik
blowBtn.addEventListener('click', () => {
    // Mengubah kue utuh menjadi kue potongan (efek lilin padam)
    cakeEmoji.innerHTML = '🍰';
    
    // Memberikan jeda 1,2 detik agar Kelvin bisa melihat kuenya berubah baru pindah halaman
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
    }, 1200); 
});

// Pindah dari halaman 3 ke halaman 4 (Foto)
fotoBtn.addEventListener('click', () => {
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
});

// Pindah dari halaman 4 ke halaman 5 (Pesan Terakhir)
akhirBtn.addEventListener('click', () => {
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
});
