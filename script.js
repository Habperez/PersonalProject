document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const question = document.getElementById('question');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');
  const funnyGif = document.getElementById('Gif');
  const bouncingImage = document.getElementById('bouncingImage');
  let attemptCount = 0;
  const maxNoAttempts = 15;
  const maxGifAttempts = 30;
  let dx = 2; // Speed for bouncing image along the X-axis
  let dy = 2; // Speed for bouncing image along the Y-axis

  function moveButton() {
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
  }

  function transformNoButton() {
    noBtn.classList.add('no-image-btn');
    noBtn.innerHTML = ''; // Clear the button content
    const img = document.createElement('img');
    img.src = 'fern.jpg'; // Make sure this is the correct path
    img.alt = 'No';
    img.style.width = '100px'; // Adjust size as needed
    img.style.height = 'auto';
    noBtn.appendChild(img);
  }

  function showGif() {
    funnyGif.classList.remove('hidden');
    funnyGif.classList.add('unhidden');
  }

  noBtn.addEventListener('mouseover', function() {
    attemptCount++;
    moveButton();

    if (attemptCount === maxNoAttempts) {
      transformNoButton();
    }

    if (attemptCount === maxGifAttempts) {
      showGif();
    }

    if (attemptCount === 40) {
      // Ensure the bouncing image is visible and starts moving
      bouncingImage.classList.remove('hidden');
      setInterval(bounceImage, 10); // This will start the bouncing effect
    }
  });

  function bounceImage() {
    let rect = bouncingImage.getBoundingClientRect();
    if (rect.top <= 0 || rect.bottom >= window.innerHeight) dy *= -1;
    if (rect.left <= 0 || rect.right >= window.innerWidth) dx *= -1;
    bouncingImage.style.top = (bouncingImage.offsetTop + dy) + 'px';
    bouncingImage.style.left = (bouncingImage.offsetLeft + dx) + 'px';
  }

  yesBtn.addEventListener('click', function() {
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    question.textContent = 'I love you';

    funnyGif.style.display = 'none'; // Hide GIF when showing the love message

    loveImage.src = 'Peanut.png'; // Ensure this is the correct path
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('unhidden');
  });
});
