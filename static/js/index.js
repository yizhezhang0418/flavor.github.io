const researchMenu = document.querySelector('.research-menu');
if (researchMenu) {
  document.addEventListener('click', (event) => {
    if (!researchMenu.contains(event.target)) researchMenu.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && researchMenu.open) {
      researchMenu.open = false;
      researchMenu.querySelector('summary').focus();
    }
  });
}

// Play only one local experiment video at a time.
const players = [...document.querySelectorAll('video')];
players.forEach((player) => {
  player.addEventListener('play', () => {
    players.forEach((other) => {
      if (other !== player) other.pause();
    });
  });

  const showError = () => {
    const card = player.closest('.video-card');
    if (card.querySelector('.video-error')) return;
    const message = document.createElement('p');
    message.className = 'video-error';
    message.setAttribute('role', 'status');
    message.textContent = 'This video could not be loaded. Please try reloading the page.';
    player.parentElement.after(message);
  };
  player.addEventListener('error', showError);
  player.querySelectorAll('source').forEach((source) => {
    source.addEventListener('error', showError);
  });
});
