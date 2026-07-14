// Barbearia Reis — interações leves
document.addEventListener("DOMContentLoaded", function () {
  var botaoMenu = document.querySelector(".botao-menu");
  var nav = document.querySelector("nav.navegacao");

  if (botaoMenu && nav) {
    botaoMenu.addEventListener("click", function () {
      nav.classList.toggle("aberta");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("aberta");
      });
    });
  }

  

  // revelar elementos ao rolar a página
  var elementos = document.querySelectorAll(".revelar");
  if ("IntersectionObserver" in window && elementos.length) {
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elementos.forEach(function (el) { observador.observe(el); });
  } else {
    elementos.forEach(function (el) { el.classList.add("visivel"); });
  }
});
