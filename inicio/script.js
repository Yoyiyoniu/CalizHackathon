// Función para detectar si el scroll está hacia arriba o hacia abajo
function handleScroll() {
    var lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll hacia abajo
            document.querySelector(".navbar").classList.add("hidden");
            document.getElementById("scrollTopButton").style.display = "block";
        } else {
            // Scroll hacia arriba
            document.querySelector(".navbar").classList.remove("hidden");
            document.getElementById("scrollTopButton").style.display = "none";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para manejar el scroll en dispositivos móviles
    }, false);
}

// Función para animar el scroll hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Asignar la función handleScroll al evento scroll
handleScroll();

// Manejo de anclajes para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
