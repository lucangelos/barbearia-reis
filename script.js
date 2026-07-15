document.addEventListener("DOMContentLoaded", function () {

    const botaoMenu = document.querySelector(".botao-menu");
    const nav = document.querySelector(".navegacao");

    if (botaoMenu && nav) {

        botaoMenu.addEventListener("click", function () {

    nav.classList.toggle("aberta");
    botaoMenu.classList.toggle("ativo");

    const aberto = nav.classList.contains("aberta");
    botaoMenu.setAttribute("aria-expanded", aberto);

});

        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

    nav.classList.remove("aberta");
    botaoMenu.classList.remove("ativo");
    botaoMenu.setAttribute("aria-expanded", "false");

});

        });

    }

    /* Reveal */

    const elementos = document.querySelectorAll(".revelar");

    if ("IntersectionObserver" in window && elementos.length) {

        const observador = new IntersectionObserver(function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visivel");
                    observador.unobserve(entrada.target);

                }

            });

        }, {

            threshold: .15

        });

        elementos.forEach(el => observador.observe(el));

    } else {

        elementos.forEach(el => el.classList.add("visivel"));

    }

});



