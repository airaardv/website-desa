// =========================
// FORM ADUAN
// =========================

const API_ADUAN =
    "https://script.google.com/macros/s/AKfycbxWX-4-dvX_cE5C06ku04HOWP8D1buWyfQEOkdtqHyENTn83gyqVWhPDBZfevCnacUU/exec";

const formAduan =
    document.getElementById("formAduan");

if (formAduan) {

    formAduan.addEventListener("submit", async function (e) {

        e.preventDefault();

        const tombol =
            formAduan.querySelector("button[type='submit']");

        const pesanAduan =
            document.getElementById("pesanAduan");

        // Cegah klik berkali-kali
        if (tombol.disabled) {
            return;
        }

        tombol.disabled = true;
        tombol.innerText = "Mengirim...";

        pesanAduan.textContent =
            "⏳ Mengirim aduan...";

        const dataAduan = {

            nama:
                document.getElementById("nama").value.trim(),

            email:
                document.getElementById("email").value.trim(),

            kategori:
                document.getElementById("kategori").value,

            judul:
                document.getElementById("judul").value.trim(),

            deskripsi:
                document.getElementById("deskripsi").value.trim()

        };

        try {

            await fetch(API_ADUAN, {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(dataAduan)
            });

            // Beri waktu Google Sheets menyimpan data
            await new Promise(resolve =>
                setTimeout(resolve, 1500)
            );

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

    });

}
