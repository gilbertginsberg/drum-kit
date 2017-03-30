function initialize() {
  const keys = document.querySelectorAll('.key');
  const sounds = document.querySelectorAll('audio');
  const message = document.getElementById('message');

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'a':
        keys[0].setAttribute('class', 'key playing');
        sounds[0].play();
        break;
      case 's':
        keys[1].setAttribute('class', 'key playing');
        sounds[1].play();
        break;
      case 'd':
        keys[2].setAttribute('class', 'key playing');
        sounds[2].play();
        break;
      case 'f':
        keys[3].setAttribute('class', 'key playing');
        sounds[3].play();
        break;
      case 'g':
        keys[4].setAttribute('class', 'key playing');
        sounds[4].play();
        break;
      case 'h':
        keys[5].setAttribute('class', 'key playing');
        sounds[5].play();
        break;
      case 'j':
        keys[6].setAttribute('class', 'key playing');
        sounds[6].play();
        break;
      case 'k':
        keys[7].setAttribute('class', 'key playing');
        sounds[7].play();
        break;
      case 'l':
        keys[8].setAttribute('class', 'key playing');
        sounds[8].play();
        break;
      default:
        message.innerHTML = 'Play a beat!';
        setTimeout(() => {
          message.innerHTML = '';
        }, 500);
    }
  });

  document.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'a':
        keys[0].setAttribute('class', 'key');
        break;
      case 's':
        keys[1].setAttribute('class', 'key');
        break;
      case 'd':
        keys[2].setAttribute('class', 'key');
        break;
      case 'f':
        keys[3].setAttribute('class', 'key');
        break;
      case 'g':
        keys[4].setAttribute('class', 'key');
        break;
      case 'h':
        keys[5].setAttribute('class', 'key');
        break;
      case 'j':
        keys[6].setAttribute('class', 'key');
        break;
      case 'k':
        keys[7].setAttribute('class', 'key');
        break;
      case 'l':
        keys[8].setAttribute('class', 'key');
        break;
      default:
        console.log('Wrong key pressed');
    }
  });
}

window.onload = initialize;
