// Wait for splash animation to finish, then show speech overlay
setTimeout(() => {
  // Hide splash screen
  document.querySelector('.splash').style.display = 'none';

  // Show speech overlay
  document.getElementById('speechOverlay').style.display = 'flex';

  function hideSpeechOverlay() {
    document.getElementById('speechOverlay').style.display = 'none';
  }
  document.getElementById('speechOverlay').addEventListener('click', hideSpeechOverlay);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') hideSpeechOverlay();
  });
}, 4000); // 5000ms = 5 seconds, match your splash duration