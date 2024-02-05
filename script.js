document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const question = document.getElementById('question');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');
  const funnyGif = document.getElementById('Gif');
  let attemptCount = 0;
  const maxNoAttempts = 15;
  const maxGifAttempts = 30;

  function moveButton() {
    if (attemptCount < maxNoAttempts || attemptCount >= maxGifAttempts) {

      noBtn.style.position = 'absolute';
      noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
      noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
    }
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
  });

yesBtn.addEventListener('click', function() {
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  question.textContent = 'I love you';
  
  const gifElement = document.getElementById('Gif');
  gifElement.style.display = 'none';
  
  loveImage.src = 'Peanut.png';
  loveMessage.classList.remove('hidden');
  loveMessage.classList.add('unhidden');
});

});
