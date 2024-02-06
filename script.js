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
        console.log("Attempt count:", attemptCount);
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
            console.log("Reached 100 attempts");
            document.getElementById('question').style.display = 'none';
            document.getElementById('loveMessage').style.display = 'none';
            document.getElementById('Gif').style.display = 'none';
            document.getElementById('usImage').style.display = 'none';
            document.getElementById('loveMeImage').style.display = 'none';
            noBtn.style.display = 'none';

            yesBtn.classList.add('yesButtonLarge');
        }
    });

    yesBtn.addEventListener('click', function() {
        // Hide elements that are not needed for the "I love you" screen
        funnyGif.style.display = 'none'; // Hide the GIF
        usImage.style.display = 'none'; // Hide the "Us" image
        loveMeImage.style.display = 'none'; // Hide the "Love Me" image
        noBtn.style.display = 'none'; // Hide the "No" button
    
        // Optional: If you have other elements that should be hidden, hide them here as well
    
        // Make the "I love you" message visible and update its text
        // If 'question' is where the initial question was displayed and you want to reuse it
        question.textContent = 'Eu te amo muito meu amor. ♥'; // Update the text content
        question.style.display = 'block'; // Make sure it is visible
    
        // Show the love message container if it's separate from 'question'
        loveMessage.style.display = 'block';
    
        // Display the peanut image
        loveImage.src = 'Peanut.png'; // Make sure this path is correct
        loveImage.style.display = 'block'; // Ensure the image is visible
    
        // Reset the "Yes" button appearance if needed
        yesBtn.classList.remove('yesButtonLarge'); // Remove the large button class to reset its size
        // Additional style resets for the "Yes" button can be applied here if necessary
    });

});
