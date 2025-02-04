// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 20; i++) { // Generar 20 globos
      createBalloon();
  }
});

function createBalloon() {
  let balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Posición aleatoria en la pantalla
  balloon.style.left = Math.random() * window.innerWidth + "px";

  // Color aleatorio
  const colors = ["red", "blue", "yellow", "green", "purple", "orange"];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(balloon);

  // Eliminar el globo después de la animación
  setTimeout(() => {
      balloon.remove();
  }, 5000);
}

const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');

    playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pausar';
      } else {
        audio.pause();
        playPauseBtn.textContent = 'Reanudar';
      }
    });