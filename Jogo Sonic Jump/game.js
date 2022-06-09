const sonic = document.querySelector('.sonic');
const eggman = document.querySelector('.eggman');

const jump = () => {
    sonic.classList.add ('jump');

    setTimeout(() => {
      sonic.classList.remove ('jump');    
    }, 650);
}

document.addEventListener('keydown', jump);

