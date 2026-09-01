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
