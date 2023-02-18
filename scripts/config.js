function openPlayerConfig(event) {
  editedPlayer  = +event.target.dataset.playerid; //contains the data- attributes // +'1' => 1
  playerConfigOverlayElement.style.display = 'block';
  backDropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backDropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = ''; // to select the input to empty the entry after closing the form
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim(); //trim removes excess whitespaces

  if(!enteredPlayername) { // OR enteredPlayername === ''
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername; //to access the playername 1 or 2 and store it in an array

  closePlayerConfig(); //to close at the end, after confirming the name
}