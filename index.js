document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.getElementById('navbar-completa');
    const bioParent = document.getElementById('biografia-dropdown-parent');
    const bioLink = bioParent.querySelector('.navbar-link');

    // 1. ABRIR EL MENÚ 
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    }); 

    // 2. Abrir/Cerrar el dropdown 
    bioLink.addEventListener('click', (e) => {
        e.preventDefault();
        bioParent.classList.toggle('is-active');
    });

    // 3. Cerrar TODO al hacer click en los links
    const links = document.querySelectorAll('.navbar-item:not(.has-dropdown), .dropdown-item-link');
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            bioParent.classList.remove('is-active');
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        });
    });

    // 4. Cerrar si se clickea afuera
    document.addEventListener('click', (e) => {
        if (!bioParent.contains(e.target) && !burger.contains(e.target)) {
            bioParent.classList.remove('is-active');
        }
    });
});
