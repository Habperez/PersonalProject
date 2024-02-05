document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const question = document.getElementById('question');
    const loveMessage = document.getElementById('loveMessage');
    const loveImage = document.getElementById('loveImage');
    const funnyGif = document.getElementById('Gif');
    const usImage = document.getElementById('usImage');
    let attemptCount = 0;
    const maxNoImageAttempts = 15;
    const maxGifAttempts = 30;
    const maxBounceAttempts = 40;
    let dx = 2;
    let dy = 2;

    function moveButton() {
        noBtn.style.position = 'absolute';
        noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
        noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
    }

    function transformNoButtonIfNeeded() {
        if (attemptCount >= maxNoImageAttempts && !noBtn.querySelector('img')) {
            // Apply styles to remove any button-like appearance
            noBtn.classList.add('no-image-btn');
            const img = document.createElement('img');
            img.src = 'fern.jpg'; // Update the path to your image
            img.alt = 'No';
            img.style.width = '100px';
            noBtn.appendChild(img);
        }
    }

    noBtn.addEventListener('mouseover', function() {
        attemptCount++;
        moveButton();
        transformNoButtonIfNeeded();

        if (attemptCount === maxGifAttempts) {
            Gif.classList.remove('hidden');
            Gif.classList.add('unhidden');
        }

        if (attemptCount === maxBounceAttempts && !bounceInterval) {
            bouncingImage.classList.remove('hidden');
            bounceInterval = setInterval(bounceImage, 10);
        }

        if (attemptCount === 40) {
            usImage.style.display = 'inline'; // Make the "Us" image visible
        }
    });

    yesBtn.addEventListener('click', function() {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        question.textContent = 'I love you';
        Gif.style.display = 'none';
        
        if (bounceInterval) clearInterval(bounceInterval);
        bouncingImage.classList.add('hidden');

        loveImage.src = 'Peanut.png';
        loveMessage.classList.remove('hidden');
        loveMessage.classList.add('unhidden');
    });
    if (!bouncingImage.classList.contains('hidden')) {
        bounceInterval = setInterval(bounceImage, 10);
    }
});
