document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const question = document.getElementById('question');
    const loveMessage = document.getElementById('loveMessage');
    const loveImage = document.getElementById('loveImage');
    const funnyGif = document.getElementById('Gif');
    const usImage = document.getElementById('usImage');
    const loveMeImage = document.getElementById('loveMeImage');
    let attemptCount = 0;
    const maxNoImageAttempts = 15;
    const maxGifAttempts = 30;
    const maxUsImageAttempts = 40;
    const maxLoveMeImageAttempts = 60;

    function moveButton() {
        noBtn.style.position = 'absolute';
        noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
        noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
    }

    function transformNoButtonIfNeeded() {
        if (attemptCount >= maxNoImageAttempts && !noBtn.querySelector('img')) {
            // Add the 'no-image-btn' class to change the button to an image
            noBtn.classList.add('no-image-btn');
            const img = document.createElement('img');
            img.src = 'fern.jpg'; // Verify this path is correct
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
            funnyGif.classList.remove('hidden');
            funnyGif.classList.add('unhidden');
        }

        if (attemptCount === maxUsImageAttempts) {
            usImage.style.display = 'inline';
        }

        if (attemptCount === maxLoveMeImageAttempts) {
            loveMeImage.style.display = 'block';
        }
    });

    yesBtn.addEventListener('click', function() {
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        question.textContent = 'Eu te amo muito meu amor';
        funnyGif.style.display = 'none'; // Hide the GIF
        usImage.style.display = 'none'; // Hide the "Us" image
        loveMeImage.style.display = 'none';

        loveImage.src = 'Peanut.png'; // Verify this path is correct
        loveMessage.classList.remove('hidden');
        loveMessage.classList.add('unhidden');
    });
});
