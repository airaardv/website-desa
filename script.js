document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(
                ".hero-text, .foto-frame, .card, .facility-card, .activity-card, .content-text"
            );


        elements.forEach(
            function (element, index) {

                element.style.opacity = "0";

                element.style.transform +=
                    " translateY(20px)";


                setTimeout(
                    function () {

                        element.style.transition =
                            "opacity 0.7s ease, transform 0.7s ease";

                        element.style.opacity = "1";

                        element.style.transform =
                            element.style.transform.replace(
                                " translateY(20px)",
                                ""
                            );

                    },
                    150 + (index * 100)
                );

            }
        );

    }
);

const API_URL = "https://script.google.com/macros/s/AKfycbw2uaazAdwUOCtHc-3BTNMeuvtvr4vT4jdNBgrMiSBcx3lccBrDupeYWM5GOEhWhJHJ/exec";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        console.log("Data dari Google Sheets:", data);

        // DATA FASILITAS
        const namaFasilitas = document.querySelectorAll(".nama-fasilitas");
        const deskripsiFasilitas = document.querySelectorAll(".deskripsi-fasilitas");

        const fasilitas = data.filter(item => item.kategori === "Fasilitas");

        fasilitas.forEach((item, index) => {

            if (namaFasilitas[index]) {
                namaFasilitas[index].textContent = item.nama;
            }

            if (deskripsiFasilitas[index]) {
                deskripsiFasilitas[index].textContent = item.deskripsi;
            }

        });


        // DATA LINGKUNGAN
const lingkungan = data.filter(item => item.kategori === "Lingkungan");

const namaLingkungan = document.querySelector(".nama-lingkungan");
const deskripsiLingkungan = document.querySelector(".deskripsi-lingkungan");

if (lingkungan.length > 0) {
    if (namaLingkungan) {
        namaLingkungan.textContent = lingkungan[1].nama;
    }

    if (deskripsiLingkungan) {
        deskripsiLingkungan.textContent = lingkungan[1].deskripsi;
    }
}

// DATA KEGIATAN
const namaKegiatan = document.querySelectorAll(".nama-kegiatan");
const deskripsiKegiatan = document.querySelectorAll(".deskripsi-kegiatan");

const kegiatan = data.filter(item => item.kategori === "Kegiatan");

namaKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].nama) {
        element.textContent = kegiatan[index].nama;
    }
});

deskripsiKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].deskripsi) {
        element.textContent = kegiatan[index].deskripsi;
    }
});

    })
    .catch(error => {
        console.error("Gagal mengambil data:", error);
    });document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(
                ".hero-text, .foto-frame, .card, .facility-card, .activity-card, .content-text"
            );


        elements.forEach(
            function (element, index) {

                element.style.opacity = "0";

                element.style.transform +=
                    " translateY(20px)";


                setTimeout(
                    function () {

                        element.style.transition =
                            "opacity 0.7s ease, transform 0.7s ease";

                        element.style.opacity = "1";

                        element.style.transform =
                            element.style.transform.replace(
                                " translateY(20px)",
                                ""
                            );

                    },
                    150 + (index * 100)
                );

            }
        );

    }
);

const API_URL = "https://script.google.com/macros/s/AKfycbw2uaazAdwUOCtHc-3BTNMeuvtvr4vT4jdNBgrMiSBcx3lccBrDupeYWM5GOEhWhJHJ/exec";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        console.log("Data dari Google Sheets:", data);

        // DATA FASILITAS
        const namaFasilitas = document.querySelectorAll(".nama-fasilitas");
        const deskripsiFasilitas = document.querySelectorAll(".deskripsi-fasilitas");

        const fasilitas = data.filter(item => item.kategori === "Fasilitas");

        fasilitas.forEach((item, index) => {

            if (namaFasilitas[index]) {
                namaFasilitas[index].textContent = item.nama;
            }

            if (deskripsiFasilitas[index]) {
                deskripsiFasilitas[index].textContent = item.deskripsi;
            }

        });


        // DATA LINGKUNGAN
const lingkungan = data.filter(item => item.kategori === "Lingkungan");

const namaLingkungan = document.querySelector(".nama-lingkungan");
const deskripsiLingkungan = document.querySelector(".deskripsi-lingkungan");

if (lingkungan.length > 0) {
    if (namaLingkungan) {
        namaLingkungan.textContent = lingkungan[1].nama;
    }

    if (deskripsiLingkungan) {
        deskripsiLingkungan.textContent = lingkungan[1].deskripsi;
    }
}

// DATA KEGIATAN
const namaKegiatan = document.querySelectorAll(".nama-kegiatan");
const deskripsiKegiatan = document.querySelectorAll(".deskripsi-kegiatan");

const kegiatan = data.filter(item => item.kategori === "Kegiatan");

namaKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].nama) {
        element.textContent = kegiatan[index].nama;
    }
});

deskripsiKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].deskripsi) {
        element.textContent = kegiatan[index].deskripsi;
    }
});

    })
    .catch(error => {
        console.error("Gagal mengambil data:", error);
    });document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(
                ".hero-text, .foto-frame, .card, .facility-card, .activity-card, .content-text"
            );


        elements.forEach(
            function (element, index) {

                element.style.opacity = "0";

                element.style.transform +=
                    " translateY(20px)";


                setTimeout(
                    function () {

                        element.style.transition =
                            "opacity 0.7s ease, transform 0.7s ease";

                        element.style.opacity = "1";

                        element.style.transform =
                            element.style.transform.replace(
                                " translateY(20px)",
                                ""
                            );

                    },
                    150 + (index * 100)
                );

            }
        );

    }
);

const API_URL = "https://script.google.com/macros/s/AKfycbw2uaazAdwUOCtHc-3BTNMeuvtvr4vT4jdNBgrMiSBcx3lccBrDupeYWM5GOEhWhJHJ/exec";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        console.log("Data dari Google Sheets:", data);

        // DATA FASILITAS
        const namaFasilitas = document.querySelectorAll(".nama-fasilitas");
        const deskripsiFasilitas = document.querySelectorAll(".deskripsi-fasilitas");

        const fasilitas = data.filter(item => item.kategori === "Fasilitas");

        fasilitas.forEach((item, index) => {

            if (namaFasilitas[index]) {
                namaFasilitas[index].textContent = item.nama;
            }

            if (deskripsiFasilitas[index]) {
                deskripsiFasilitas[index].textContent = item.deskripsi;
            }

        });


        // DATA LINGKUNGAN
const lingkungan = data.filter(item => item.kategori === "Lingkungan");

const namaLingkungan = document.querySelector(".nama-lingkungan");
const deskripsiLingkungan = document.querySelector(".deskripsi-lingkungan");

if (lingkungan.length > 0) {
    if (namaLingkungan) {
        namaLingkungan.textContent = lingkungan[1].nama;
    }

    if (deskripsiLingkungan) {
        deskripsiLingkungan.textContent = lingkungan[1].deskripsi;
    }
}

// DATA KEGIATAN
const namaKegiatan = document.querySelectorAll(".nama-kegiatan");
const deskripsiKegiatan = document.querySelectorAll(".deskripsi-kegiatan");

const kegiatan = data.filter(item => item.kategori === "Kegiatan");

namaKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].nama) {
        element.textContent = kegiatan[index].nama;
    }
});

deskripsiKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].deskripsi) {
        element.textContent = kegiatan[index].deskripsi;
    }
});

    })
    .catch(error => {
        console.error("Gagal mengambil data:", error);
    });document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(
                ".hero-text, .foto-frame, .card, .facility-card, .activity-card, .content-text"
            );


        elements.forEach(
            function (element, index) {

                element.style.opacity = "0";

                element.style.transform +=
                    " translateY(20px)";


                setTimeout(
                    function () {

                        element.style.transition =
                            "opacity 0.7s ease, transform 0.7s ease";

                        element.style.opacity = "1";

                        element.style.transform =
                            element.style.transform.replace(
                                " translateY(20px)",
                                ""
                            );

                    },
                    150 + (index * 100)
                );

            }
        );

    }
);

const API_URL = "https://script.google.com/macros/s/AKfycbw2uaazAdwUOCtHc-3BTNMeuvtvr4vT4jdNBgrMiSBcx3lccBrDupeYWM5GOEhWhJHJ/exec";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        console.log("Data dari Google Sheets:", data);

        // DATA FASILITAS
        const namaFasilitas = document.querySelectorAll(".nama-fasilitas");
        const deskripsiFasilitas = document.querySelectorAll(".deskripsi-fasilitas");

        const fasilitas = data.filter(item => item.kategori === "Fasilitas");

        fasilitas.forEach((item, index) => {

            if (namaFasilitas[index]) {
                namaFasilitas[index].textContent = item.nama;
            }

            if (deskripsiFasilitas[index]) {
                deskripsiFasilitas[index].textContent = item.deskripsi;
            }

        });


        // DATA LINGKUNGAN
const lingkungan = data.filter(item => item.kategori === "Lingkungan");

const namaLingkungan = document.querySelector(".nama-lingkungan");
const deskripsiLingkungan = document.querySelector(".deskripsi-lingkungan");

if (lingkungan.length > 0) {
    if (namaLingkungan) {
        namaLingkungan.textContent = lingkungan[1].nama;
    }

    if (deskripsiLingkungan) {
        deskripsiLingkungan.textContent = lingkungan[1].deskripsi;
    }
}

