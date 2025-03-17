function toggleCollapse(event) {
        // Check if the click came from the menu-close-btn
        const isMenuCloseBtn = event && event.target.classList.contains('menu-close-btn');
        const navContent = document.querySelector('.nav-list');
        const collapsibleContent = document.querySelector('.collapsible-content');


        // Handle original collapsible content toggle
        if (collapsibleContent) {
            collapsibleContent.classList.toggle('active');
        }
}