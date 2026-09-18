document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ANIMASI
    // =========================

    const elements = document.querySelectorAll(
        ".hero-text, .foto-frame, .card, .facility-card, .activity-card, .content-text"
    );

    elements.forEach(function (element, index) {

        element.style.opacity = "0";
        element.style.transform += " translateY(20px)";

        setTimeout(function () {

            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            element.style.opacity = "1";

            element.style.transform =
                element.style.transform.replace(
                    " translateY(20px)",
                    ""
                );

        }, 150 + (index * 100));

    });


    // =========================
    // GOOGLE SHEETS DATA
    // =========================

    const API_ADUAN =
    "https://script.google.com/macros/s/AKfycbw-L7IMYuUM44FBT_hWW8Sn0xzvXvfEPaYpT8M7Yvt_8tvaSo9ZchyL3w4gG29xix02/exec";

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {

            console.log(
                "Data dari Google Sheets:",
                data
            );


            // =========================
            // DATA FASILITAS
            // =========================

            const namaFasilitas =
                document.querySelectorAll(
                    ".nama-fasilitas"
                );

            const deskripsiFasilitas =
                document.querySelectorAll(
                    ".deskripsi-fasilitas"
                );

            const fasilitas =
                data.filter(
                    item => item.kategori === "Fasilitas"
                );


            fasilitas.forEach(function (item, index) {

                if (namaFasilitas[index]) {

                    namaFasilitas[index].textContent =
                        item.nama;

                }

                if (deskripsiFasilitas[index]) {

                    deskripsiFasilitas[index].textContent =
                        item.deskripsi;

                }

            });


            // =========================
            // DATA LINGKUNGAN
            // =========================

            const lingkungan =
                data.filter(
                    item => item.kategori === "Lingkungan"
                );


            const namaLingkungan =
                document.querySelector(
                    ".nama-lingkungan"
                );

            const deskripsiLingkungan =
                document.querySelector(
                    ".deskripsi-lingkungan"
                );


            if (lingkungan.length > 0) {

                if (namaLingkungan) {

                    namaLingkungan.textContent =
                        lingkungan[0].nama;

                }

                if (deskripsiLingkungan) {

                    deskripsiLingkungan.textContent =
                        lingkungan[0].deskripsi;

                }

            }


            // =========================
            // DATA KEGIATAN
            // =========================

            const namaKegiatan =
                document.querySelectorAll(
                    ".nama-kegiatan"
                );

            const deskripsiKegiatan =
                document.querySelectorAll(
                    ".deskripsi-kegiatan"
                );


            const kegiatan =
                data.filter(
                    item => item.kategori === "Kegiatan"
                );


            namaKegiatan.forEach(
                function (element, index) {

                    if (
                        kegiatan[index] &&
                        kegiatan[index].nama
                    ) {

                        element.textContent =
                            kegiatan[index].nama;

                    }

                }
            );


            deskripsiKegiatan.forEach(
                function (element, index) {

                    if (
                        kegiatan[index] &&
                        kegiatan[index].deskripsi
                    ) {

                        element.textContent =
                            kegiatan[index].deskripsi;

                    }

                }
            );

        })
        .catch(error => {

            console.error(
                "Gagal mengambil data:",
                error
            );

        });


    // =========================
    // API ADUAN
    // =========================

    const API_ADUAN =
        "https://script.google.com/macros/s/AKfycbxWX-4-dvX_cE5C06ku04HOWP8D1buWyfQEOkdtqHyENTn83gyqVWhPDBZfevCnacUU/exec";


    const formAduan =
        document.getElementById("formAduan");


    const statusAduan =
        document.getElementById("statusAduan");


   // =========================
// FORM ADUAN
// =========================

