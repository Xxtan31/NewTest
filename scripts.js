document.addEventListener('DOMContentLoaded', function() {
    // Müzik otomatik olarak çalmaya çalışır
    var audio = document.querySelector('audio');
    audio.loop = true;
    audio.play().catch(error => {
        console.log('Müzik otomatik olarak çalınamadı:', error);
    });

    // Button event listeners
    document.querySelector('.btn-scripts').addEventListener('click', function() {
        window.location.href = 'scripts.html';
    });

    document.querySelector('.btn-discord').addEventListener('click', function() {
        window.location.href = 'https://discord.com';
    });

    document.querySelector('.btn-youtube').addEventListener('click', function() {
        window.location.href = 'https://youtube.com';
    });

    // Görüntüleme sayacı
    const viewCountElement = document.getElementById("view-count");
    const viewCountKey = 'viewCount';
    const viewedKey = 'viewed';

    let viewCount = localStorage.getItem(viewCountKey) || 0;
    const viewed = localStorage.getItem(viewedKey);

    // Eğer kullanıcı daha önce siteyi ziyaret etmediyse
    if (!viewed) {
        viewCount = parseInt(viewCount) + 1;
        localStorage.setItem(viewCountKey, viewCount);
        localStorage.setItem(viewedKey, 'true');
    }

    viewCountElement.textContent = viewCount;
});
