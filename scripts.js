document.addEventListener('DOMContentLoaded', function() {
    
    var audio = document.querySelector('audio');
    audio.loop = true;
    audio.play().catch(error => {
        console.log('Müzik otomatik olarak çalınamadı:', error);
    });

    document.querySelector('.btn-scripts').addEventListener('click', function() {
        window.location.href = 'scripts.html';
    });

    document.querySelector('.btn-discord').addEventListener('click', function() {
        window.location.href = 'https://discord.com';
    });

    document.querySelector('.btn-youtube').addEventListener('click', function() {
        window.location.href = 'https://youtube.com';
    });
});
