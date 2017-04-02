function dropThatBeat(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const message = document.getElementById('message');
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!key) {
    // If a wrong press is pressed, alert user to play correct key
    message.classList.add('fade');
    message.addEventListener('transitionend', (ev) => {
      ev.target.classList.remove('fade');
    });
  } else {
    // Transforms key styles and plays beat
    key.setAttribute('class', 'key playing');
    sound.currentTime = 0;
    sound.play();

    // Returns key to original css value after transition ends
    key.addEventListener('transitionend', (ev) => {
      ev.target.classList.remove('playing');
    }, false);
  }
}

window.onload = () => {
  window.addEventListener('keydown', dropThatBeat);
};
