// Elements
const envelope = document.getElementById('envelope');
const valentineContent = document.getElementById('valentineContent');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');

// Open Envelope
envelope.addEventListener('click', () => {
  // Hide the envelope and show the content
  envelope.style.display = 'none';
  valentineContent.style.display = 'block';
});

// No Button Behavior (shifting away on every click)
noBtn.addEventListener('click', () => {
  // Get random positions for X and Y within the window size
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random X position
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Y position

  // Move the button to the random position
  noBtn.style.position = 'absolute'; // Ensure it's positioned absolutely
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';  // Smooth transition
});

// Yes Button Behavior (show the flashy popup)
yesBtn.addEventListener('click', () => {
  // Hide the Valentine content (question and buttons)
  valentineContent.style.display = 'none';  // Hide the question and buttons
  
  // Show the popup with final text
  popup.style.display = 'flex';  // Show the popup
});
