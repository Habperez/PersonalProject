document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const question = document.getElementById('question');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');
  const funnyGif = document.getElementById('Gif'); // Ensure this ID matches your GIF's ID in HTML
  let attemptCount = 0;
  const maxNoAttempts = 15;
  const maxGifAttempts = 30;

  function moveButton() {
    if (attemptCount < maxNoAttempts || attemptCount >= maxGifAttempts) {
      // Allows the button to move until it changes to an image,
      // and continues moving after the GIF appears.
      noBtn.style.position = 'absolute';
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
    }
  }

  noBtn.addEventListener('mouseover', function() {
    attemptCount++;
    // This condition allows the "No" button to move indefinitely.
    moveButton();

    if (attemptCount === maxNoAttempts) {
      transformNoButton();
    }

    if (attemptCount === maxGifAttempts) {
      showGif();
    }
  });

  yesBtn.addEventListener('click', function() {
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    question.textContent = 'I love you';
    loveImage.src = 'Peanut.png'; // Ensure this src points to your image.
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('unhidden');
  });
});
