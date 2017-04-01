function initialize() {
  window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const message = document.getElementById('message');
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!key) {
      message.classList.add('fade');
      message.addEventListener('transitionend', (ev) => {
        ev.target.classList.remove('fade');
      });
    } else {
      key.setAttribute('class', 'key playing');
      sound.currentTime = 0;
      sound.play();

      key.addEventListener('transitionend', (ev) => {
        ev.target.classList.remove('playing');
      }, false);
    }
  });
}

window.onload = initialize;
