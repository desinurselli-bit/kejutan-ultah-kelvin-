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
    
    // Memberikan jeda 1,2 detik
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

// ==========================================
// KODE UNTUK MEMUNCULKAN ANIMASI LOVE & BINTANG
// ==========================================
function createFloatingElements() {
    const symbols = ['❤️', '⭐', '✨', '💖', '🌟'];
    const container = document.body;

    setInterval(() => {
        const element = document.createElement('div');
        // Memilih simbol secara acak dari daftar di atas
        element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Mengatur posisi dan gaya animasi lewat kode agar otomatis
        element.style.position = 'fixed';
        element.style.bottom = '-10px';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.fontSize = (Math.random() * 20 + 15) + 'px';
        element.style.opacity = Math.random();
        element.style.pointerEvents = 'none';
        element.style.zIndex = '999';
        element.style.transition = 'transform 5s linear, opacity 5s linear';
        
        container.appendChild(element);

        // Menjalankan animasi ke atas
        setTimeout(() => {
            element.style.transform = `translateY(-105vh) translateX(${(Math.random() - 0.5) * 100}px)`;
            element.style.opacity = '0';
        }, 100);

        // Menghapus elemen setelah animasi selesai agar website tidak berat
        setTimeout(() => {
            element.remove();
        }, 5100);

    }, 400); // Elemen baru muncul setiap 0,4 detik
}

// Jalankan animasi bintang dan love langsung saat web dibuka
createFloatingElements();
