document.addEventListener("DOMContentLoaded", function() {
    const rectangles = document.querySelectorAll('.rectangle');
    const notification = document.getElementById('notification');

    // Animar os retângulos ao carregar a página
    rectangles.forEach((rectangle, index) => {
        setTimeout(() => {
            rectangle.style.opacity = 1;
        }, index * 200); // Delay de 200ms entre cada retângulo
    });

    // Mostrar notificação ao clicar em um link
    rectangles.forEach(rectangle => {
        const link = rectangle.querySelector('a');
        link.addEventListener('click', (event) => {
            const documentName = rectangle.getAttribute('data-document');
            showNotification(`Abrindo: ${documentName}`);
        });
    });

    function showNotification(message) {
        notification.textContent = message;
        notification.style.opacity = 1;
        notification.style.transform = 'translateY(0)';
        setTimeout(() => {
            notification.style.opacity = 0;
            notification.style.transform = 'translateY(20px)';
        }, 3000); // Notificação some após 3 segundos
    }
});
