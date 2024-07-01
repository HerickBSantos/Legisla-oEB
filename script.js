document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const menu = document.getElementById('menu');
    const rectangles = document.querySelectorAll('.rectangle');
    const notification = document.getElementById('notification');

    menuBtn.addEventListener('click', () => {
        menu.style.left = '0';
    });

    closeBtn.addEventListener('click', () => {
        menu.style.left = '-250px';
    });

    rectangles.forEach(rectangle => {
        rectangle.addEventListener('mouseenter', () => {
            const documentName = rectangle.getAttribute('data-document');
            showNotification(`Abrindo: ${documentName}`);
        });

        rectangle.addEventListener('mouseleave', () => {
            hideNotification();
        });
    });

    function showNotification(message) {
        notification.textContent = message;
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }

    function hideNotification() {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
    }
});
