document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".page-content");
    const navLinks = document.querySelectorAll(".nav-link");

    // Función para cargar contenido HTML de archivos externos
    async function loadContent(route) {
        try {
            const response = await fetch(`${route}.html`);
            if (response.ok) {
                const html = await response.text();
                content.innerHTML = html;
            } else {
                content.innerHTML = `<p>Lo siento, no se pudo cargar la página de ${route}.</p>`;
            }
        } catch (error) {
            console.error("Error al cargar contenido:", error);
            content.innerHTML = `<p>Ocurrió un error al intentar cargar el contenido de ${route}.</p>`;
        }
    }

    // Añadir evento de clic a cada link de navegación
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const route = event.target.getAttribute("href").substring(1); // Obtener la ruta sin '#'
            loadContent(route); // Cargar contenido basado en la ruta
        });
    });

    // Cargar contenido inicial para 'home'
    loadContent("home");
});
