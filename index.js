function initialize() {
  const keys = document.querySelectorAll('.key');
  const sounds = document.querySelectorAll('audio');

  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'a':
        console.log(`a: ${e.keyCode}`);
        keys[0].setAttribute('class', 'key playing');
        sounds[0].play();
        break;
      case 's':
        console.log(`s: ${e.keyCode}`);
        keys[1].setAttribute('class', 'key playing');
        sounds[1].play();
        break;
      case 'd':
        console.log(`d: ${e.keyCode}`);
        keys[2].setAttribute('class', 'key playing');
        sounds[2].play();
        break;
      case 'f':
        console.log(`f: ${e.keyCode}`);
        keys[3].setAttribute('class', 'key playing');
        sounds[3].play();
        break;
      case 'g':
        console.log(`g: ${e.keyCode}`);
        keys[4].setAttribute('class', 'key playing');
        sounds[4].play();
        break;
      case 'h':
        console.log(`h: ${e.keyCode}`);
        keys[5].setAttribute('class', 'key playing');
        sounds[5].play();
        break;
      case 'j':
        console.log(`j: ${e.keyCode}`);
        keys[6].setAttribute('class', 'key playing');
        sounds[6].play();
        break;
      case 'k':
        console.log(`k: ${e.keyCode}`);
        keys[7].setAttribute('class', 'key playing');
        sounds[7].play();
        break;
      case 'l':
        console.log(`l: ${e.keyCode}`);
        keys[8].setAttribute('class', 'key playing');
        sounds[8].play();
        break;
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
        }
      });
}
window.onload = initialize;
