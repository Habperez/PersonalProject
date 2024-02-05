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
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
  }

  noBtn.addEventListener('mouseover', function() {
    if (attemptCount < maxGifAttempts) {
      attemptCount++;
      moveButton();
    }

    if (attemptCount === maxNoAttempts) {
      noBtn.classList.add('no-image-btn');
      noBtn.innerHTML = '';
      const img = document.createElement('img');
      img.src = 'fern.jpg';
      img.alt = 'No';
      img.style.width = '200px';
      img.style.height = 'auto';
      noBtn.appendChild(img);
    }


    if (attemptCount === maxGifAttempts) {
      funnyGif.classList.remove('hidden');
      funnyGif.classList.add('unhidden');
    }
  });

  yesBtn.addEventListener('click', function() {
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    question.textContent = 'I love you';

    
    loveImage.src = 'Peanut.png'; 
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('unhidden');
  });
});
