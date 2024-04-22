// Get the window and title bar elements
const windowEl = document.getElementById('myWindow');
const titleBarEl = document.getElementById('titleBar');

// Add event listeners to the window
windowEl.addEventListener('mousedown', function() {
  titleBarEl.classList.remove('inactive');
});

windowEl.addEventListener('mouseup', function() {
  titleBarEl.classList.add('inactive');
});
