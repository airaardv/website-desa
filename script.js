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

    const API_URL =
        "https://script.google.com/macros/s/AKfycbw2uaazAdwUOCtHc-3BTNMeuvtvr4vT4jdNBgrMiSBcx3lccBrDupeYWM5GOEhWhJHJ/exec";


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

        formAduan.addEventListener(
            "submit",
            async function (e) {

                e.preventDefault();


                const tombol =
                    formAduan.querySelector(
                        "button[type='submit']"
                    );


                // Mencegah kirim dua kali
                if (tombol.disabled) {
                    return;
                }


                tombol.disabled = true;
                tombol.innerText = "Mengirim...";


                const pesanAduan =
                    document.getElementById(
                        "pesanAduan"
                    );


                const nama =
                    document.getElementById(
                        "nama"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const kategori =
                    document.getElementById(
                        "kategori"
                    ).value;


                const judul =
                    document.getElementById(
                        "judul"
                    ).value.trim();


                const deskripsi =
                    document.getElementById(
                        "deskripsi"
                    ).value.trim();


                const dataAduan = {

                    nama: nama,

                    email: email,

                    kategori: kategori,

                    judul: judul,

                    deskripsi: deskripsi

                };


                // Simpan email pengadu
                // agar statusnya bisa dicek lagi
                localStorage.setItem(
                    "emailAduan",
                    email
                );


                pesanAduan.textContent =
                    "⏳ Mengirim aduan...";


                try {

                    const response =
                        await fetch(
                            API_ADUAN,
                            {
                                method: "POST",

                                body:
                                    JSON.stringify(
                                        dataAduan
                                    )
                            }
                        );


                    const hasil =
                        await response.json();


                    if (
                        hasil.status ===
                        "success"
                    ) {

                        pesanAduan.textContent =
                            "✅ Aduan berhasil dikirim!";


                        formAduan.reset();


                        tampilkanStatus(
                            "Menunggu"
                        );


                    } else {

                        pesanAduan.textContent =
                            "❌ Aduan gagal dikirim.";

                    }


                } catch (error) {

                    console.error(error);

                    pesanAduan.textContent =
                        "❌ Terjadi kesalahan saat mengirim aduan.";

                }


                tombol.disabled = false;

                tombol.innerText =
                    "Kirim Aduan";

            }
        );

    }



    // =========================
    // CEK STATUS ADUAN
    // =========================

    async function cekStatusAduan() {

        const email =
            localStorage.getItem(
                "emailAduan"
            );


        if (
            !email ||
            !statusAduan
        ) {

            return;

        }


        try {

            const response =
                await fetch(
                    API_ADUAN +
                    "?action=getAduan&t=" +
                    new Date().getTime()
                );


            const data =
                await response.json();


            // Cari aduan berdasarkan email
            const aduanSaya =
                data.filter(
                    function (item) {

                        return (
                            item.email &&
                            item.email.toLowerCase() ===
                            email.toLowerCase()
                        );

                    }
                );


            if (
                aduanSaya.length === 0
            ) {

                return;

            }


            // Ambil aduan terakhir
            const aduan =
                aduanSaya[
                    aduanSaya.length - 1
                ];


            tampilkanStatus(
                aduan.status ||
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


        } else {

            statusAduan.innerHTML =
                "🕐 Aduan kamu sedang menunggu konfirmasi.";

            statusAduan.style.color =
                "#765bc2";

        }

    }



    // =========================
    // CEK STATUS SAAT HALAMAN DIBUKA
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
