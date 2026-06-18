// --- AMBIL ELEMEN ---
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");

const startBtn = document.getElementById("startBtn");
const blowBtn = document.getElementById("blowBtn");
const fotoBtn = document.getElementById("fotoBtn");
const akhirBtn = document.getElementById("akhirBtn");
const candles = document.getElementById("candles");

// --- FUNGSI MEMBUAT LOVE BERJATUHAN ---
function buatLove() {
    const love = document.createElement("div");
    love.className = "heart";

    const daftarLove = ["❤️","💖","💕","💘","💝"];
    love.innerHTML = daftarLove[Math.floor(Math.random() * daftarLove.length)];

    love.style.left = Math.random() * window.innerWidth + "px";

    const durasi = Math.random() * 3 + 3; // antara 3 sampai 6 detik
    love.style.animationDuration = durasi + "s";

    document.body.appendChild(love);

    // Dihapus setelah animasi selesai biar performa HP/Laptop lancar
    setTimeout(() => {
        love.remove();
    }, durasi * 1000);
}

// --- PENGATURAN ALUR TOMBOL ---

// HALAMAN 1 → HALAMAN 2
if (startBtn) {
    startBtn.addEventListener("click", function() {
        page1.classList.add("hidden");
        page2.classList.remove("hidden");
        page2.classList.add("fadeIn");
    });
}

// HALAMAN 2 → HALAMAN 3 (Tiup Lilin + Ledakan Bintang)
if (blowBtn) {
    blowBtn.addEventListener("click", function() {
        if (candles) candles.innerHTML = "💨💨💨";
        blowBtn.innerHTML = "🎉 Lilin Berhasil Dipadamkan";
        blowBtn.disabled = true; // Kunci tombol biar gak dipencet terus

        // Efek ledakan bintang kilau
        for (let i = 0; i < 60; i++) {
            setTimeout(function() {
                const star = document.createElement("div");
                star.className = "star";
                star.innerHTML = "✨";
                star.style.left = Math.random() * window.innerWidth + "px";

                const durasiStar = Math.random() * 2 + 2;
                star.style.animationDuration = durasiStar + "s";

                document.body.appendChild(star);

                setTimeout(function() {
                    star.remove();
                }, durasiStar * 1000);
            }, i * 50);
        }

        // Pindah otomatis ke halaman surat setelah 3 detik pesta bintang
        setTimeout(function() {
            page2.classList.add("hidden");
            page3.classList.remove("hidden");
            page3.classList.add("fadeIn");

            // Efek Love romantis berjatuhan baru dimulai saat membaca surat
            setInterval(buatLove, 300);
        }, 3000);
    });
}

// HALAMAN 3 → HALAMAN 4
if (fotoBtn) {
    fotoBtn.addEventListener("click", function() {
        page3.classList.add("hidden");
        page4.classList.remove("hidden");
        page4.classList.add("fadeIn");
    });
}

// HALAMAN 4 → HALAMAN 5
if (akhirBtn) {
    akhirBtn.addEventListener("click", function() {
        page4.classList.add("hidden");
        page5.classList.remove("hidden");
        page5.classList.add("fadeIn");

        // Di halaman penutup, buat efek lovenya jadi 3x lipat lebih deras!
        setInterval(buatLove, 100);
    });
}