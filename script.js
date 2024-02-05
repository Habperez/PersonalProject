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
    // This function will always be called, allowing the button to move.
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
  }

  noBtn.addEventListener('mouseover', function() {
    attemptCount++;
    moveButton(); // Keep moving the button on each hover.

    if (attemptCount === maxNoAttempts) {
      // Transform the "No" button into an image.
      noBtn.classList.add('no-image-btn');
      noBtn.innerHTML = '';
      const img = document.createElement('img');
      img.src = 'fern.jpg'; // Ensure this src points to your image.
      img.alt = 'No';
      img.style.width = '100px';
      img.style.height = 'auto';
      noBtn.appendChild(img);
    }

    if (attemptCount === maxGifAttempts) {
      // Show the GIF next to the "Yes" button.
      funnyGif.classList.remove('hidden');
      funnyGif.classList.add('unhidden');
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
