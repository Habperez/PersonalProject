document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const question = document.getElementById('question');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');
  let attemptCount = 0;
  const maxAttempts = 15;
  
  function moveButton() {
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
  }

  noBtn.addEventListener('mouseover', function() {
    moveButton();
    attemptCount++;
    if (attemptCount === maxAttempts) {

      noBtn.innerHTML = '';
      const img = new Image();
      img.src = 'fern.jpg';
      img.alt = 'No';
      img.style.width = '1389px'; 
      img.style.height = 'auto';
      noBtn.appendChild(img);
    }
  });

  yesBtn.addEventListener('click', function() {
 
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    question.textContent = 'I love you';

    // Show the love image
    loveImage.src = 'Peanut.png'; 
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('unhidden');
  });
});
