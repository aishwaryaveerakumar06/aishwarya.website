const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Mobile Navigation

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        if (isOpen) {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });


    // Close mobile menu after clicking a link

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}

       
       
