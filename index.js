function initialize() {
  window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const message = document.getElementById('message');
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    console.log(key);

    if (!key) {
      message.innerHTML = 'Play a beat!';
      setTimeout(() => {
        message.innerHTML = '';
      }, 500);
    }

    key.setAttribute('class', 'key playing');
    sound.currentTime = 0;
    sound.play();

    key.addEventListener('transitionend', (ev) => {
      const key = ev.target;
      console.log(ev);
      key.classList.remove('playing');
    }, false);
  });
}

window.onload = initialize;
