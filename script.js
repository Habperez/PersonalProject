document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const question = document.getElementById('question');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');
  const Gif = document.getElementById('Gif');
  const bouncingImage = document.getElementById('bouncingImage');
  let attemptCount = 0;
  const maxNoAttempts = 15;
  const maxGifAttempts = 30;
  let dx = 2;
  let dy = 2;
  let bounceInterval = null;

  function moveButton() {
    // This ensures the button continues to move until it transforms.
    if (attemptCount < maxNoAttempts) {
      noBtn.style.position = 'absolute';
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
    }
  }

  function transformNoButton() {
    // Ensure this transformation only happens once by checking the class.
    if (!noBtn.classList.contains('no-image-btn')) {
      noBtn.classList.add('no-image-btn');
      noBtn.innerHTML = ''; // Clear the button content
      const img = document.createElement('img');
      img.src = 'fern.jpg'; // Verify this is the correct path
      img.alt = 'No';
      img.style.width = '100px'; // Adjust size as needed
      img.style.height = 'auto';
      noBtn.appendChild(img);
    }
  }

  function bounceImage() {
    let rect = bouncingImage.getBoundingClientRect();
    if (rect.top <= 0 || rect.bottom >= window.innerHeight) dy *= -1;
    if (rect.left <= 0 || rect.right >= window.innerWidth) dx *= -1;
    bouncingImage.style.top = (bouncingImage.offsetTop + dy) + 'px';
    bouncingImage.style.left = (bouncingImage.offsetLeft + dx) + 'px';
  }

  noBtn.addEventListener('mouseover', function() {
    attemptCount++;
    moveButton();

    if (attemptCount === maxNoAttempts) {
      transformNoButton();
    }

    if (attemptCount === maxGifAttempts) {
      Gif.classList.remove('hidden');
      Gif.classList.add('unhidden');
    }

    if (attemptCount === 40 && !bounceInterval) {
      bouncingImage.classList.remove('hidden');
      bounceInterval = setInterval(bounceImage, 10); // Start the bouncing effect
    }
  });

  yesBtn.addEventListener('click', function() {
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    question.textContent = 'I love you';
    Gif.style.display = 'none'; // Also hide the GIF
    
    // Stop the bouncing image
    if (bounceInterval) clearInterval(bounceInterval);
    bouncingImage.style.display = 'none';

    loveImage.src = 'Peanut.png'; // Confirm this is the correct path
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('unhidden');
  });
});
