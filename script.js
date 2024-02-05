document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const noBtnImg = document.getElementById('noBtnImg'); // The image inside the "No" button
  const yesBtn = document.getElementById('yesBtn');
  const heading = document.querySelector('h2');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');
  let attemptCount = 0;
  const maxAttempts = 15; // Number of attempts before changing the "No" button image

  noBtn.addEventListener('mouseover', function() {
    attemptCount++;
    if (attemptCount >= maxAttempts) {
      // Change the image source after the specified number of attempts
      noBtnImg.src = 'new-no-button-image.png'; // Replace with your new image path
    }

    // Move the button to a random position
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
  });

  yesBtn.addEventListener('click', function() {
    // Hide the buttons and the heading
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    heading.style.display = 'none';

    // Show the love image
    loveImage.src = 'path-to-your-uploaded-image.png'; // Replace with your actual image path
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('unhidden');
  });
});
