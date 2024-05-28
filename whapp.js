
document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        var whatsappIcon = document.getElementById('whatsapp-icon');
        whatsappIcon.style.display = 'flex';
    }, 5000); // 10 seconds in milliseconds

    var whatsappIcon = document.getElementById('whatsapp-icon');
    whatsappIcon.addEventListener('click', function() {
        whatsappIcon.href = 'https://wa.me/71886196'; // Replace with your WhatsApp number
        whatsappIcon.target = '_blank';
        whatsappIcon.click();
    });
    
});
 