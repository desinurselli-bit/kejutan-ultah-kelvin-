// ==========================================
// KODE ANIMASI BANYAK HATI "I LOVE YOU" (EFEK VIDEO SEMALAM)
// ==========================================

// Rumus dasar kurva hati
function getHeartCoord(t, scale) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    return { x: x * scale, y: -y * scale };
}

// Fungsi untuk membuat SATU BENTUK HATI di lokasi tertentu
function buatSatuHati(centerX, centerY) {
    const container = document.getElementById('love-container') || document.body;
    
    // Ukuran hati diacak (ada yang kecil, ada yang sedang biar estetik)
    const skalaHati = Math.random() * (12 - 6) + 6; 
    const jumlahTeks = 40; // Makin banyak, bentuk hatinya makin padat
    
    for (let i = 0; i < jumlahTeks; i++) {
        const t = (i / jumlahTeks) * 2 * Math.PI;
        const pos = getHeartCoord(t, skalaHati);
        
        const span = document.createElement('span');
        span.innerText = 'I Love You';
        span.className = 'text-love';
        
        // Posisikan di koordinat acak tadi + rumus hati
        span.style.left = `${centerX + pos.x}px`;
        span.style.top = `${centerY + pos.y}px`;
        
        // Ukuran tulisan di dalam hati (agak kecil biar bentuk lekukannya jelas)
        span.style.fontSize = Math.random() * (12 - 8) + 8 + 'px'; 
        span.style.position = 'fixed';
        span.style.color = '#ff7675';
        span.style.zIndex = '-1';
        
        // Beri efek animasi memudar dan melayang naik sedikit (seperti di video)
        span.style.animation = 'flyAndFade 4s ease-out forwards';
        
        container.appendChild(span);
        
        // Hapus teks setelah animasi selesai agar tidak membuat HP lag
        setTimeout(() => {
            span.remove();
        }, 4000);
    }
}

// Fungsi untuk memunculkan hati baru secara terus-menerus di lokasi acak
function hujanHatiILoveYou() {
    // Menentukan titik pusat acak di layar HP/Laptop
    const xAcak = Math.random() * window.innerWidth;
    const yAcak = Math.random() * (window.innerHeight * 0.8) + (window.innerHeight * 0.1);
    
    buatSatuHati(xAcak, yAcak);
}

// JALANKAN: Hati baru akan lahir setiap 1,5 detik di layar
let intervalHati;
function mulaiHujanHati() {
    if (!intervalHati) {
        intervalHati = setInterval(hujanHatiILoveYou, 1500);
        // Langsung munculkan 3 hati di awal biar meriah
        hujanHatiILoveYou();
        hujanHatiILoveYou();
        hujanHatiILoveYou();
    }
}

// PENTING: Kita ingin animasi ini HANYA JALAN di halaman terakhir (page 5)
// Mari kita panggil fungsi ini di tombol akhirBtn kamu!
