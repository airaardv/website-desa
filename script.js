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
    // API GOOGLE SHEETS / ADUAN
    // =========================

    const API_ADUAN =
        "https://script.google.com/macros/s/AKfycbw-L7IMYuUM44FBT_hWW8Sn0xzvXvfEPaYpT8M7Yvt_8tvaSo9ZchyL3w4gG29xix02/exec";


    // =========================
    // FORM ADUAN
    // =========================

    const formAduan =
        document.getElementById("formAduan");

    const statusAduan =
        document.getElementById("statusAduan");


    if (formAduan) {

        formAduan.addEventListener("submit", async function (e) {

            e.preventDefault();

            const tombol =
                formAduan.querySelector(
                    "button[type='submit']"
                );

            const pesanAduan =
                document.getElementById("pesanAduan");


            if (tombol.disabled) {
                return;
            }


            tombol.disabled = true;
            tombol.innerText = "Mengirim...";


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


            const dataAduan = {

                nama: nama,
                email: email,
                kategori: kategori,
                judul: judul,
                deskripsi: deskripsi

            };


            pesanAduan.innerHTML =
                "⏳ Mengirim aduan...";


            try {

                const response =
                    await fetch(
                        API_ADUAN,
                        {
                            method: "POST",
                            body: JSON.stringify(dataAduan)
                        }
                    );


                const hasil =
                    await response.json();


                console.log(
                    "HASIL APPS SCRIPT:",
                    hasil
                );


                if (hasil.status === "success") {

                    const token =
                        hasil.token;


                    if (!token) {

                        pesanAduan.innerHTML =
                            "❌ Token tidak diterima dari server.";

                        return;

                    }


                    localStorage.setItem(
                        "tokenAduan",
                        token
                    );


                    localStorage.setItem(
                        "emailAduan",
                        email
                    );


                    pesanAduan.innerHTML =
                        "✅ Aduan berhasil dikirim!<br><br>" +

                        "<strong>Token Aduan kamu:</strong><br>" +

                        "<span style='font-size:22px; font-weight:bold;'>" +

                        token +

                        "</span><br><br>" +

                        "⚠️ Simpan token ini untuk mengecek status aduan kamu.";


                    formAduan.reset();


                    tampilkanStatus("Menunggu");


                } else {

                    pesanAduan.innerHTML =
                        "❌ Aduan gagal dikirim.<br><br>" +
                        (hasil.message || "Silakan coba lagi.");

                }


            } catch (error) {

                console.error(
                    "ERROR:",
                    error
                );


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
            localStorage.getItem("tokenAduan");


        if (!token || !statusAduan) {
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
                "STATUS ADUAN:",
                hasil
            );


            if (hasil.status !== "success") {
                return;
            }


            const data =
                hasil.data;


            tampilkanStatus(
                data.statusAduan || "Menunggu"
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


        if (status === "Terkonfirmasi") {

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
    // CEK STATUS SAAT DIBUKA
    // =========================

    cekStatusAduan();


    // =========================
    // CEK OTOMATIS 5 DETIK
    // =========================

    setInterval(
        cekStatusAduan,
        5000
    );

});
