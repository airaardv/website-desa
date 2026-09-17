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
    // GOOGLE SHEETS
    // =========================

    const API_URL =
        "https://script.google.com/macros/s/AKfycbw2uaazAdwUOCtHc-3BTNMeuvtvr4vT4jdNBgrMiSBcx3lccBrDupeYWM5GOEhWhJHJ/exec";


    fetch(API_URL)
        .then(response => response.json())
        .then(data => {

            console.log("Data dari Google Sheets:", data);


            // =========================
            // DATA FASILITAS
            // =========================

            const namaFasilitas =
                document.querySelectorAll(".nama-fasilitas");

            const deskripsiFasilitas =
                document.querySelectorAll(".deskripsi-fasilitas");

            const fasilitas =
                data.filter(item => item.kategori === "Fasilitas");

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
                data.filter(item => item.kategori === "Lingkungan");

            const namaLingkungan =
                document.querySelector(".nama-lingkungan");

            const deskripsiLingkungan =
                document.querySelector(".deskripsi-lingkungan");

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
                document.querySelectorAll(".nama-kegiatan");

            const deskripsiKegiatan =
                document.querySelectorAll(".deskripsi-kegiatan");

            const kegiatan =
                data.filter(item => item.kategori === "Kegiatan");


            namaKegiatan.forEach(function (element, index) {

                if (kegiatan[index] && kegiatan[index].nama) {
                    element.textContent =
                        kegiatan[index].nama;
                }

            });


            deskripsiKegiatan.forEach(function (element, index) {

                if (kegiatan[index] && kegiatan[index].deskripsi) {
                    element.textContent =
                        kegiatan[index].deskripsi;
                }

            });

        })
        .catch(error => {

            console.error(
                "Gagal mengambil data:",
                error
            );

        });


    // =========================
    // FORM ADUAN
    // =========================

    const API_ADUAN =
        "https://script.google.com/macros/s/AKfycbxWX-4-dvX_cE5C06ku04HOWP8D1buWyfQEOkdtqHyENTn83gyqVWhPDBZfevCnacUU/exec";


    const formAduan =
        document.getElementById("formAduan");


    if (formAduan) {

        formAduan.addEventListener(
            "submit",
            async function (e) {

                e.preventDefault();


                // Cegah klik dua kali
                const tombol =
                    formAduan.querySelector(
                        "button[type='submit']"
                    );


                if (tombol.disabled) {
                    return;
                }


                tombol.disabled = true;
                tombol.innerText = "Mengirim...";


                const pesanAduan =
                    document.getElementById(
                        "pesanAduan"
                    );


                pesanAduan.textContent =
                    "⏳ Mengirim aduan...";


                const dataAduan = {

                    nama:
                        document.getElementById(
                            "nama"
                        ).value.trim(),

                    email:
                        document.getElementById(
                            "email"
                        ).value.trim(),

                    kategori:
                        document.getElementById(
                            "kategori"
                        ).value,

                    judul:
                        document.getElementById(
                            "judul"
                        ).value.trim(),

                    deskripsi:
                        document.getElementById(
                            "deskripsi"
                        ).value.trim()

                };


                try {

                    await fetch(
                        API_ADUAN,
                        {
                            method: "POST",
                            mode: "no-cors",
                            body: JSON.stringify(dataAduan)
                        }
                    );


                    // Tunggu sebentar agar Google Sheets selesai menyimpan
                    await new Promise(function (resolve) {
                        setTimeout(resolve, 1500);
                    });


                    pesanAduan.textContent =
                        "✅ Aduan berhasil dikirim!";


                    formAduan.reset();


                } catch (error) {

                    console.error(error);

                    pesanAduan.textContent =
                        "❌ Gagal mengirim aduan.";

                }


                tombol.disabled = false;
                tombol.innerText = "Kirim Aduan";

            }
        );

    }

});
