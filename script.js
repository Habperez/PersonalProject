document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');

  // "No"
  noBtn.addEventListener('mouseover', function() {

    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
  });

  yesBtn.addEventListener('click', function() {

    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    loveImage.src = 'Peanut.png';
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('unhidden');
  });
});
