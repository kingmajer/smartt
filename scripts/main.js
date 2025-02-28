document.addEventListener('DOMContentLoaded', () => {
    // Handle welcome screen
    setTimeout(() => {
        document.querySelector('.welcome-screen').remove();
    }, 2000);

    // Dropdown functionality
    document.querySelectorAll('.dropdown-trigger').forEach(item => {
        item.addEventListener('mouseenter', showDropdown);
        item.addEventListener('mouseleave', hideDropdown);
    });

    // Sidebar popups
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('mouseenter', showSidebarPopup);
        item.addEventListener('mouseleave', hideSidebarPopup);
    });
});

function showDropdown(e) {
    const dropdown = e.target.querySelector('.dropdown-content');
    dropdown.style.display = 'block';
    dropdown.style.animation = 'slideDown 0.3s ease-out';
}

function hideDropdown(e) {
    const dropdown = e.target.querySelector('.dropdown-content');
    dropdown.style.display = 'none';
}

function showSidebarPopup(e) {
    const popup = e.target.querySelector('.sidebar-popup');
    popup.style.display = 'block';
    popup.style.animation = 'fadeIn 0.3s ease-out';
}

function hideSidebarPopup(e) {
    const popup = e.target.querySelector('.sidebar-popup');
    popup.style.display = 'none';
}
