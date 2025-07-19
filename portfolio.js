

document.getElementById('myBtn').onclick = function() {
  window.location.href = 'introduction.html';
};

document.getElementById('myBtn_camp').onclick = function() {
  window.location.href = 'projects.html';
};


document.getElementById('myBtn_tesla').onclick = function() {
  window.location.href = 'contact.html';
};

document.getElementById('myBtn_lab').onclick = function() {
  window.location.href = 'interest.html';
};



document.addEventListener('DOMContentLoaded', function() {
  // Check if nosplash flag is present in URL or if splash was already shown in this session
  const params = new URLSearchParams(window.location.search);
  const noSplash = params.get('nosplash') === '1';
  const splashShown = sessionStorage.getItem('splashShown') === '1';

  if (noSplash || splashShown) {
    document.querySelector('.splash').style.display = 'none';
    document.getElementById('speechOverlay').style.display = 'flex';
    function hideSpeechOverlay() {
      document.getElementById('speechOverlay').style.display = 'none';
    }
    document.getElementById('speechOverlay').addEventListener('click', hideSpeechOverlay);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') hideSpeechOverlay();
    });
  } else {
    // Show splash only once per session
    sessionStorage.setItem('splashShown', '1');
    setTimeout(() => {
      document.querySelector('.splash').style.display = 'none';
      document.getElementById('speechOverlay').style.display = 'flex';
      function hideSpeechOverlay() {
        document.getElementById('speechOverlay').style.display = 'none';
      }
      document.getElementById('speechOverlay').addEventListener('click', hideSpeechOverlay);
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') hideSpeechOverlay();
      });
    }, 4000); // or your splash duration
  }
});