document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    // Make sure the button has an absolute position
    noBtn.style.position = 'absolute';
    noBtn.style.transition = '0.5s';

    document.addEventListener('mousemove', function(e) {
        const noBtnRect = noBtn.getBoundingClientRect();
        const noBtnCenterX = noBtnRect.left + noBtnRect.width / 2;
        const noBtnCenterY = noBtnRect.top + noBtnRect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const distance = Math.sqrt(Math.pow(noBtnCenterX - mouseX, 2) + Math.pow(noBtnCenterY - mouseY, 2));

        // If the mouse is within 100 pixels of the button's center, move the button
        if (distance < 100) {
            let newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
            let newY = Math.random() * (window.innerHeight - noBtn.clientHeight);

            // Avoid placing the button too close to the edges of the window
            newX = Math.max(50, Math.min(newX, window.innerWidth - noBtn.clientWidth - 50));
            newY = Math.max(50, Math.min(newY, window.innerHeight - noBtn.clientHeight - 50));

            noBtn.style.left = newX + 'px';
            noBtn.style.top = newY + 'px';
        }
    });
});
