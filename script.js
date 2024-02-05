document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const question = document.getElementById('question');
    const loveMessage = document.getElementById('loveMessage');
    const loveImage = document.getElementById('loveImage');
    const funnyGif = document.getElementById('Gif');
    const bouncingImage = document.getElementById('bouncingImage');
    let attemptCount = 0;
    const maxNoImageAttempts = 15;
    const maxGifAttempts = 30;
    const maxBounceAttempts = 40;
    let dx = 2;
    let dy = 2;
    let bounceInterval = null;

    bouncingImage.style.top = '50%';
    bouncingImage.style.left = '50%';
    bouncingImage.style.transform = 'translate(-50%, -50%)';

    function moveButton() {
        noBtn.style.position = 'absolute';
        noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
        noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
    }

    function transformNoButtonIfNeeded() {
        if (attemptCount >= maxNoImageAttempts && !noBtn.querySelector('img')) {
            const img = document.createElement('img');
            img.src = 'fern.jpg';
            img.alt = 'No';
            img.style.width = '100px';
            noBtn.appendChild(img);
        }
    }

    function bounceImage() {
        const rect = bouncingImage.getBoundingClientRect();
        if (rect.top <= 0 || rect.bottom >= window.innerHeight) dy = -dy;
        if (rect.left <= 0 || rect.right >= window.innerWidth) dx = -dx;
        bouncingImage.style.top = (bouncingImage.offsetTop + dy) + 'px';
        bouncingImage.style.left = (bouncingImage.offsetLeft + dx) + 'px';
    }

    noBtn.addEventListener('mouseover', function() {
        attemptCount++;
        moveButton();
        transformNoButtonIfNeeded();

        if (attemptCount === maxGifAttempts) {
            funnyGif.classList.remove('hidden');
            funnyGif.classList.add('unhidden');
        }

        if (attemptCount === maxBounceAttempts && !bounceInterval) {
            bouncingImage.classList.remove('hidden');
            bounceInterval = setInterval(bounceImage, 10);
        }
    });

    yesBtn.addEventListener('click', function() {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        question.textContent = 'I love you';
        funnyGif.style.display = 'none';
        
        if (bounceInterval) clearInterval(bounceInterval);
        bouncingImage.classList.add('hidden');

        loveImage.src = 'Peanut.png';
        loveMessage.classList.remove('hidden');
        loveMessage.classList.add('unhidden');
    });
});
