const sonic = document.querySelector('.sonic');
const eggman = document.querySelector('.eggman');
const shadow = document.querySelector('.shadow');

const jump = () => {
  sonic.classList.add('jump');

  setTimeout(() => {
    sonic.classList.remove('jump');
  }, 650);
}

const loop = setInterval(() => {
  const eggmanPosition = eggman.offsetLeft;
  const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

  if (eggmanPosition <= 240 && eggmanPosition > 0 && sonicPosition < 130) {

    eggman.style.animation = 'none';
    eggman.style.left = `${eggmanPosition}px`;

    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = "Sonic gameover.png"

  }
})
document.addEventListener('keydown', jump)


