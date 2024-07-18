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
    const viewed = localStorage.getItem("viewed");

    if (!viewed) {
        fetch("/update-view-count", {
            method: "POST"
        })
        .then(response => response.json())
        .then(data => {
            viewCountElement.textContent = data.viewCount;
            localStorage.setItem("viewed", "true");
        })
        .catch(error => console.error("Error updating view count:", error));
    } else {
        fetch("/get-view-count")
        .then(response => response.json())
        .then(data => {
            viewCountElement.textContent = data.viewCount;
        })
        .catch(error => console.error("Error fetching view count:", error));
    }
});
