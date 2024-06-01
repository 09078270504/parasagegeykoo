const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

function createBackgroundStar() {
    const star = document.createElement('div');
    star.classList.add('star-background');
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = `${Math.random() * 3}px`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);
}

for (let i = 0; i <100; i++) {
    createBackgroundStar();
}

setInterval(createBackgroundStar, 100);