// DATA KEGIATAN
const namaKegiatan = document.querySelectorAll(".nama-kegiatan");
const deskripsiKegiatan = document.querySelectorAll(".deskripsi-kegiatan");

const kegiatan = data.filter(item => item.kategori === "Kegiatan");

namaKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].nama) {
        element.textContent = kegiatan[index].nama;
    }
});

deskripsiKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].deskripsi) {
        element.textContent = kegiatan[index].deskripsi;
    }
});

    })
    .catch(error => {
        console.error("Gagal mengambil data:", error);
    });document.addEventListener(
    "DOMContentLoaded",
    function () {

        const elements =
            document.querySelectorAll(
                ".hero-text, .foto-frame, .card, .facility-card, .activity-card, .content-text"
            );


        elements.forEach(
            function (element, index) {

                element.style.opacity = "0";

                element.style.transform +=
                    " translateY(20px)";


                setTimeout(
                    function () {

                        element.style.transition =
                            "opacity 0.7s ease, transform 0.7s ease";

                        element.style.opacity = "1";

                        element.style.transform =
                            element.style.transform.replace(
                                " translateY(20px)",
                                ""
                            );

                    },
                    150 + (index * 100)
                );

            }
        );

    }
);

const API_URL = "https://script.google.com/macros/s/AKfycbw2uaazAdwUOCtHc-3BTNMeuvtvr4vT4jdNBgrMiSBcx3lccBrDupeYWM5GOEhWhJHJ/exec";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        console.log("Data dari Google Sheets:", data);

        // DATA FASILITAS
        const namaFasilitas = document.querySelectorAll(".nama-fasilitas");
        const deskripsiFasilitas = document.querySelectorAll(".deskripsi-fasilitas");

        const fasilitas = data.filter(item => item.kategori === "Fasilitas");

        fasilitas.forEach((item, index) => {

            if (namaFasilitas[index]) {
                namaFasilitas[index].textContent = item.nama;
            }

            if (deskripsiFasilitas[index]) {
                deskripsiFasilitas[index].textContent = item.deskripsi;
            }

        });


        // DATA LINGKUNGAN
const lingkungan = data.filter(item => item.kategori === "Lingkungan");

const namaLingkungan = document.querySelector(".nama-lingkungan");
const deskripsiLingkungan = document.querySelector(".deskripsi-lingkungan");

if (lingkungan.length > 0) {
    if (namaLingkungan) {
        namaLingkungan.textContent = lingkungan[1].nama;
    }

    if (deskripsiLingkungan) {
        deskripsiLingkungan.textContent = lingkungan[1].deskripsi;
    }
}

// DATA KEGIATAN
const namaKegiatan = document.querySelectorAll(".nama-kegiatan");
const deskripsiKegiatan = document.querySelectorAll(".deskripsi-kegiatan");

const kegiatan = data.filter(item => item.kategori === "Kegiatan");

namaKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].nama) {
        element.textContent = kegiatan[index].nama;
    }
});

deskripsiKegiatan.forEach((element, index) => {
    if (kegiatan[index] && kegiatan[index].deskripsi) {
        element.textContent = kegiatan[index].deskripsi;
    }
});
        const formAduan = document.getElementById("formAduan");

if (formAduan) {
    formAduan.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = {
            nama: document.getElementById("nama").value,
            email: document.getElementById("email").value,
            kategori: document.getElementById("kategori").value,
            judul: document.getElementById("judul").value,
            deskripsi: document.getElementById("deskripsi").value
        };

        fetch("https://script.google.com/macros/s/AKfycbw-L7IMYuUM44FBT_hWW8Sn0xzvXvfEPaYpT8M7Yvt_8tvaSo9ZchyL3w4gG29xix02/exec", {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            document.getElementById("pesanAduan").textContent =
                "Aduan berhasil dikirim!";
            formAduan.reset();
        })
        .catch(error => {
            document.getElementById("pesanAduan").textContent =
                "Aduan gagal dikirim.";
        });
    });
}const formAduan = document.getElementById("formAduan");

if (formAduan) {
    formAduan.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = {
            nama: document.getElementById("nama").value,
            email: document.getElementById("email").value,
            kategori: document.getElementById("kategori").value,
            judul: document.getElementById("judul").value,
            deskripsi: document.getElementById("deskripsi").value
        };

        fetch("https://script.google.com/macros/s/AKfycbw-L7IMYuUM44FBT_hWW8Sn0xzvXvfEPaYpT8M7Yvt_8tvaSo9ZchyL3w4gG29xix02/exec", {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            document.getElementById("pesanAduan").textContent =
                "Aduan berhasil dikirim!";
            formAduan.reset();
        })
        .catch(error => {
            document.getElementById("pesanAduan").textContent =
                "Aduan gagal dikirim.";
        });
    });
}

    })
    .catch(error => {
        console.error("Gagal mengambil data:", error);
    });
