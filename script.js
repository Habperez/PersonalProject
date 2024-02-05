document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const question = document.getElementById('question');
    const loveMessage = document.getElementById('loveMessage');
    const loveImage = document.getElementById('loveImage');
    const funnyGif = document.getElementById('Gif');
    const usImage = document.getElementById('usImage'); // Get the "Us" image element
    let attemptCount = 0;
    const maxNoImageAttempts = 15;
    const maxGifAttempts = 30;

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
            img.src = 'fern.jpg'; // Update the path to your image
            img.alt = 'No';
            img.style.width = '100px'; // Set the image size
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

        // After 40 attempts, show the "Us" image next to the "Yes" button
        if (attemptCount === 40) {
            usImage.style.display = 'inline';
        }
    });

    yesBtn.addEventListener('click', function() {
        // Hide the "Yes" and "No" buttons and the question
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        question.textContent = 'I love you';

        // Hide the GIF and the "Us" image
        funnyGif.style.display = 'none';
        usImage.style.display = 'none'; // Hide the "Us" image

        // Show the love message and image
        loveImage.src = 'Peanut.png'; // Make sure this is the correct path
        loveMessage.classList.remove('hidden');
        loveMessage.classList.add('unhidden');
    });
});
