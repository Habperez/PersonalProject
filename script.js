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
            noBtn.classList.add('no-image-btn');
            const img = document.createElement('img');
            img.src = 'fern.jpg';
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

        if (attemptCount === 100) {
            // Hide all elements except the "Yes" button
            document.querySelectorAll('#interactionArea > *, #loveMessage').forEach(element => element.style.display = 'none');
            // Enlarge and center the "Yes" button
            yesBtn.classList.add('yesButtonLarge');
            // Optionally, reset the text and image for when the button is clicked next
            question.style.display = "block";
            loveMessage.style.display = "block";
            loveImage.src = ""; // Reset or set to a default image if desired
        }
    });

yesBtn.addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('Gif').style.display = 'none';
    document.getElementById('usImage').style.display = 'none';
    document.getElementById('loveMeImage').style.display = 'none';
    noBtn.style.display = 'none';
    loveMessage.textContent = 'Eu te amo muito meu amor. ♥';
    loveMessage.style.display = "block";

    loveImage.src = 'Peanut.png';
    loveImage.style.display = 'block';

    yesBtn.classList.remove('yesButtonLarge');
    yesBtn.style.position = 'static';
    yesBtn.style.transform = 'none';
    yesBtn.style.fontSize = '20px';
    yesBtn.style.padding = '10px 20px';
});

});
