const unlockButton = document.getElementById('unlock');
const pinInput = document.getElementById('pin');
const links = document.getElementById('links');

const ACCESS_PIN = '0102';

unlockButton.addEventListener('click', () => {

  const enteredPin = pinInput.value;

  if(enteredPin === ACCESS_PIN){

    links.classList.remove('disabled');

    unlockButton.innerHTML = 'Acesso liberado';

    unlockButton.style.background = '#3f9f31';

  } else {

    pinInput.style.borderColor = '#d14b4b';

    unlockButton.innerHTML = 'PIN inválido';

    setTimeout(() => {

      unlockButton.innerHTML = 'Liberar acesso';

      pinInput.style.borderColor = '';

    }, 2000);

  }

});