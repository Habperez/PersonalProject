document.addEventListener('DOMContentLoaded', function() {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');
  const heading = document.querySelector('h2');
  const loveMessage = document.getElementById('loveMessage');
  const loveImage = document.getElementById('loveImage');

  noBtn.addEventListener('mouseover', function() {
    // Move the button to a random position
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.clientWidth) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.clientHeight) + 'px';
  });

  yesBtn.addEventListener('click', function() {
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    heading.textContent = 'I love you';


    loveImage.src = 'Peanut.png';
    loveMessage.classList.remove('hidden');
    // loveMessage.classList.add('unhidden');
  });
});