if (formAduan) {

    formAduan.addEventListener("submit", async function (e) {

        e.preventDefault();

        const tombol = formAduan.querySelector(
            "button[type='submit']"
        );

        if (tombol.disabled) {
            return;
        }

        tombol.disabled = true;
        tombol.innerText = "Mengirim...";

        const pesanAduan =
            document.getElementById("pesanAduan");

        const nama =
            document.getElementById("nama").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const kategori =
            document.getElementById("kategori").value;

        const judul =
            document.getElementById("judul").value.trim();

        const deskripsi =
            document.getElementById("deskripsi").value.trim();


        // =========================
        // BUAT TOKEN DI WEBSITE
        // =========================

        const token =
            "ADUAN-" +
            Date.now().toString().slice(-10);


        const dataAduan = {

            nama: nama,
            email: email,
            kategori: kategori,
            judul: judul,
            deskripsi: deskripsi,

            // kirim token ke Google Sheets
            token: token

        };


        localStorage.setItem(
            "tokenAduan",
            token
        );

        localStorage.setItem(
            "emailAduan",
            email
        );


        pesanAduan.innerHTML =
            "⏳ Mengirim aduan...";


        try {

            const response = await fetch(
                API_ADUAN,
                {
                    method: "POST",
                    body: JSON.stringify(dataAduan)
                }
            );


            const hasil =
                await response.json();


            console.log(
                "HASIL DARI GOOGLE APPS SCRIPT:",
                hasil
            );


            if (hasil.status === "success") {

                // ambil token dari server
                // kalau tidak ada, gunakan token yang dibuat website
                const tokenFinal =
                    hasil.token || token;


                pesanAduan.innerHTML =
                    "✅ Aduan berhasil dikirim!<br><br>" +

                    "<strong>Token Aduan kamu:</strong><br>" +

                    "<span style='font-size: 20px; font-weight: bold;'>" +

                    tokenFinal +

                    "</span><br><br>" +

                    "⚠️ Simpan token ini untuk mengecek status aduan kamu.";


                localStorage.setItem(
                    "tokenAduan",
                    tokenFinal
                );


                formAduan.reset();


                tampilkanStatus("Menunggu");


            } else {

                pesanAduan.innerHTML =
                    "❌ Aduan gagal dikirim.<br>" +
                    (hasil.message || "");

            }


        } catch (error) {

            console.error(error);

            pesanAduan.innerHTML =
                "❌ Terjadi kesalahan saat mengirim aduan.";

        }


        tombol.disabled = false;
        tombol.innerText = "Kirim Aduan";

    });

}

    
    // =========================
    // CEK STATUS ADUAN
    // =========================

    async function cekStatusAduan() {

        const token =
            localStorage.getItem(
                "tokenAduan"
            );


        if (
            !token ||
            !statusAduan
        ) {

            return;

        }


        try {

            const response =
                await fetch(
                    API_ADUAN +
                    "?action=cekAduan&token=" +
                    encodeURIComponent(token) +
                    "&t=" +
                    new Date().getTime()
                );


            const hasil =
                await response.json();


            console.log(
                "Status aduan:",
                hasil
            );


            if (
                hasil.status !==
                "success"
            ) {

                return;

            }


            const data =
                hasil.data;


            tampilkanStatus(
                data.statusAduan ||
                "Menunggu"
            );


        } catch (error) {

            console.error(
                "Gagal mengecek status aduan:",
                error
            );

        }

    }


    // =========================
    // TAMPILKAN STATUS
    // =========================

    function tampilkanStatus(status) {

        if (!statusAduan) {

            return;

        }


        if (
            status ===
            "Terkonfirmasi"
        ) {

            statusAduan.innerHTML =
                "✅ Aduan kamu sudah dikonfirmasi.";

            statusAduan.style.color =
                "#3b9563";

        }


        else {

            statusAduan.innerHTML =
                "🕐 Aduan kamu sedang menunggu konfirmasi.";

            statusAduan.style.color =
                "#765bc2";

        }

    }


    // =========================
    // CEK STATUS SAAT HALAMAN
    // DIBUKA
    // =========================

    cekStatusAduan();


    // =========================
    // CEK OTOMATIS SETIAP 5 DETIK
    // =========================

    setInterval(
        cekStatusAduan,
        5000
    );

});
