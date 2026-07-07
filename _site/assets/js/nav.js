// assets/js/nav.js
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    // This check makes the file safe. If any of these elements aren't found, the code won't run.
    if (mobileMenuButton && mobileMenu && menuIconOpen && menuIconClose) {
        mobileMenuButton.addEventListener('click', function () {
            // Toggle the menu's visibility
            mobileMenu.classList.toggle('hidden');
            // Swap the icons by toggling their hidden class
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        });
    }
});